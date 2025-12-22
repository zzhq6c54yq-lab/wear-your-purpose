import { memo, useState, useEffect } from "react";

interface KenBurnsImageProps {
  src: string;
  alt: string;
  className?: string;
  duration?: number;
  overlay?: boolean;
}

const KenBurnsImage = memo(({ 
  src, 
  alt, 
  className = "",
  duration = 20,
  overlay = true
}: KenBurnsImageProps) => {
  const [direction, setDirection] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => prev === 'in' ? 'out' : 'in');
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover transition-transform ease-out ${
          direction === 'in' 
            ? 'animate-ken-burns-in' 
            : 'animate-ken-burns-out'
        }`}
        style={{ animationDuration: `${duration}s` }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      )}
    </div>
  );
});

KenBurnsImage.displayName = "KenBurnsImage";

export default KenBurnsImage;
