import { memo } from "react";

interface LightLeakProps {
  variant?: "warm" | "golden" | "rose";
  animated?: boolean;
  className?: string;
}

const LightLeak = memo(({ 
  variant = "warm", 
  animated = true,
  className = "" 
}: LightLeakProps) => {
  const variantStyles = {
    warm: {
      primary: "hsl(var(--rose-gold) / 0.15)",
      secondary: "hsl(var(--champagne-gold) / 0.1)",
      accent: "hsl(var(--terracotta) / 0.08)",
    },
    golden: {
      primary: "hsl(var(--champagne-gold) / 0.2)",
      secondary: "hsl(var(--warm-beige) / 0.15)",
      accent: "hsl(var(--rose-gold) / 0.1)",
    },
    rose: {
      primary: "hsl(var(--rose-gold) / 0.2)",
      secondary: "hsl(var(--primary) / 0.1)",
      accent: "hsl(var(--champagne-gold) / 0.08)",
    },
  };

  const colors = variantStyles[variant];

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Top-right light leak */}
      <div
        className={`absolute -top-20 -right-20 w-[60%] h-[60%] rounded-full blur-3xl ${animated ? 'animate-light-leak' : ''}`}
        style={{ 
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)` 
        }}
      />
      
      {/* Bottom-left warm glow */}
      <div
        className={`absolute -bottom-10 -left-10 w-[40%] h-[40%] rounded-full blur-3xl ${animated ? 'animate-light-leak-slow' : ''}`}
        style={{ 
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          animationDelay: "2s"
        }}
      />
      
      {/* Center accent flare */}
      <div
        className={`absolute top-1/3 left-1/4 w-[30%] h-[30%] rounded-full blur-2xl ${animated ? 'animate-light-leak-pulse' : ''}`}
        style={{ 
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 60%)`,
          animationDelay: "4s"
        }}
      />
    </div>
  );
});

LightLeak.displayName = "LightLeak";

export default LightLeak;
