import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles, Star, ChevronDown, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import thriveLogo from "@/assets/thrive-logo.jpeg";
import { featuredProducts } from "@/data/products";
import { getDailyAffirmation } from "@/data/affirmations";

const Index = () => {
  const todaysAffirmation = getDailyAffirmation();
  return (
    <Layout>
      {/* Hero Section - Immersive & Warm */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered warm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-cream to-background" />
        
        {/* Soft animated orbs for warmth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-rose/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-copper/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo - Prominent & Full */}
            <div className="mb-8 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute -inset-6 bg-gradient-to-br from-rose/30 via-primary/20 to-copper/30 rounded-full blur-2xl" />
                <img
                  src={thriveLogo}
                  alt="Thrive Apparel Co."
                  className="relative h-40 w-40 md:h-56 md:w-56 mx-auto rounded-full object-cover shadow-elevated ring-4 ring-background/50"
                />
              </div>
            </div>
            
            {/* Brand Name - Large & Clear */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Thrive Apparel Co.
            </h1>
            
            {/* Tagline */}
            <p className="font-serif text-2xl md:text-3xl text-primary mb-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
              Wear Your Purpose. Heal Your Soul.
            </p>
            
            {/* Flowing description */}
            <p className="font-sans text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.35s" }}>
              Clothing that speaks to your heart. Affirmations that transform your day. 
              Join a movement dedicated to unity, peace, and healing generational wounds—together.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.45s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans text-lg tracking-wide px-10 py-7 shadow-elevated hover:shadow-lg rounded-full"
                asChild
              >
                <Link to="/collections">
                  Explore Collections <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-sans text-lg tracking-wide px-10 py-7 border-2 border-primary/30 text-foreground hover:bg-primary/10 transition-all rounded-full bg-background/50 backdrop-blur-sm"
                asChild
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-primary/60" size={32} />
          </div>
        </div>
      </section>

      {/* Flowing Transition - Wave */}
      <div className="h-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 52.5C120 45 240 30 360 25C480 20 600 25 720 32.5C840 40 960 50 1080 50C1200 50 1320 40 1380 35L1440 30V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" className="fill-card"/>
        </svg>
      </div>

      {/* What We Stand For - Warm Cards */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Our Heart
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              More Than Just Clothing
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Every stitch carries intention. Every message is chosen with love. 
              This is fashion that heals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Heart, 
                title: "Healing Through Fashion", 
                desc: "Wear affirmations that speak directly to your soul and remind you of your inherent worth.",
                color: "from-rose/30 to-rose/10"
              },
              { 
                icon: Users, 
                title: "Unity & Community", 
                desc: "Building connections where everyone belongs. Where love flows freely and support is unconditional.",
                color: "from-copper/30 to-copper/10"
              },
              { 
                icon: Sparkles, 
                title: "Breaking Cycles", 
                desc: "Transform generational pain into purpose. Wear your healing journey with pride.",
                color: "from-primary/30 to-primary/10"
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-soft hover:shadow-elevated"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 bg-gradient-rose rounded-2xl flex items-center justify-center shadow-soft">
                    <item.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affirmation Feature - Immersive */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-rose to-copper" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_40%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <Quote className="mx-auto mb-6 opacity-60" size={48} />
            <span className="font-sans text-sm font-medium tracking-widest uppercase mb-8 block opacity-80">
              Today's Affirmation — {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-10 leading-tight">
              {todaysAffirmation}
            </h2>
            <div className="w-32 h-1 bg-primary-foreground/40 mx-auto mb-10 rounded-full" />
            <p className="font-sans text-xl opacity-90 max-w-xl mx-auto leading-relaxed">
              Let this truth settle into your heart. Carry it with you. Wear it with pride.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products - Flowing Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Curated With Love
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Featured Pieces
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
              Discover items that resonate with your journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product, i) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 bg-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-sans text-xs text-rose tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity">{product.category}</span>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-1">{product.name}</h3>
                  <p className="font-sans text-cream/70 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity">"{product.affirmation}"</p>
                  <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-sans text-lg font-semibold text-cream">${product.price}</span>
                    <span className="font-sans text-xs text-rose flex items-center">View <ArrowRight size={14} className="ml-1" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-14">
            <Button 
              size="lg"
              className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans tracking-wide px-10 py-6 rounded-full shadow-soft"
              asChild
            >
              <Link to="/collections">
                View All Collections <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="py-24 bg-gradient-to-br from-secondary via-card to-accent/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
                Our Community
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Join a Movement of <span className="text-gradient-rose">Healing</span>
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                When you wear Thrive, you become part of something bigger. A community of souls 
                committed to breaking cycles, spreading love, and supporting each other through 
                every step of the journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-soft">
                  <Star className="text-primary" size={16} />
                  <span className="font-sans text-sm text-foreground">2,000+ Community Members</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-soft">
                  <Heart className="text-rose" size={16} />
                  <span className="font-sans text-sm text-foreground">Mental Health Advocacy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-rose rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-background rounded-3xl p-8 shadow-elevated">
                <Quote className="text-primary/30 mb-4" size={40} />
                <p className="font-serif text-2xl text-foreground mb-6 leading-relaxed">
                  "Wearing my Thrive hoodie feels like a daily hug. The affirmation on my heart 
                  reminds me I'm not alone in this journey."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center">
                    <span className="font-serif text-lg text-primary-foreground">M</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Maya T.</p>
                    <p className="font-sans text-sm text-muted-foreground">Community Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Warm Invitation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rose rounded-full flex items-center justify-center shadow-soft">
              <Heart className="text-primary-foreground" size={28} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Join Our Family
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-10 leading-relaxed">
              Be the first to receive new affirmations, exclusive drops, and stories 
              from our growing community. Together, we thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-card border-2 border-border focus:border-primary font-sans flex-1 py-6 rounded-full px-6"
              />
              <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans tracking-wide py-6 px-8 shadow-soft hover:shadow-elevated rounded-full">
                Subscribe
              </Button>
            </div>
            <p className="font-sans text-sm text-muted-foreground mt-6">
              Join 2,000+ souls on this healing journey. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
