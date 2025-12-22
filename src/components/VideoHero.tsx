import { memo, useState } from "react";
import KenBurnsImage from "./KenBurnsImage";

interface VideoHeroProps {
  videoSrc?: string;
  fallbackImage: string;
  alt: string;
  className?: string;
  overlayOpacity?: "subtle" | "light" | "medium" | "heavy";
}

const VideoHero = memo(({ 
  videoSrc,
  fallbackImage, 
  alt, 
  className = "",
  overlayOpacity = "medium"
}: VideoHeroProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const overlayStyles = {
    subtle: "from-background/85 via-background/70 to-background/85",
    light: "from-background/40 via-background/25 to-background/60",
    medium: "from-background/60 via-background/40 to-background/70",
    heavy: "from-background/80 via-background/60 to-background/90"
  };

  // If no video source or video failed, use Ken Burns image
  if (!videoSrc || videoError) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <KenBurnsImage 
          src={fallbackImage} 
          alt={alt}
          duration={25}
          overlay={false}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayStyles[overlayOpacity]}`} />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Fallback image while video loads */}
      {!videoLoaded && (
        <KenBurnsImage 
          src={fallbackImage} 
          alt={alt}
          duration={25}
          overlay={false}
        />
      )}
      
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Cinematic overlay gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${overlayStyles[overlayOpacity]}`} />
      
      {/* Subtle color grading overlay */}
      <div className="absolute inset-0 bg-rose-gold/5 mix-blend-overlay" />
    </div>
  );
});

VideoHero.displayName = "VideoHero";

export default VideoHero;
