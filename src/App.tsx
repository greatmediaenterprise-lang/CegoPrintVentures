import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const image = new Image();
    const finish = () => { if (active) setLoading(false); };
    image.onload = finish;
    image.onerror = finish;
    image.src = heroImage;
    if (image.complete) finish();
    const timeout = window.setTimeout(finish, 1800);
    return () => { active = false; window.clearTimeout(timeout); };
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    {loading && (
      <div className="site-loader" role="status" aria-label="Loading CEGOPRINT website">
        <div className="site-loader__content">
          <div className="site-loader__mark"><img src="/lovable-uploads/111830bb-85a5-4c56-b331-60887915da24.png" alt="" /></div>
          <span className="site-loader__spinner" aria-hidden="true" />
          <span className="site-loader__name">CEGOPRINT</span>
          <span className="site-loader__caption">Business Centre & More</span>
        </div>
      </div>
    )}
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
