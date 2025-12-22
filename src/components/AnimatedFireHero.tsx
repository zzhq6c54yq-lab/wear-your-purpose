import React, { useState, useEffect, useRef, useCallback } from "react";
import heroCampfire from "@/assets/hero-campfire.jpg";
import CinematicVignette from "./CinematicVignette";
import LightLeak from "./LightLeak";
import { ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Ember particle component
const Ember = ({ delay, left, duration, size, mouseInfluence }: { 
  delay: number; 
  left: number; 
  duration: number; 
  size: number;
  mouseInfluence: { x: number; y: number };
}) => (
  <div
    className="absolute rounded-full animate-ember-rise"
    style={{
      left: `${left + mouseInfluence.x * 0.5}%`,
      bottom: "25%",
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle, rgba(255, 200, 100, 1) 0%, rgba(255, 120, 20, 0.8) 50%, transparent 100%)`,
      boxShadow: `0 0 ${size * 2}px rgba(255, 150, 50, 0.6)`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

// Smoke wisp component
const SmokeWisp = ({ delay, left, duration, size, mouseInfluence }: { 
  delay: number; 
  left: number; 
  duration: number; 
  size: number;
  mouseInfluence: { x: number; y: number };
}) => (
  <div
    className="absolute rounded-full animate-smoke-rise"
    style={{
      left: `${left + mouseInfluence.x * 0.8}%`,
      bottom: "30%",
      width: `${size}px`,
      height: `${size * 1.5}px`,
      background: `radial-gradient(ellipse at center, rgba(180, 180, 180, 0.15) 0%, rgba(150, 150, 150, 0.08) 40%, transparent 70%)`,
      filter: `blur(${size / 3}px)`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

// Interactive Flame component
const Flame = ({ 
  left, 
  delay, 
  height, 
  width, 
  mouseInfluence 
}: { 
  left: number; 
  delay: number; 
  height: number; 
  width: number;
  mouseInfluence: { x: number; y: number };
}) => {
  // Calculate lean based on mouse position
  const leanAngle = mouseInfluence.x * 15; // Max 15 degrees lean
  const stretchFactor = 1 + Math.abs(mouseInfluence.x) * 0.2;
  
  return (
    <div
      className="absolute animate-flame-dance"
      style={{
        left: `${left}%`,
        bottom: "22%",
        width: `${width}px`,
        height: `${height * stretchFactor}px`,
        background: `linear-gradient(to top, 
          rgba(255, 80, 0, 0.6) 0%, 
          rgba(255, 120, 20, 0.5) 20%, 
          rgba(255, 160, 40, 0.4) 40%, 
          rgba(255, 200, 60, 0.3) 60%, 
          rgba(255, 220, 100, 0.2) 80%, 
          transparent 100%)`,
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        filter: "blur(3px)",
        transformOrigin: "bottom center",
        transform: `skewX(${leanAngle}deg)`,
        animationDelay: `${delay}s`,
        transition: "transform 0.3s ease-out",
      }}
    />
  );
};

const AnimatedFireHero = () => {
  const [brandedImage, setBrandedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mouseInfluence, setMouseInfluence] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAttemptedGeneration = useRef(false);

  // Track mouse movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized -1 to 1)
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    // Invert X so flames lean away from cursor
    setMouseInfluence({ x: -deltaX, y: -deltaY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseInfluence({ x: 0, y: 0 });
  }, []);

  // Generate branded image on mount (only once)
  useEffect(() => {
    if (hasAttemptedGeneration.current) return;
    hasAttemptedGeneration.current = true;

    const generateBrandedImage = async () => {
      setIsGenerating(true);
      
      try {
        const response = await fetch(heroCampfire);
        const blob = await response.blob();
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });

        const { data, error } = await supabase.functions.invoke('generate-branded-hero', {
          body: { imageBase64: base64 }
        });

        if (error) {
          console.error("Edge function error:", error);
          return;
        }

        if (data?.imageUrl) {
          setBrandedImage(data.imageUrl);
          toast.success("Thrive logos added to hoodies!");
        }
      } catch (err) {
        console.error("Error generating branded image:", err);
      } finally {
        setIsGenerating(false);
      }
    };

    generateBrandedImage();
  }, []);

  // Generate more embers with variety
  const embers = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    left: 38 + Math.random() * 24,
    duration: 2.5 + Math.random() * 2.5,
    size: 2 + Math.random() * 4,
  }));

  // Generate smoke wisps
  const smokeWisps = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    left: 42 + Math.random() * 16,
    duration: 4 + Math.random() * 3,
    size: 30 + Math.random() * 40,
  }));

  // Generate flames
  const flames = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: 44 + (i * 1.2) + Math.random() * 0.5,
    delay: Math.random() * 0.5,
    height: 40 + Math.random() * 30,
    width: 15 + Math.random() * 10,
  }));

  const displayImage = brandedImage || heroCampfire;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CinematicVignette intensity="medium" />
      <LightLeak variant="golden" animated={true} />
      
      {/* Main image */}
      <img 
        src={displayImage}
        alt="Friends laughing around campfire in Thrive hoodies"
        className={`w-full h-full object-cover transition-opacity duration-500 ${isGenerating ? 'opacity-80' : 'opacity-100'}`}
      />
      
      {/* Fire effects overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated flames - responsive to mouse */}
        {flames.map((flame) => (
          <Flame key={`flame-${flame.id}`} {...flame} mouseInfluence={mouseInfluence} />
        ))}
        
        {/* Central fire glow - shifts with mouse */}
        <div 
          className="absolute animate-fire-glow transition-transform duration-300"
          style={{
            left: `${45 + mouseInfluence.x * 3}%`,
            bottom: "20%",
            width: "15%",
            height: "25%",
            background: "radial-gradient(ellipse at center, rgba(255, 120, 20, 0.5) 0%, rgba(255, 80, 20, 0.3) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        
        {/* Secondary fire flicker */}
        <div 
          className="absolute animate-fire-flicker transition-transform duration-300"
          style={{
            left: `${42 + mouseInfluence.x * 4}%`,
            bottom: "18%",
            width: "20%",
            height: "30%",
            background: "radial-gradient(ellipse at center, rgba(255, 160, 40, 0.4) 0%, rgba(255, 100, 20, 0.2) 50%, transparent 80%)",
            filter: "blur(30px)",
            transform: `skewX(${mouseInfluence.x * 10}deg)`,
          }}
        />
        
        {/* Warm ambient glow */}
        <div 
          className="absolute animate-fire-ambient transition-transform duration-500"
          style={{
            left: `${30 + mouseInfluence.x * 2}%`,
            bottom: "10%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(ellipse at center bottom, rgba(255, 140, 40, 0.25) 0%, rgba(255, 80, 20, 0.12) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        
        {/* Fire light cast on surroundings */}
        <div 
          className="absolute animate-fire-cast"
          style={{
            left: "20%",
            bottom: "0%",
            width: "60%",
            height: "50%",
            background: "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(255, 100, 30, 0.15) 0%, transparent 60%)",
            filter: "blur(20px)",
          }}
        />
      </div>
      
      {/* Smoke wisps - responsive to mouse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {smokeWisps.map((wisp) => (
          <SmokeWisp key={`smoke-${wisp.id}`} {...wisp} mouseInfluence={mouseInfluence} />
        ))}
      </div>
      
      {/* Floating embers - responsive to mouse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {embers.map((ember) => (
          <Ember key={`ember-${ember.id}`} {...ember} mouseInfluence={mouseInfluence} />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" />
      
      {/* Loading indicator */}
      {isGenerating && (
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 z-20">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs text-foreground/70">Adding logos...</span>
        </div>
      )}
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in z-10 pointer-events-none" style={{ animationDelay: "1s" }}>
        <span className="font-sans text-[10px] tracking-ultra text-white/70 uppercase hero-text-shadow">Scroll</span>
        <ChevronDown className="text-white/70 animate-bounce" size={20} />
      </div>
    </div>
  );
};

export default AnimatedFireHero;
