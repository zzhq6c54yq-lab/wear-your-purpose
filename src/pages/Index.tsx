import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles, Star, ChevronDown, Quote, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import thriveIcon from "@/assets/thrive-icon-bronze.png";
import { featuredProducts } from "@/data/products";
import { getDailyAffirmation } from "@/data/affirmations";
import ImpactCounter from "@/components/ImpactCounter";
import { AnimatedText, AnimatedLine, GoldUnderline } from "@/components/AnimatedText";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import lifestyle images
import lifestyle1 from "@/assets/community/lifestyle-1.jpg";
import lifestyle2 from "@/assets/community/lifestyle-2.jpg";
import lifestyle3 from "@/assets/community/lifestyle-3.jpg";
import lifestyle4 from "@/assets/community/lifestyle-4.jpg";
import lifestyle5 from "@/assets/community/lifestyle-5.jpg";
import lifestyle6 from "@/assets/community/lifestyle-6.jpg";
import lifestyle7 from "@/assets/community/lifestyle-7.jpg";
import lifestyle8 from "@/assets/community/lifestyle-8.jpg";
import lifestyle9 from "@/assets/community/lifestyle-9.jpg";
import lifestyle10 from "@/assets/community/lifestyle-10.jpg";

const lifestyleImages = [
  { src: lifestyle1, alt: "Diverse friends laughing together", caption: "Unity in Diversity" },
  { src: lifestyle2, alt: "Mother and daughter embrace", caption: "Generational Healing" },
  { src: lifestyle3, alt: "Father and son playing", caption: "Breaking Cycles" },
  { src: lifestyle4, alt: "Couple holding hands", caption: "Love Connects" },
  { src: lifestyle5, alt: "Empowered women together", caption: "Strength in Sisterhood" },
  { src: lifestyle6, alt: "Man meditating peacefully", caption: "Finding Peace" },
  { src: lifestyle7, alt: "Multi-generational family", caption: "Family Legacy" },
  { src: lifestyle8, alt: "Community gathering circle", caption: "We Are One" },
  { src: lifestyle9, alt: "Woman with disability", caption: "Unstoppable Spirit" },
  { src: lifestyle10, alt: "Kids playing joyfully", caption: "Pure Joy" },
];

