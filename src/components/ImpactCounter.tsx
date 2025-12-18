import { useEffect, useState } from "react";
import { Heart, DollarSign, MapPin, Sparkles } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

interface CounterItemProps {
  icon: React.ElementType;
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const CounterItem = ({ icon: Icon, end, suffix = "", prefix = "", label, delay = 0 }: CounterItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count, startAnimation } = useCountUp(end, 2500);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      const timeout = setTimeout(() => {
        startAnimation();
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, hasStarted, delay, startAnimation]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative inline-block mb-4">
        <div className="absolute -inset-4 bg-rose-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-16 h-16 mx-auto bg-gradient-rose-gold rounded-full flex items-center justify-center shadow-rose animate-pulse-glow">
          <Icon className="text-primary-foreground" size={28} strokeWidth={1.5} />
        </div>
      </div>
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tabular-nums">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="font-sans text-xs tracking-ultra uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const ImpactCounter = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush via-background to-champagne" />
      <div className="absolute inset-0 aurora-bg opacity-30" />
      
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-gold/20 animate-float-heart"
            size={20 + i * 8}
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Sparkles className="mx-auto mb-4 text-rose-gold animate-sparkle" size={28} />
          <span className="font-sans text-xs tracking-ultra uppercase text-rose-gold block mb-4">
            The Thrive Impact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Together, We're Making a <span className="text-gradient-rose">Difference</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <CounterItem
            icon={Heart}
            end={12847}
            suffix="+"
            label="Lives Touched"
            delay={0}
          />
          <CounterItem
            icon={DollarSign}
            end={45000}
            suffix="+"
            prefix="$"
            label="Donated to Mental Health"
            delay={200}
          />
          <CounterItem
            icon={MapPin}
            end={50}
            suffix="+"
            label="Cities Worldwide"
            delay={400}
          />
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground italic">
            "Every purchase helps someone feel less alone"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
