import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles, Star, ChevronDown, Quote, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import thriveIcon from "@/assets/thrive-icon-bronze.png";
import { featuredProducts } from "@/data/products";
import { getDailyAffirmation } from "@/data/affirmations";

const Index = () => {
  const todaysAffirmation = getDailyAffirmation();

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

      {/* Hero Section - Warm Luxury */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />
        
        {/* Warm ambient lighting */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-rose-gold/10 rounded-full blur-[200px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-primary/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Rose Gold Icon */}
            <div className="mb-12 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute -inset-8 bg-rose-gold/15 rounded-full blur-3xl animate-glow" />
                <img
                  src={thriveIcon}
                  alt="Thrive"
                  className="relative h-28 w-28 md:h-36 md:w-36 mx-auto object-contain drop-shadow-2xl animate-float"
                  style={{ filter: "sepia(20%) saturate(150%) hue-rotate(-10deg)" }}
                />
              </div>
            </div>
            
            {/* Brand Name - Warm Luxury Typography */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-foreground tracking-wide mb-2">
                THRIVE
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
                <span className="font-sans text-xs md:text-sm tracking-ultra text-rose-gold uppercase">
                  Apparel Co.
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
              </div>
            </div>
            
            {/* Tagline */}
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 italic animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Where Luxury Meets Mindful Living
            </p>
            
            {/* Description */}
            <p className="font-sans text-sm md:text-base text-muted-foreground/80 mb-14 max-w-2xl mx-auto leading-relaxed animate-fade-in tracking-wide" style={{ animationDelay: "0.4s" }}>
              Elevated apparel designed for those who believe in the power of positive intention. 
              Each piece is crafted to inspire, heal, and elevate your everyday journey.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs tracking-luxury uppercase px-12 py-7 rounded-none shadow-rose hover:shadow-lg group"
                asChild
              >
                <Link to="/collections">
                  Explore Collection <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-sans text-xs tracking-luxury uppercase px-12 py-7 border border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 transition-all rounded-none bg-transparent"
                asChild
              >
                <Link to="/about">Our Philosophy</Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="font-sans text-[10px] tracking-ultra text-muted-foreground/50 uppercase">Scroll</span>
            <ChevronDown className="text-primary/50 animate-bounce" size={20} />
          </div>
        </div>
      </section>

      {/* Mission Statement - Prominent Display */}
      <section className="py-20 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(15_60%_55%_/_0.08)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="text-primary" size={28} fill="currentColor" />
              <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase">
                Our Promise
              </span>
              <Heart className="text-primary" size={28} fill="currentColor" />
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-8 leading-relaxed">
              Mental health affects <span className="text-gradient-rose font-semibold">1 in 5 adults</span> in the U.S., 
              yet millions never receive the support they need.
            </h2>
            
            <p className="font-sans text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              That's why a <span className="text-primary font-semibold">portion of every sale</span> is donated 
              to help close the gap in access to care.
            </p>
            
            <div className="bg-card/60 backdrop-blur-sm border border-primary/20 p-8 md:p-10 rounded-sm">
              <p className="font-serif text-xl md:text-2xl text-foreground italic mb-6">
                "When you wear this, you're doing more than making a statement — 
                you're helping someone feel less alone."
              </p>
              <p className="font-sans text-sm tracking-luxury text-primary uppercase font-medium">
                Thank you for stepping up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* What We Stand For - Elegant Cards */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Diamond className="mx-auto mb-6 text-primary/60" size={24} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-6">
              Our Ethos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
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
                className="group relative p-10 border border-border/50 hover:border-primary/30 transition-all duration-700 bg-card/50"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/50 to-transparent transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/50 to-transparent transition-all duration-700" />
                
                <div className="mb-8">
                  <item.icon className="text-primary" size={32} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Affirmation - Editorial Style */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-secondary to-card" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(15_60%_55%_/_0.08)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto mb-8 text-primary/40" size={48} strokeWidth={1} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary/60 uppercase mb-10 block">
              Daily Affirmation — {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-foreground mb-12 leading-tight italic">
              "{todaysAffirmation}"
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-primary/30" />
              <Diamond className="text-primary/50" size={12} />
              <div className="w-12 h-px bg-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Magazine Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
                Curated Selection
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                Featured Pieces
              </h2>
            </div>
            <Link 
              to="/collections" 
              className="font-sans text-xs tracking-luxury uppercase text-muted-foreground hover:text-primary transition-colors mt-4 md:mt-0 flex items-center gap-2 group"
            >
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group relative overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 relative">
                  <span className="font-sans text-[10px] tracking-luxury text-primary uppercase">{product.category}</span>
                  <h3 className="font-serif text-lg font-medium text-foreground mt-1 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm text-muted-foreground">${product.price}</span>
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

      {/* Community Section */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-6">
                Our Community
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
                Join a Movement of <span className="text-gradient-gold">Conscious</span> Souls
              </h2>
              <p className="font-sans text-sm text-muted-foreground mb-10 leading-relaxed">
                When you wear Thrive, you become part of something greater. A collective of individuals 
                dedicated to breaking cycles, spreading love, and supporting one another through 
                every step of the journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 border border-border/50 bg-background/50">
                  <Star className="text-primary" size={16} strokeWidth={1.5} />
                  <span className="font-sans text-xs tracking-wide text-foreground">2,000+ Members</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 border border-border/50 bg-background/50">
                  <Heart className="text-rose" size={16} strokeWidth={1.5} />
                  <span className="font-sans text-xs tracking-wide text-foreground">Mental Health Advocacy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-3xl" />
              <div className="relative border border-primary/20 bg-background p-10">
                <Quote className="text-primary/30 mb-6" size={32} strokeWidth={1} />
                <p className="font-serif text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                  "Wearing my Thrive piece feels like carrying a daily reminder that I am worthy, 
                  loved, and never alone in this journey."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-rose-gold rounded-full flex items-center justify-center">
                    <span className="font-serif text-lg text-primary-foreground">M</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-foreground">Maya T.</p>
                    <p className="font-sans text-xs text-muted-foreground">Community Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimal Luxury */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Diamond className="mx-auto mb-6 text-primary/60" size={24} />
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Stay Connected
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-12 leading-relaxed">
              Be the first to receive new affirmations, exclusive releases, and stories 
              from our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-card border border-border/50 focus:border-primary/50 font-sans flex-1 py-6 rounded-none px-6 text-sm"
              />
              <Button className="bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs tracking-luxury uppercase py-6 px-10 rounded-none shadow-rose">
                Subscribe
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground/60 mt-8">
              Join 2,000+ souls on this journey. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </Layout>
  );
};

export default Index;