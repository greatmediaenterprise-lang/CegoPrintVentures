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
    let imageReady = false;
    let minimumElapsed = false;
    let interactionTimer: number | undefined;
    const finishInitial = () => {
      if (active && imageReady && minimumElapsed) setLoading(false);
    };
    const image = new Image();
    const finishImage = () => { imageReady = true; finishInitial(); };
    image.onload = finishImage;
    image.onerror = finishImage;
    image.src = heroImage;
    if (image.complete) finishImage();
    const minimumTimer = window.setTimeout(() => { minimumElapsed = true; finishInitial(); }, 700);
    const fallbackTimer = window.setTimeout(finishImage, 1800);

    // A single listener covers navigation links and action buttons throughout the page.
    const showOnAction = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const action = event.target.closest('a[href], button');
      if (!action || action.hasAttribute('disabled') || action.getAttribute('aria-disabled') === 'true') return;
      // Menu and dialog controls change the current view instantly, not the destination.
      if (action.matches('[aria-controls="mobile-navigation"], [data-radix-dialog-close]')) return;
      window.clearTimeout(interactionTimer);
      setLoading(true);
      interactionTimer = window.setTimeout(() => setLoading(false), 700);
    };
    document.addEventListener('click', showOnAction, true);
    return () => {
      active = false;
      document.removeEventListener('click', showOnAction, true);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(interactionTimer);
    };
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
