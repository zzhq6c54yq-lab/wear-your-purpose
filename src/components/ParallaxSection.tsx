import { memo, ReactNode, useRef } from "react";
import { useParallax } from "@/hooks/useScrollAnimation";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

const ParallaxSection = memo(({ 
  children, 
  className = "",
  speed = 0.3,
  direction = "up"
}: ParallaxSectionProps) => {
  const offset = useParallax(speed);
  const multiplier = direction === "up" ? -1 : 1;

  return (
    <div 
      className={`will-change-transform ${className}`}
      style={{ 
        transform: `translateY(${offset * multiplier}px)` 
      }}
    >
      {children}
    </div>
  );
});

ParallaxSection.displayName = "ParallaxSection";

export default ParallaxSection;
