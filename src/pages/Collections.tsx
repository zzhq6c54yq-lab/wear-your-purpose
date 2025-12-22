import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, Star, Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { categories } from "@/data/products";
import { useProducts } from "@/contexts/ProductContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FilmGrain from "@/components/FilmGrain";
import KenBurnsImage from "@/components/KenBurnsImage";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";

// Import lifestyle images
import lifestyle4 from "@/assets/community/lifestyle-4.jpg";
import lifestyle10 from "@/assets/community/lifestyle-10.jpg";

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeSize, setActiveSize] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);
  const { allProducts } = useProducts();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation({ threshold: 0.05 });

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

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
        title="Shop All Collections"
        description="Browse all Thrive Apparel collections: T-shirts, hoodies, athleisure, lifestyle, kids, and the exclusive ThriveMT mental health collection. Luxury clothing with positive affirmations."
        keywords="mental health t-shirts, affirmation hoodies, ThriveMT collection, athleisure, kids clothing, positive apparel shop"
        url="https://thrive-mental.store/collections"
      />
      
      {/* Cinematic Film Effects */}
      <FilmGrain opacity={0.03} />
      
      <div className="fashion-ticker film-flicker">
        <div className="fashion-ticker-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 whitespace-nowrap">
              <span className="text-xs tracking-couture">MENTAL HEALTH AWARENESS</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">LUXURY WITH PURPOSE</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">THRIVEMT COLLECTION NOW LIVE</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">WEAR YOUR AFFIRMATION</span>
              <Star size={8} fill="currentColor" />
              <span className="text-xs tracking-couture">HEALING THROUGH FASHION</span>
              <Star size={8} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero - Editorial Fashion Style */}
      <section ref={heroRef} className="relative py-24 sm:py-32 md:py-40 lg:py-48 overflow-hidden luxury-editorial">
        <div className="absolute inset-0 monogram-overlay" />
        <div className="absolute inset-0 lv-texture" />
        
        {/* Affirmation Watermark */}
        <div className="affirmation-watermark affirmation-watermark-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          COLLECTIONS
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block mb-4 sm:mb-8 text-couture text-muted-foreground border-b border-gold/30 pb-2 text-[10px] sm:text-xs">
              Season 2025 — Mental Health Collection
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-editorial text-foreground mb-6 sm:mb-10 tracking-tight">
              Wear Your
              <br />
              <span className="text-gradient-gold">Truth</span>
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide px-4">
              Where high fashion meets healing. Every piece is a statement of strength, 
              an affirmation of worth, a commitment to mental wellness.
            </p>
            
            {/* Editorial stats - Responsive */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-border/50">
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">{allProducts.length}+</span>
                <p className="text-[10px] sm:text-xs tracking-couture text-muted-foreground mt-1 sm:mt-2">PIECES</p>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 bg-gold/30" />
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">8</span>
                <p className="text-[10px] sm:text-xs tracking-couture text-muted-foreground mt-1 sm:mt-2">THRIVEMT</p>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 bg-gold/30" />
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">∞</span>
                <p className="text-[10px] sm:text-xs tracking-couture text-muted-foreground mt-1 sm:mt-2">AFFIRMATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Couture Style with Size Filter */}
      <section className="py-4 sm:py-6 md:py-8 bg-background border-y border-border/50 sticky top-16 sm:top-20 z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between mb-4 sm:hidden">
            <span className="text-xs tracking-luxury text-muted-foreground uppercase">
              {filteredProducts.length} Pieces
            </span>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs tracking-luxury uppercase text-foreground"
            >
              <Filter size={14} />
              Filters
              <ChevronDown size={14} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filter Pills - Collapsible on mobile */}
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block`}>
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-pill-luxe font-sans text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 ${
                    activeCategory === category
                      ? "active"
                      : "bg-transparent text-muted-foreground hover:text-foreground border-border/50"
                  }`}
                >
                  {category}
                  {category === "ThriveMT" && (
                    <span className="ml-1 sm:ml-2 badge-runway text-[8px] sm:text-[0.5rem] px-1 sm:px-2 py-0.5 rounded-sm">NEW</span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Size Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
              <span className="text-[10px] tracking-luxury text-muted-foreground uppercase mr-2">Size:</span>
              <button
                onClick={() => setActiveSize("All")}
                className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 border transition-all ${
                  activeSize === "All" 
                    ? "border-foreground text-foreground bg-foreground/5" 
                    : "border-border/50 text-muted-foreground hover:border-foreground/50"
                }`}
              >
                All
              </button>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 border transition-all ${
                    activeSize === size 
                      ? "border-foreground text-foreground bg-foreground/5" 
                      : "border-border/50 text-muted-foreground hover:border-foreground/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop count */}
          <p className="hidden sm:block text-center mt-4 text-xs tracking-luxury text-muted-foreground uppercase">
            {filteredProducts.length} Pieces {activeSize !== "All" && `• Size ${activeSize}`}
          </p>
        </div>
      </section>

      {/* Editorial Image Divider */}
      {activeCategory === "ThriveMT" && (
        <section className="relative h-[50vh] overflow-hidden">
          <KenBurnsImage 
            src={lifestyle4}
            alt="ThriveMT Collection"
            duration={20}
            overlay={false}
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ScrollReveal animation="scale" duration={1000}>
              <div className="text-center">
                <span className="text-couture text-primary-foreground/70">INTRODUCING</span>
                <h2 className="font-serif text-display text-primary-foreground mt-4">
                  The ThriveMT
                  <br />
                  Collection
                </h2>
                <p className="mt-6 text-primary-foreground/80 max-w-lg mx-auto">
                  8 exclusive designs created in partnership with ThriveMT Mental Health. 
                  Each piece carries a powerful message and supports mental health initiatives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Products Grid - Fashion House Layout */}
      <section ref={productsRef} className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 lv-texture opacity-50" />
        
        {/* Affirmation Watermark - Positioned properly */}
        <div className="affirmation-watermark affirmation-watermark-md top-20 left-4 sm:left-8 -rotate-12 affirmation-watermark-intense">
          THRIVE
        </div>
        <div className="affirmation-watermark affirmation-watermark-md bottom-40 right-4 sm:right-8 rotate-12">
          HEAL
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Grid with editorial spacing - Improved responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {filteredProducts.map((product, i) => (
              <TiltCard
                key={product.id}
                tiltAmount={6}
                glareEnabled={true}
                scale={1.02}
                className="group"
              >
                <div 
                  className={`product-card-couture rounded-none overflow-hidden transition-all duration-700 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${Math.min(i * 50, 500)}ms` }}
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] image-editorial">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* ThriveMT Badge */}
                      {product.category === "ThriveMT" && (
                        <div className="absolute top-4 left-4 badge-runway">
                          ThriveMT
                        </div>
                      )}
                      
                      {/* Wishlist Button */}
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          handleWishlistToggle(product.id);
                        }}
                        className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-all border ${
                          isInWishlist(product.id)
                            ? "bg-foreground text-background border-foreground"
                            : "bg-background/90 backdrop-blur-sm text-foreground border-border hover:border-foreground"
                        }`}
                        aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart size={16} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                      </button>
                      
                      {/* Hover overlay with affirmation */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground via-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="font-serif text-primary-foreground text-base italic leading-relaxed">
                          "{product.affirmation}"
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-3 sm:p-4 md:p-6 bg-card">
                    <span className="text-[0.55rem] sm:text-[0.65rem] tracking-couture text-gold uppercase font-medium">
                      {product.category}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-sm sm:text-base md:text-lg text-foreground mt-1 sm:mt-2 mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="hidden sm:block font-sans text-xs text-muted-foreground mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Colors - Hidden on very small screens */}
                    <div className="hidden sm:flex items-center gap-2 mb-3 md:mb-5">
                      {product.colors.slice(0, 2).map((color, idx) => (
                        <span key={idx} className="text-[0.55rem] sm:text-[0.6rem] tracking-luxury text-muted-foreground uppercase">
                          {color}{idx < Math.min(product.colors.length - 1, 1) && " /"}
                        </span>
                      ))}
                      {product.colors.length > 2 && (
                        <span className="text-[0.55rem] sm:text-[0.6rem] text-muted-foreground">+{product.colors.length - 2}</span>
                      )}
                    </div>
                    
                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-2 sm:pt-4 border-t border-border/50">
                      <span className="price-couture text-base sm:text-lg md:text-xl text-foreground">${product.price}</span>
                      <Link 
                        to={`/product/${product.id}`}
                        className="hidden sm:flex text-[0.6rem] md:text-[0.65rem] tracking-couture uppercase text-foreground hover:text-gold transition-colors items-center gap-1 md:gap-2"
                      >
                        View <ArrowRight size={10} className="md:w-3 md:h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Divider Quote */}
      <section className="py-32 bg-foreground text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 lv-texture" style={{ filter: 'invert(1)' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="divider-editorial text-gold mb-12">
              <Star size={12} fill="currentColor" />
            </div>
            <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              "Clothing is a form of <span className="text-gold">self-expression</span>—
              <br className="hidden md:block" />
              wear your healing."
            </blockquote>
            <p className="mt-10 text-couture text-primary-foreground/60">
              — Thrive Apparel Co.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner - High Fashion */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <KenBurnsImage 
            src={lifestyle10}
            alt="Joyful future"
            duration={25}
            overlay={false}
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-couture text-primary-foreground/60">COMING SOON</span>
            <h2 className="font-serif text-display text-primary-foreground mt-6 mb-10">
              Full Boutique
              <br />
              Experience
            </h2>
            <p className="font-sans text-lg text-primary-foreground/80 mb-12 leading-relaxed">
              We're crafting an exclusive shopping experience worthy of our mission. 
              Join the waitlist for early access and member-only benefits.
            </p>
            <Button 
              className="btn-gold font-sans"
            >
              <span className="flex items-center">
                Join Waitlist <ArrowRight className="ml-3" size={14} />
              </span>
            </Button>
            
            {/* Trust badges */}
            <div className="flex items-center justify-center gap-12 mt-16 pt-10 border-t border-primary-foreground/20">
              <div className="text-center">
                <p className="text-xs tracking-couture text-primary-foreground/60">SUSTAINABLE</p>
              </div>
              <div className="text-center">
                <p className="text-xs tracking-couture text-primary-foreground/60">ETHICALLY MADE</p>
              </div>
              <div className="text-center">
                <p className="text-xs tracking-couture text-primary-foreground/60">GIVING BACK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;