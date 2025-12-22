import React, { useState, useEffect, useRef } from "react";
import heroCampfire from "@/assets/hero-campfire.jpg";
import CinematicVignette from "./CinematicVignette";
import LightLeak from "./LightLeak";
import { ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Ember particle component
const Ember = ({ delay, left, duration }: { delay: number; left: number; duration: number }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-300 animate-ember-rise opacity-80"
    style={{
      left: `${left}%`,
      bottom: "25%",
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

const AnimatedFireHero = () => {
  const [brandedImage, setBrandedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const hasAttemptedGeneration = useRef(false);

  // Generate branded image on mount (only once)
  useEffect(() => {
    if (hasAttemptedGeneration.current) return;
    hasAttemptedGeneration.current = true;

    const generateBrandedImage = async () => {
      setIsGenerating(true);
      
      try {
        // Convert the campfire image to base64
        const response = await fetch(heroCampfire);
        const blob = await response.blob();
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });

        // Call the edge function to generate branded image
        const { data, error } = await supabase.functions.invoke('generate-branded-hero', {
          body: { imageBase64: base64 }
        });

        if (error) {
          console.error("Edge function error:", error);
          toast.error("Could not generate branded image. Using original.");
          return;
        }

        if (data?.imageUrl) {
          setBrandedImage(data.imageUrl);
          toast.success("Thrive logos added to hoodies!");
        }
      } catch (err) {
        console.error("Error generating branded image:", err);
        // Silently fall back to original image
      } finally {
        setIsGenerating(false);
      }
    };

    generateBrandedImage();
  }, []);

  // Generate random embers
  const embers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    left: 35 + Math.random() * 30, // Center around the fire (35% to 65%)
    duration: 2 + Math.random() * 2,
  }));

  const displayImage = brandedImage || heroCampfire;

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      <CinematicVignette intensity="medium" />
      <LightLeak variant="golden" animated={true} />
      
      {/* Main image */}
      <img 
        src={displayImage}
        alt="Friends laughing around campfire in Thrive hoodies"
        className={`w-full h-full object-cover transition-opacity duration-500 ${isGenerating ? 'opacity-80' : 'opacity-100'}`}
      />
      
      {/* Fire glow overlay - positioned over the campfire area */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central fire glow */}
        <div 
          className="absolute animate-fire-glow"
          style={{
            left: "45%",
            bottom: "20%",
            width: "15%",
            height: "25%",
            background: "radial-gradient(ellipse at center, rgba(255, 120, 20, 0.4) 0%, rgba(255, 80, 20, 0.2) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        
        {/* Secondary fire flicker */}
        <div 
          className="absolute animate-fire-flicker"
          style={{
            left: "42%",
            bottom: "18%",
            width: "20%",
            height: "30%",
            background: "radial-gradient(ellipse at center, rgba(255, 160, 40, 0.3) 0%, rgba(255, 100, 20, 0.15) 50%, transparent 80%)",
            filter: "blur(30px)",
          }}
        />
        
        {/* Warm ambient glow */}
        <div 
          className="absolute animate-fire-ambient"
          style={{
            left: "30%",
            bottom: "10%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(ellipse at center bottom, rgba(255, 140, 40, 0.2) 0%, rgba(255, 80, 20, 0.1) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>
      
      {/* Floating embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {embers.map((ember) => (
          <Ember key={ember.id} {...ember} />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      
      {/* Loading indicator */}
      {isGenerating && (
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 z-20">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs text-foreground/70">Adding logos...</span>
        </div>
      )}
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in z-10" style={{ animationDelay: "1s" }}>
        <span className="font-sans text-[10px] tracking-ultra text-white/70 uppercase hero-text-shadow">Scroll</span>
        <ChevronDown className="text-white/70 animate-bounce" size={20} />
      </div>
    </div>
  );
};

export default AnimatedFireHero;
