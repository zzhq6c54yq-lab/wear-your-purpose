import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.pageYOffset / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-rose-gold via-gold to-rose-gold transition-all duration-150 ease-out shadow-glow"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
