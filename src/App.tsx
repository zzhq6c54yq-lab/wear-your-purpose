import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { ProductProvider } from "@/contexts/ProductContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Affirmations from "./pages/Affirmations";
import Community from "./pages/Community";
import ThriveMT from "./pages/ThriveMT";
import ThriveMTCollection from "./pages/ThriveMTCollection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProductProvider>
        <WishlistProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/affirmations" element={<Affirmations />} />
              <Route path="/community" element={<Community />} />
              <Route path="/thrive-mt" element={<ThriveMT />} />
              <Route path="/thrivemt-collection" element={<ThriveMTCollection />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </ProductProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
