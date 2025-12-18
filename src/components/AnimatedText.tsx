import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  animation?: "fade-up" | "reveal" | "typewriter";
}

export const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 50,
  as: Component = "span",
  animation = "fade-up",
}: AnimatedTextProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (animation === "typewriter" && isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index));
        index++;
        if (index > text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible, text, animation]);

  if (animation === "typewriter") {
    return (
      <Component ref={ref as any} className={className}>
        {displayText}
        <span className="animate-blink">|</span>
      </Component>
    );
  }

  if (animation === "reveal") {
    return (
      <Component ref={ref as any} className={`overflow-hidden ${className}`}>
        <span
          className={`inline-block transition-transform duration-700 ${
            isVisible ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {text}
        </span>
      </Component>
    );
  }

  // fade-up animation with word staggering
  const words = text.split(" ");
  
  return (
    <Component ref={ref as any} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${delay + i * staggerDelay}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </Component>
  );
};

interface AnimatedLineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedLine = ({ children, className = "", delay = 0 }: AnimatedLineProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const GoldUnderline = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-rose-gold to-gold transition-all duration-700 ${
          isVisible ? "w-full" : "w-0"
        }`}
      />
    </span>
  );
};
