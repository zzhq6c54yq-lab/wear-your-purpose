import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Start exit animation
    setIsVisible(false);
    
    // After exit animation, update children and start enter animation
    const exitTimer = setTimeout(() => {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [location.pathname, children]);

  useEffect(() => {
    // Initial mount
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-4 blur-[2px]'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
