import { memo, ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-up" | "fade-in" | "scale" | "slide-left" | "slide-right";
  threshold?: number;
}

const ScrollReveal = memo(({ 
  children, 
  className = "",
  delay = 0,
  duration = 800,
  animation = "fade-up",
  threshold = 0.1
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animationStyles = {
    "fade-up": {
      hidden: "opacity-0 translate-y-12",
      visible: "opacity-100 translate-y-0"
    },
    "fade-in": {
      hidden: "opacity-0",
      visible: "opacity-100"
    },
    "scale": {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100"
    },
    "slide-left": {
      hidden: "opacity-0 -translate-x-12",
      visible: "opacity-100 translate-x-0"
    },
    "slide-right": {
      hidden: "opacity-0 translate-x-12",
      visible: "opacity-100 translate-x-0"
    }
  };

  const styles = animationStyles[animation];

  return (
    <div 
      ref={ref}
      className={`transition-all ease-out ${isVisible ? styles.visible : styles.hidden} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
});

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