const Index = () => {
  const todaysAffirmation = getDailyAffirmation();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ethosRef, isVisible: ethosVisible } = useScrollAnimation({ threshold: 0.2 });

  const bannerMessages = [
    "You're helping someone feel less alone.",
    "Every purchase closes the gap in mental health care.",
    "Wear your support. Make a difference.",
    "1 in 5 adults need support. You're part of the solution.",
    "Thank you for stepping up.",
    "Mental health matters. You matter.",
  ];
  
  return (
    <Layout>
      {/* Scrolling Banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-3 overflow-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...bannerMessages, ...bannerMessages].map((msg, i) => (
              <span key={i} className="flex items-center gap-8 mx-8 whitespace-nowrap">
                <span className="font-sans text-xs tracking-luxury text-primary font-medium">
                  {msg}
                </span>
                <Diamond className="text-primary/40" size={10} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CINEMATIC HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ken Burns Effect Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle1} 
              alt="Community" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          THRIVE
        </div>
        
        {/* Aurora Effect */}
        <div className="absolute inset-0 aurora-bg opacity-40" />
        
        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-gold/10 animate-float-heart"
              size={16 + i * 6}
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${6 + i * 0.8}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-primary/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Rose Gold Icon with Premium Glow */}
            <div className={`mb-12 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative inline-block">
                <div className="absolute -inset-12 bg-rose-gold/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute -inset-8 bg-gold/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
                <img
                  src={thriveIcon}
                  alt="Thrive"
                  className="relative h-32 w-32 md:h-40 md:w-40 mx-auto object-contain drop-shadow-2xl animate-float"
                  style={{ filter: "sepia(20%) saturate(150%) hue-rotate(-10deg)" }}
                />
              </div>
            </div>
            
            {/* Brand Name - Dramatic Typography */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="font-serif text-hero font-medium text-foreground tracking-wide mb-4">
                <span className="inline-block animate-reveal-up" style={{ animationDelay: "0.3s" }}>T</span>
                <span className="inline-block animate-reveal-up" style={{ animationDelay: "0.35s" }}>H</span>
                <span className="inline-block animate-reveal-up" style={{ animationDelay: "0.4s" }}>R</span>
                <span className="inline-block animate-reveal-up" style={{ animationDelay: "0.45s" }}>I</span>
                <span className="inline-block animate-reveal-up" style={{ animationDelay: "0.5s" }}>V</span>
                <span className="inline-block animate-reveal-up" style={{ animationDelay: "0.55s" }}>E</span>
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent animate-scale-in" style={{ animationDelay: "0.7s" }} />
                <span className="font-sans text-xs md:text-sm tracking-ultra text-rose-gold uppercase animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  Apparel Co.
                </span>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent animate-scale-in" style={{ animationDelay: "0.7s" }} />
              </div>
            </div>
            
            {/* Tagline with Staggered Animation */}
            <p className={`font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 italic transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Where Luxury Meets Mindful Living
            </p>
            
            {/* Description */}
            <p className={`font-sans text-sm md:text-base text-muted-foreground/80 mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Elevated apparel designed for those who believe in the power of positive intention. 
              Each piece is crafted to inspire, heal, and elevate your everyday journey.
            </p>
            
            {/* CTAs with Premium Hover Effects */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg" 
                className="btn-magnetic bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs tracking-luxury uppercase px-14 py-8 rounded-none shadow-rose hover:shadow-lg group relative overflow-hidden"
                asChild
              >
                <Link to="/collections">
                  <span className="relative z-10 flex items-center">
                    Explore Collection <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={16} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-magnetic font-sans text-xs tracking-luxury uppercase px-14 py-8 border border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 transition-all rounded-none bg-transparent group"
                asChild
              >
                <Link to="/about">
                  <span className="group-hover:text-gradient-rose transition-all duration-300">Our Philosophy</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
            <span className="font-sans text-[10px] tracking-ultra text-muted-foreground/50 uppercase">Scroll</span>
            <ChevronDown className="text-primary/50 animate-bounce" size={20} />
          </div>
        </div>
      </section>

      {/* IMPACT COUNTER SECTION */}
      <ImpactCounter />

      {/* Mission Statement - With Premium Animation */}
      <section ref={missionRef} className="py-32 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(15_60%_55%_/_0.08)_0%,transparent_70%)]" />
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-md affirmation-watermark-intense top-1/4 -left-10 -rotate-12">
          HEAL
        </div>
        <div className="affirmation-watermark affirmation-watermark-sm bottom-10 right-10 rotate-6">
          YOU MATTER
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            {/* Image Side with Premium Effects */}
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="absolute -inset-6 bg-gradient-rose-gold/20 rounded-3xl blur-3xl animate-pulse-slow" />
              <div className="relative overflow-hidden rounded-2xl shadow-luxury group">
                <img 
                  src={lifestyle7} 
                  alt="Multi-generational family wearing Thrive"
                  className="w-full h-[450px] object-cover image-warm-filter transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Quote className="text-primary-foreground/30 mb-2" size={32} strokeWidth={1} />
                  <span className="font-serif text-2xl text-primary-foreground italic block">
                    "Together, we heal."
                  </span>
                </div>
              </div>
            </div>

            {/* Text Side with Staggered Animation */}
            <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center gap-3 mb-8">
                <Heart className="text-primary animate-pulse" size={28} fill="currentColor" />
                <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase">
                  Our Promise
                </span>
                <Heart className="text-primary animate-pulse" size={28} fill="currentColor" style={{ animationDelay: "0.5s" }} />
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
                Mental health affects <GoldUnderline><span className="text-gradient-rose font-semibold">1 in 5 adults</span></GoldUnderline> in the U.S., 
                yet millions never receive support.
              </h2>
              
              <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                That's why a <span className="text-primary font-semibold">portion of every sale</span> is donated 
                to help close the gap in access to care.
              </p>
              
              <div className="bg-card/80 backdrop-blur-sm border border-primary/20 p-10 rounded-lg shadow-soft testimonial-card">
                <p className="font-serif text-xl md:text-2xl text-foreground italic mb-6 leading-relaxed">
                  "When you wear this, you're doing more than making a statement — 
                  you're helping someone feel less alone."
                </p>
                <p className="font-sans text-sm tracking-luxury text-primary uppercase font-medium">
                  Thank you for stepping up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* What We Stand For - Premium Cards */}
      <section ref={ethosRef} className="py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-20" />
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-lg affirmation-watermark-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          LOVE WINS
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${ethosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Diamond className="mx-auto mb-6 text-primary/60 animate-sparkle" size={24} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-6">
              Our Ethos
            </span>
            <h2 className="font-serif text-display font-medium text-foreground mb-6">
              More Than Fashion
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every piece carries intention. Every design speaks to the soul. 
              This is apparel with purpose.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Heart, 
                title: "Healing Through Fashion", 
                desc: "Wear affirmations that resonate with your journey and remind you of your inherent worthiness.",
              },
              { 
                icon: Users, 
                title: "Unity & Community", 
                desc: "Join a movement of conscious individuals committed to elevating themselves and others.",
              },
              { 
                icon: Sparkles, 
                title: "Breaking Cycles", 
                desc: "Transform generational patterns into generational blessings. Wear your evolution with pride.",
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`group relative p-12 border border-border/50 hover:border-primary/30 transition-all duration-700 bg-card/50 hover-lift testimonial-card ${ethosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/50 to-transparent transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/50 to-transparent transition-all duration-700" />
                
                <div className="mb-8 relative">
                  <div className="absolute -inset-4 bg-rose-gold/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <item.icon className="relative text-primary group-hover:animate-pulse-glow transition-all duration-300" size={36} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4 group-hover:text-gradient-rose transition-all duration-300">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image Divider */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 ken-burns">
          <img 
            src={lifestyle9} 
            alt="Unstoppable spirit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="affirmation-watermark affirmation-watermark-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground/10">
          I AM ENOUGH
        </div>
        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground text-center italic max-w-3xl">
            "Your story is your strength"
          </p>
        </div>
      </section>

      {/* Daily Affirmation - Immersive Full Screen */}
      <section className="py-56 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle6} 
              alt="Peace and meditation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground/5">
          PEACE
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto mb-8 text-primary-foreground/30 animate-float" size={56} strokeWidth={1} />
            <span className="font-sans text-xs tracking-ultra text-primary-foreground/50 uppercase mb-12 block">
              Daily Affirmation — {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-primary-foreground mb-12 leading-tight italic">
              "{todaysAffirmation}"
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-primary-foreground/30" />
              <Diamond className="text-rose-gold-light animate-sparkle" size={16} />
              <div className="w-16 h-px bg-primary-foreground/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery - Premium Masonry */}
      <section className="py-36 bg-background relative overflow-hidden">
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-md affirmation-watermark-subtle top-20 -right-20 rotate-12">
          TOGETHER
        </div>
        <div className="affirmation-watermark affirmation-watermark-sm bottom-32 -left-10 -rotate-6">
          WE RISE
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <Sparkles className="mx-auto mb-4 text-rose-gold animate-sparkle" size={24} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
              Real People. Real Stories.
            </span>
            <h2 className="font-serif text-display font-medium text-foreground mb-4">
              Our <span className="text-gradient-rose">Community</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto">
              Thrive is more than clothing. It's a movement of healing, unity, and love.
            </p>
          </div>

          {/* Premium Masonry Gallery - Spread Out */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {lifestyleImages.slice(0, 8).map((img, i) => (
              <div 
                key={i}
                className={`group relative overflow-hidden rounded-xl hover-lift ${
                  i === 0 || i === 5 ? 'row-span-2' : ''
                } ${i === 2 || i === 7 ? 'col-span-2' : ''}`}
              >
                <div className={`${i === 0 || i === 5 ? 'h-full min-h-[450px]' : i === 2 || i === 7 ? 'aspect-video' : 'aspect-square'}`}>
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 image-warm-filter"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-serif text-xl text-primary-foreground block mb-2">{img.caption}</span>
                  <Heart className="text-rose-gold-light" size={20} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline"
              className="btn-magnetic font-sans text-xs tracking-luxury uppercase px-12 py-7 border border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 transition-all rounded-none group"
              asChild
            >
              <Link to="/community">
                <span className="flex items-center gap-2">
                  Join Our Community 
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={14} />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products - Premium Grid */}
      <section className="py-40 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(38_70%_55%_/_0.05)_0%,transparent_50%)]" />
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-lg affirmation-watermark-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          I AM WORTHY
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
            <div>
              <Sparkles className="mb-4 text-rose-gold animate-sparkle" size={20} />
              <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
                Curated Selection
              </span>
              <h2 className="font-serif text-display font-medium text-foreground">
                Featured Pieces
              </h2>
            </div>
            <Link 
              to="/collections" 
              className="font-sans text-xs tracking-luxury uppercase text-muted-foreground hover:text-primary transition-colors mt-4 md:mt-0 flex items-center gap-2 group"
            >
              View All <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group relative overflow-hidden bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 product-card-premium"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover product-image transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover overlay with affirmation */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-foreground/80 backdrop-blur-sm p-6 m-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-serif text-primary-foreground italic">"{product.affirmation}"</p>
                  </div>
                </div>
                
                <div className="p-6 relative bg-background">
                  <span className="font-sans text-[10px] tracking-luxury text-primary uppercase">{product.category}</span>
                  <h3 className="font-serif text-lg font-medium text-foreground mt-1 mb-2 group-hover:text-gradient-rose transition-all duration-300">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-lg font-semibold text-foreground">${product.price}</span>
                    <span className="font-sans text-[10px] tracking-luxury text-primary uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Community Banner - Cinematic */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle8} 
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-lg top-1/2 right-10 -translate-y-1/2 text-primary-foreground/5">
          UNITY
        </div>
        
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <span className="font-sans text-xs tracking-ultra text-primary-foreground/70 uppercase block mb-8 animate-fade-in">
              We Are One Community
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-10 leading-tight">
              Join a Movement of <span className="text-rose-gold-light">Conscious</span> Souls
            </h2>
            <p className="font-sans text-xl text-primary-foreground/80 mb-12 max-w-xl leading-relaxed">
              When you wear Thrive, you become part of something greater. A collective of individuals 
              dedicated to breaking cycles, spreading love, and supporting one another.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-lg group hover:bg-primary-foreground/20 transition-all duration-300">
                <Star className="text-rose-gold-light group-hover:animate-sparkle" size={18} strokeWidth={1.5} />
                <span className="font-sans text-sm tracking-wide text-primary-foreground">2,000+ Members</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-lg group hover:bg-primary-foreground/20 transition-all duration-300">
                <Heart className="text-rose-gold-light group-hover:animate-pulse" size={18} strokeWidth={1.5} />
                <span className="font-sans text-sm tracking-wide text-primary-foreground">Mental Health Advocacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial with Premium Animation */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 aurora-bg opacity-10" />
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-md affirmation-watermark-subtle -left-20 top-1/3 -rotate-90">
          BELIEVE
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img 
                  src={lifestyle5} 
                  alt="Empowered women together"
                  className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="relative">
              <div className="relative border border-primary/20 bg-card/80 backdrop-blur-sm p-12 shadow-luxury testimonial-card">
                <Quote className="text-rose-gold/40 mb-8 animate-float" size={48} strokeWidth={1} />
                <p className="font-serif text-2xl md:text-3xl text-foreground mb-10 leading-relaxed italic">
                  "Wearing my Thrive piece feels like carrying a daily reminder that I am worthy, 
                  loved, and never alone in this journey."
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-rose-gold rounded-full flex items-center justify-center shadow-rose animate-pulse-glow">
                    <span className="font-serif text-2xl text-primary-foreground">M</span>
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground">Maya T.</p>
                    <p className="font-sans text-sm text-muted-foreground">Community Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Premium Design */}
      <section className="py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle4} 
            alt="Connection and love"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-blush/95" />
        </div>
        <div className="absolute inset-0 aurora-bg opacity-30" />
        
        {/* AFFIRMATION WATERMARK */}
        <div className="affirmation-watermark affirmation-watermark-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          CONNECT
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Diamond className="mx-auto mb-6 text-primary animate-sparkle" size={24} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-6">
              Stay Connected
            </span>
            <h2 className="font-serif text-display font-medium text-foreground mb-6">
              Join Our Circle
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-12 leading-relaxed">
              Receive affirmations, exclusive offers, and be the first to know about new collections 
              designed to elevate your journey.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-background/60 backdrop-blur-sm border-primary/20 focus:border-primary px-6 py-7 font-sans text-sm rounded-none shadow-soft"
              />
              <Button 
                type="submit"
                className="btn-magnetic bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs tracking-luxury uppercase px-10 py-7 rounded-none shadow-rose relative overflow-hidden group"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </form>
            <p className="font-sans text-xs text-muted-foreground mt-8">
              By subscribing, you join our community of conscious souls. ✨
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
