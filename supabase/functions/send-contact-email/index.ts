import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    // Send email to business
    const emailResponse = await resend.emails.send({
      from: "CEGOPRINT Contact Form <onboarding@resend.dev>",
      to: ["cegoprint2020@gmail.com"],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Response Instructions:</strong> Please respond to this inquiry within 24 hours for best customer service.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to customer
    await resend.emails.send({
      from: "CEGOPRINT <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting CEGOPRINT!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Thank You for Contacting CEGOPRINT!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to CEGOPRINT Business Centre & More. We have received your message regarding "<strong>${subject}</strong>" and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
            <h3 style="color: #166534; margin-top: 0;">Your Message Summary:</h3>
            <p style="color: #166534; margin: 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #166534; margin: 10px 0 0 0;"><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Need Immediate Assistance?</h3>
            <p style="color: #92400e; margin-bottom: 10px;">For urgent matters, feel free to contact us directly:</p>
            <p style="color: #92400e; margin: 5px 0;"><strong>Phone/WhatsApp:</strong> 08038003004</p>
            <p style="color: #92400e; margin: 5px 0;"><strong>Location:</strong> 235, Bola Ahmed Tinubu Road Oreyo, Opposite Oreyo Grammar Sch. Oreyo, Igbogbo, Ikorodu Lagos</p>
          </div>
          
          <p>We appreciate your interest in our services including printing, computer training, bill payments, and more.</p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>CEGOPRINT Team</strong><br>
            <em>Your trusted business partner in Ikorodu</em>
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);