import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";
import { Resend } from "npm:resend@2.0.0";

const ContactEmailSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(10).max(30).regex(/^[0-9+()\s-]+$/),
  subject: z.string().trim().min(5).max(200),
  message: z.string().trim().min(10).max(2000),
});

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character] ?? character;
  });

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ success: false, error: "Method not allowed" }, 405);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ success: false, error: "Invalid request body" }, 400);
  }

  const parsed = ContactEmailSchema.safeParse(body);
  if (!parsed.success) {
    return jsonResponse({
      success: false,
      error: "Please check the name, phone, email, subject, and message fields.",
    }, 400);
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("Contact email service is not configured");
    return jsonResponse({ success: false, error: "Email service is unavailable" }, 500);
  }

  const resend = new Resend(apiKey);
  const { name, email, phone, subject, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    const businessEmail = await resend.emails.send({
      from: "CEGOPRINT Contact Form <onboarding@resend.dev>",
      to: ["cegoprint2020@gmail.com"],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <h3>Message</h3>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (businessEmail.error) {
      console.error("Business contact email delivery failed");
      return jsonResponse({ success: false, error: "Unable to send your message right now" }, 502);
    }

    const confirmationEmail = await resend.emails.send({
      from: "CEGOPRINT <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting CEGOPRINT!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>Thank You for Contacting CEGOPRINT!</h2>
          <p>Dear ${safeName},</p>
          <p>We received your message regarding “<strong>${safeSubject}</strong>” and will get back to you within 24 hours.</p>
          <p><strong>Phone/WhatsApp:</strong> 08038003004</p>
          <p><strong>Location:</strong> 235, Bola Ahmed Tinubu Road Oreyo, Opposite Oreyo Grammar Sch. Oreyo, Igbogbo, Ikorodu Lagos</p>
          <p>Best regards,<br><strong>CEGOPRINT Team</strong></p>
        </div>
      `,
    });

    if (confirmationEmail.error) {
      console.error("Contact confirmation email delivery failed");
    }

    return jsonResponse({
      success: true,
      message: "Email sent successfully",
    });
  } catch {
    console.error("Contact email service request failed");
    return jsonResponse({ success: false, error: "Unable to send your message right now" }, 502);
  }
};

serve(handler);