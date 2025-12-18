import { memo } from "react";

interface FilmGrainProps {
  opacity?: number;
  className?: string;
}

const FilmGrain = memo(({ opacity = 0.05, className = "" }: FilmGrainProps) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#film-grain)"
          className="animate-film-grain"
        />
      </svg>
    </div>
  );
});

FilmGrain.displayName = "FilmGrain";

export default FilmGrain;
