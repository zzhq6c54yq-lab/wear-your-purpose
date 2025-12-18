import { memo } from "react";

interface CinematicVignetteProps {
  intensity?: "subtle" | "medium" | "dramatic";
  className?: string;
}

const CinematicVignette = memo(({ 
  intensity = "medium", 
  className = "" 
}: CinematicVignetteProps) => {
  const intensityMap = {
    subtle: "from-transparent via-transparent to-foreground/20",
    medium: "from-transparent via-transparent to-foreground/40",
    dramatic: "from-transparent via-foreground/10 to-foreground/60",
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Radial vignette */}
      <div 
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${intensityMap[intensity]}`}
      />
      {/* Top and bottom letterbox bars for cinematic feel */}
      <div className="absolute top-0 left-0 right-0 h-[3%] bg-gradient-to-b from-foreground/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[3%] bg-gradient-to-t from-foreground/30 to-transparent" />
    </div>
  );
});

CinematicVignette.displayName = "CinematicVignette";

export default CinematicVignette;
