import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Filter, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { products, categories } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import lifestyle images
import lifestyle4 from "@/assets/community/lifestyle-4.jpg";
import lifestyle10 from "@/assets/community/lifestyle-10.jpg";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.05 });

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleWishlistToggle = (productId: number) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <Layout>
      {/* Hero - With Ken Burns Background */}
      <section ref={heroRef} className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle4} 
              alt="Love and connection"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        
        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-gold-light/20 animate-float-heart"
              size={12 + i * 4}
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${7 + i}s`,
              }}
              fill="currentColor"
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="mx-auto mb-6 text-rose-gold-light animate-sparkle" size={28} />
            <span className="font-sans text-sm font-medium tracking-ultra text-primary-foreground/70 uppercase mb-4 block">
              Shop With Purpose
            </span>
            <h1 className="font-serif text-hero font-semibold text-primary-foreground mb-8">
              Our <span className="text-rose-gold-light">Collections</span>
            </h1>
            <p className="font-sans text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Every piece carries an affirmation. Every purchase supports a movement. 
              Find the message that speaks to your soul.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter - Premium Sticky */}
      <section className="py-6 bg-background/95 backdrop-blur-xl border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Filter size={18} className="text-muted-foreground hidden sm:block" />
              {categories.map((category, i) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-sans text-sm font-medium tracking-wide px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-rose-gold text-primary-foreground shadow-rose"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/50 hover:border-primary/30"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="font-sans text-sm text-muted-foreground hidden md:block">
              {filteredProducts.length} items
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid - Premium Cards */}
      <section ref={productsRef} className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <div 
                key={product.id}
                className={`group bg-card rounded-2xl overflow-hidden shadow-soft product-card-premium transition-all duration-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover product-image transition-transform duration-700"
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleWishlistToggle(product.id);
                      }}
                      className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-soft hover:scale-110 ${
                        isInWishlist(product.id)
                          ? "bg-rose text-primary-foreground animate-pulse-glow"
                          : "bg-background/90 backdrop-blur-sm text-muted-foreground hover:text-rose hover:bg-background"
                      }`}
                      aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </button>
                    
                    {/* Hover overlay with affirmation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-serif text-primary-foreground text-lg italic">"{product.affirmation}"</p>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <span className="font-sans text-xs text-primary tracking-luxury uppercase">{product.category}</span>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2 hover:text-gradient-rose transition-all duration-300">{product.name}</h3>
                  </Link>
                  <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-1">{product.description}</p>
                  <div className="flex items-center gap-2 mb-5">
                    {product.colors.slice(0, 3).map((color, idx) => (
                      <span key={idx} className="font-sans text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                        {color}
                      </span>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="font-sans text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-2xl font-semibold text-foreground">${product.price}</span>
                    <Button 
                      size="sm" 
                      className="btn-magnetic bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs rounded-full px-5 py-2 shadow-rose relative overflow-hidden group/btn"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>
                        <span className="relative z-10">View Details</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner - Cinematic */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle10} 
              alt="Joyful future"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="mx-auto mb-6 text-rose-gold-light animate-sparkle" size={28} />
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-primary-foreground mb-8">
              Full Shop Coming Soon
            </h2>
            <p className="font-sans text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              We're putting the finishing touches on our e-commerce experience. 
              Sign up to be notified when we launch and get early access.
            </p>
            <Button 
              size="lg"
              className="btn-magnetic bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans text-xs tracking-luxury uppercase rounded-none px-14 py-8 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Join the Waitlist <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
