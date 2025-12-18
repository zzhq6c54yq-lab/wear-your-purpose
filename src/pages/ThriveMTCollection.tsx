import { Link } from "react-router-dom";
import { Heart, ArrowRight, Brain, Star, Users, Sparkles, Shield, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FilmGrain from "@/components/FilmGrain";
import CinematicVignette from "@/components/CinematicVignette";
import LightLeak from "@/components/LightLeak";

// Import ThriveMT products
import thrivemtBreathe from "@/assets/products/thrivemt-breathe.jpg";
import thrivemtProgress from "@/assets/products/thrivemt-progress.jpg";
import thrivemtStorms from "@/assets/products/thrivemt-storms.jpg";
import thrivemtPause from "@/assets/products/thrivemt-pause.jpg";
import thrivemtNourish from "@/assets/products/thrivemt-nourish.jpg";
import thrivemtBoundaries from "@/assets/products/thrivemt-boundaries.jpg";
import thrivemtNotalone from "@/assets/products/thrivemt-notalone.jpg";
import thrivemtHeal from "@/assets/products/thrivemt-heal.jpg";
import lifestyle4 from "@/assets/community/lifestyle-4.jpg";
import lifestyle5 from "@/assets/community/lifestyle-5.jpg";
import thriveQr from "@/assets/thrive-mt-qr.jpeg";

const thriveMTProducts = [
  {
    id: 76,
    name: "Breathe Through It",
    slogan: "Breathe Through It",
    image: thrivemtBreathe,
    frontDesign: "Minimalist lung shape morphing into a blooming lotus flower",
    backMessage: "Deep breaths reduce stress—try 4-7-8 breathing today",
    breathingTip: "Inhale 4 seconds • Hold 7 seconds • Exhale 8 seconds",
    color: "Blue-Green Gradient",
    price: 35,
  },
  {
    id: 77,
    name: "Progress Over Perfection",
    slogan: "Progress Over Perfection",
    image: thrivemtProgress,
    frontDesign: "Upward arrow composed of gold puzzle pieces",
    backMessage: "Mental health tip: Celebrate small wins to build self-compassion",
    breathingTip: "Write down 3 wins today, no matter how small",
    color: "Golden Yellow",
    price: 35,
  },
  {
    id: 78,
    name: "Storms Pass, Strength Stays",
    slogan: "Storms Pass, Strength Stays",
    image: thrivemtStorms,
    frontDesign: "Parting rain clouds revealing a rooted tree",
    backMessage: "Resilience grows with support—reach out when clouds gather",
    breathingTip: "Text someone you trust when you need support",
    color: "Gray-Emerald Gradient",
    price: 36,
  },
  {
    id: 79,
    name: "Embrace the Pause",
    slogan: "Embrace the Pause",
    image: thrivemtPause,
    frontDesign: "Hourglass with sand forming a heart shape",
    backMessage: "Pausing helps manage anxiety—practice grounding in the moment",
    breathingTip: "Name 5 things you can see, 4 you can touch, 3 you can hear",
    color: "Beige-Pink Gradient",
    price: 35,
  },
  {
    id: 80,
    name: "Nourish Your Mind",
    slogan: "Nourish Your Mind",
    image: thrivemtNourish,
    frontDesign: "Brain outline filled with fruits, books, and sunlight rays",
    backMessage: "Self-care isn't selfish—hydrate, read, and rest for better mental clarity",
    breathingTip: "Drink water • Read 10 pages • Sleep 7+ hours",
    color: "Green-Orange Gradient",
    price: 35,
  },
  {
    id: 81,
    name: "Boundaries Are Beautiful",
    slogan: "Boundaries Are Beautiful",
    image: thrivemtBoundaries,
    frontDesign: "Interwoven vines forming a protective circle",
    backMessage: "Setting boundaries protects your peace—it's key to emotional well-being",
    breathingTip: "It's okay to say no. Your peace matters.",
    color: "Deep Purple",
    price: 36,
  },
  {
    id: 82,
    name: "You're Not Alone",
    slogan: "You're Not Alone",
    image: thrivemtNotalone,
    frontDesign: "Linked human silhouettes in a rainbow unity circle",
    backMessage: "1 in 5 adults face mental health challenges—talking normalizes it",
    breathingTip: "Break the stigma: Share your story when you're ready",
    color: "Cream with Rainbow",
    price: 35,
  },
  {
    id: 83,
    name: "Heal Together",
    slogan: "Heal Together",
    image: thrivemtHeal,
    frontDesign: "Two clasping hands with golden light beams",
    backMessage: "Community support accelerates healing—seek therapy or groups for connection",
    breathingTip: "Healing is not a solo journey. Ask for help.",
    color: "Warm Terracotta",
    price: 36,
  },
];

const ThriveMTCollection = () => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.05 });

  const handleWishlistToggle = (productId: number) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <Layout>
      <SEO 
        title="ThriveMT Mental Health Collection"
        description="Shop the exclusive ThriveMT Collection: 8 unique designs with mental health tips on every shirt. Each piece features a powerful message on the front and educational content on the back."
        keywords="ThriveMT collection, mental health shirts, educational apparel, breathing exercises shirt, mental wellness clothing, anxiety awareness"
        url="https://thrive-mental.store/thrivemt-collection"
      />
      
      {/* Cinematic Film Effects */}
      <FilmGrain opacity={0.03} />
      
      <div className="fashion-ticker film-flicker">
        <div className="fashion-ticker-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 whitespace-nowrap">
              <span className="text-xs tracking-couture">THRIVEMT × THRIVE APPAREL CO.</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">MENTAL HEALTH AWARENESS COLLECTION</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">8 EXCLUSIVE DESIGNS</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">WEAR YOUR HEALING</span>
              <Star size={8} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle4} 
              alt="Community healing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <Brain
              key={i}
              className="absolute text-rose-gold-light/10 animate-float-heart"
              size={20 + i * 8}
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + i}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 badge-runway mb-8">
              <Brain size={14} />
              <span>EXCLUSIVE MENTAL HEALTH COLLECTION</span>
            </div>
            
            <h1 className="font-serif text-editorial text-primary-foreground mb-8">
              The <span className="text-gradient-gold">ThriveMT</span>
              <br />
              Collection
            </h1>
            
            <p className="font-sans text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
              8 exclusive designs created in partnership with ThriveMT Mental Health. 
              Each piece carries a powerful message on the front and educational mental health 
              tips on the back. Fashion meets healing.
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-16 pt-12 border-t border-primary-foreground/20">
              <div className="text-center">
                <span className="font-serif text-5xl text-primary-foreground">8</span>
                <p className="text-xs tracking-couture text-primary-foreground/60 mt-2">DESIGNS</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <span className="font-serif text-5xl text-primary-foreground">1 in 5</span>
                <p className="text-xs tracking-couture text-primary-foreground/60 mt-2">ADULTS AFFECTED</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <span className="font-serif text-5xl text-primary-foreground">100%</span>
                <p className="text-xs tracking-couture text-primary-foreground/60 mt-2">PURPOSE-DRIVEN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-background relative overflow-hidden luxury-editorial">
        <div className="absolute inset-0 lv-texture" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto mb-8 text-gold/40" size={48} strokeWidth={1} />
            <blockquote className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed mb-8">
              "Every design in this collection tells a story. The front speaks your truth. 
              The back shares wisdom. Together, they create a conversation about mental health 
              that we desperately need."
            </blockquote>
            <p className="text-couture text-muted-foreground">
              — THRIVEMT × THRIVE APPAREL CO.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section ref={productsRef} className="py-24 bg-card relative overflow-hidden">
        <div className="affirmation-watermark affirmation-watermark-lg top-1/4 -left-40 -rotate-12 affirmation-watermark-intense">
          HEAL
        </div>
        <div className="affirmation-watermark affirmation-watermark-md bottom-20 -right-20 rotate-12">
          THRIVE
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-couture text-gold mb-4 block">THE COLLECTION</span>
            <h2 className="font-serif text-display text-foreground">
              8 Designs. 8 Messages.
              <br />
              <span className="text-gradient-gold">Infinite Impact.</span>
            </h2>
          </div>
          
          {/* Product Grid */}
          <div className="space-y-32">
            {thriveMTProducts.map((product, i) => (
              <div 
                key={product.id}
                className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image - alternating sides */}
                <div className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-gradient-rose-gold/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-square overflow-hidden border border-border/50 group-hover:border-gold/30 transition-all duration-500">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Wishlist */}
                    <button 
                      onClick={() => handleWishlistToggle(product.id)}
                      className={`absolute top-6 right-6 w-12 h-12 flex items-center justify-center border transition-all ${
                        isInWishlist(product.id)
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background/90 backdrop-blur-sm text-foreground border-border hover:border-foreground"
                      }`}
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </button>
                    {/* Number Badge */}
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-foreground text-background flex items-center justify-center">
                      <span className="font-serif text-2xl">0{i + 1}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                  <span className="badge-runway inline-block mb-6">THRIVEMT EXCLUSIVE</span>
                  <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                    {product.slogan}
                  </h3>
                  
                  {/* Front Design */}
                  <div className="mb-8">
                    <p className="text-xs tracking-couture text-gold uppercase mb-2">Front Design</p>
                    <p className="font-sans text-lg text-muted-foreground">
                      {product.frontDesign}
                    </p>
                  </div>
                  
                  {/* Back Message - Educational */}
                  <div className="bg-background border border-border/50 p-8 mb-8">
                    <p className="text-xs tracking-couture text-rose uppercase mb-3 flex items-center gap-2 ${i % 2 === 1 ? 'justify-end' : ''}">
                      <Brain size={14} />
                      Back of Shirt — Mental Health Tip
                    </p>
                    <p className="font-serif text-xl text-foreground italic">
                      "{product.backMessage}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-gold">Quick Tip:</span> {product.breathingTip}
                      </p>
                    </div>
                  </div>
                  
                  {/* Price & Color */}
                  <div className={`flex items-center gap-8 mb-8 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                    <div>
                      <p className="text-xs tracking-couture text-muted-foreground uppercase mb-1">Color</p>
                      <p className="font-sans text-foreground">{product.color}</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="text-xs tracking-couture text-muted-foreground uppercase mb-1">Price</p>
                      <p className="price-couture text-2xl text-foreground">${product.price}</p>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    className="btn-couture"
                    asChild
                  >
                    <Link to={`/product/${product.id}`}>
                      <span className="flex items-center gap-2">
                        View Details <ArrowRight size={14} />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-foreground text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 lv-texture" style={{ filter: 'invert(1)' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-couture text-gold mb-6 block">WHY THIS MATTERS</span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-8 leading-tight">
                Breaking the <span className="text-gradient-gold">Silence</span> Around Mental Health
              </h2>
              <p className="font-sans text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Mental health affects everyone. 1 in 5 adults experience mental illness each year, 
                yet stigma prevents millions from seeking help. The ThriveMT Collection is designed 
                to normalize these conversations—one outfit at a time.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
                <div>
                  <Users className="text-gold mb-3" size={28} />
                  <p className="font-serif text-3xl text-primary-foreground">52M+</p>
                  <p className="text-xs tracking-couture text-primary-foreground/60 mt-1">AMERICANS AFFECTED</p>
                </div>
                <div>
                  <Shield className="text-gold mb-3" size={28} />
                  <p className="font-serif text-3xl text-primary-foreground">55%</p>
                  <p className="text-xs tracking-couture text-primary-foreground/60 mt-1">DON'T GET HELP</p>
                </div>
                <div>
                  <Sparkles className="text-gold mb-3" size={28} />
                  <p className="font-serif text-3xl text-primary-foreground">∞</p>
                  <p className="text-xs tracking-couture text-primary-foreground/60 mt-1">LIVES WE CAN TOUCH</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={lifestyle5} 
                  alt="Community support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-8 max-w-xs">
                <p className="font-serif text-xl text-foreground italic mb-4">
                  "Your struggle is valid. Your healing is possible. You are not alone."
                </p>
                <p className="text-xs tracking-couture text-muted-foreground">THRIVEMT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-32 bg-background relative overflow-hidden luxury-editorial">
        <div className="absolute inset-0 monogram-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-couture text-gold mb-6 block">OUR PARTNER</span>
            <h2 className="font-serif text-display text-foreground mb-8">
              About ThriveMT
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-12 leading-relaxed">
              ThriveMT is dedicated to mental health awareness, education, and support. 
              Through resources, community programs, and partnerships like this collection, 
              they're working to ensure no one faces mental health challenges alone.
            </p>
            
            {/* QR Code */}
            <div className="inline-block bg-card border border-border/50 p-8">
              <img 
                src={thriveQr} 
                alt="Scan to visit ThriveMT"
                className="w-40 h-40 mx-auto mb-4"
              />
              <p className="text-xs tracking-couture text-muted-foreground">SCAN TO LEARN MORE</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button className="btn-gold" asChild>
                <a href="https://thrive-mental.com" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Visit ThriveMT <ArrowRight size={14} />
                  </span>
                </a>
              </Button>
              <Button className="btn-couture" asChild>
                <Link to="/collections">
                  <span>Shop Full Collection</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThriveMTCollection;