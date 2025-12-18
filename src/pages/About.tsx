import { Heart, Users, Leaf, Shield, ArrowRight, Quote, Sparkles, Diamond } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import thriveLogo from "@/assets/thrive-logo.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import lifestyle images
import lifestyle1 from "@/assets/community/lifestyle-1.jpg";
import lifestyle7 from "@/assets/community/lifestyle-7.jpg";
import lifestyle8 from "@/assets/community/lifestyle-8.jpg";
import lifestyle9 from "@/assets/community/lifestyle-9.jpg";

const values = [
  {
    icon: Heart,
    title: "Healing",
    description: "We believe in the power of acknowledgment. By naming our pain, we begin to heal.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Together we are stronger. Community is at the heart of everything we create.",
  },
  {
    icon: Leaf,
    title: "Growth",
    description: "Every day is an opportunity to become who we were meant to be.",
  },
  {
    icon: Shield,
    title: "Peace",
    description: "We promote tranquility in a chaotic world through mindful living.",
  },
];

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Layout>
      {/* Hero - Full Width with Ken Burns */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle1} 
              alt="Community of diverse friends"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        
        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-gold-light/20 animate-float-heart"
              size={14 + i * 5}
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${6 + i}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="mx-auto mb-6 text-rose-gold-light animate-sparkle" size={28} />
            <span className="font-sans text-sm font-medium tracking-ultra text-primary-foreground/70 uppercase mb-6 block">
              Our Story
            </span>
            <h1 className="font-serif text-hero font-semibold text-primary-foreground mb-8">
              Born From <span className="text-rose-gold-light">Purpose</span>
            </h1>
            <p className="font-sans text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Thrive Apparel Co. was created with a singular mission: to help people wear 
              their healing journey on their sleeves—literally.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-primary-foreground/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Story Section - Premium Layout */}
      <section ref={storyRef} className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={`relative transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl animate-pulse-slow" />
              <div className="relative overflow-hidden rounded-2xl shadow-luxury group">
                <img
                  src={lifestyle7}
                  alt="Multi-generational family healing together"
                  className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Floating Logo */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-card rounded-2xl shadow-luxury p-5 border border-primary/20 animate-float">
                <img
                  src={thriveLogo}
                  alt="Thrive Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center gap-3">
                <Diamond className="text-rose-gold animate-sparkle" size={20} />
                <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase">
                  Our Beginning
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Breaking the Silence, <span className="text-gradient-rose">One Stitch at a Time</span>
              </h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                We understand that generational trauma often goes unspoken. It's passed down 
                through silence, through learned behaviors, through the pain we don't name. 
                Thrive Apparel Co. was founded on the belief that healing begins with acknowledgment.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Our clothing carries affirmations—powerful words designed not just to make you 
                feel good about wearing them, but to spark conversations. When someone reads the 
                message on your shirt, they might find the courage to speak their own truth.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                We're here to break taboos. To make mental health discussions as common as 
                discussing the weather. To create a world where seeking healing isn't just 
                accepted—it's celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Premium Cards */}
      <section ref={valuesRef} className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle8} 
            alt="Community gathering"
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-card/97" />
        </div>
        <div className="absolute inset-0 aurora-bg opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="mx-auto mb-4 text-rose-gold animate-sparkle" size={24} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-display font-semibold text-foreground">
              Our Core <span className="text-gradient-rose">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div 
                key={i} 
                className={`text-center p-10 bg-background rounded-2xl shadow-luxury hover-lift testimonial-card transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-18 h-18 mx-auto mb-8 bg-gradient-rose-gold rounded-full flex items-center justify-center shadow-rose animate-pulse-glow">
                  <value.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise - Cinematic Full Screen */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle9} 
              alt="Strength and resilience"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="mx-auto mb-10 text-primary-foreground/30 animate-float" size={60} strokeWidth={1} />
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-primary-foreground mb-10">
              Our Promise to You
            </h2>
            <p className="font-sans text-xl leading-relaxed text-primary-foreground/90 mb-12">
              Every piece you purchase supports a mission bigger than fashion. We're committed 
              to creating clothing that inspires, heals, and unites. When you wear Thrive, 
              you're not just wearing a brand—you're wearing a declaration. A declaration that 
              you believe in healing, in unity, in breaking cycles that no longer serve us.
            </p>
            <Button 
              size="lg"
              className="btn-magnetic bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans text-xs tracking-luxury uppercase px-14 py-8 rounded-none shadow-lg relative overflow-hidden group"
              asChild
            >
              <Link to="/collections">
                <span className="relative z-10 flex items-center">
                  Explore Our Collection <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Impact - Premium Grid */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Sparkles className="mx-auto mb-4 text-rose-gold animate-sparkle" size={24} />
              <h2 className="font-serif text-display font-semibold text-foreground mb-4">
                Beyond the <span className="text-gradient-rose">Clothing</span>
              </h2>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
                Our commitment extends beyond creating beautiful apparel. Every thread weaves a story of hope.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { number: "100%", label: "Purpose-Driven Designs", image: lifestyle1 },
                { number: "∞", label: "Affirmations Shared", image: lifestyle7 },
                { number: "1", label: "Community, One Love", image: lifestyle8 },
              ].map((stat, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={stat.image} 
                      alt={stat.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="font-serif text-6xl md:text-7xl font-bold text-primary-foreground mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    <div className="font-sans text-sm tracking-luxury uppercase text-primary-foreground/80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA - Premium */}
      <section className="py-24 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="mx-auto mb-8 text-primary animate-pulse-glow" size={48} fill="currentColor" />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
              Ready to Join Our Journey?
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-12 leading-relaxed">
              Wear your healing. Start conversations. Break cycles. Together, we thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg"
                className="btn-magnetic bg-gradient-rose-gold text-primary-foreground hover:opacity-90 font-sans text-xs tracking-luxury uppercase px-12 py-7 rounded-none shadow-rose relative overflow-hidden group"
                asChild
              >
                <Link to="/collections">
                  <span className="relative z-10">Shop Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="btn-magnetic font-sans text-xs tracking-luxury uppercase px-12 py-7 border border-primary/30 hover:bg-primary/5 rounded-none group"
                asChild
              >
                <Link to="/community">
                  <span className="group-hover:text-gradient-rose transition-all duration-300">Meet Our Community</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
