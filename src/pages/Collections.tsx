import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { products, categories } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

// Import lifestyle images
import lifestyle4 from "@/assets/community/lifestyle-4.jpg";
import lifestyle10 from "@/assets/community/lifestyle-10.jpg";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

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
      {/* Hero - With Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle4} 
            alt="Love and connection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary-foreground/70 uppercase mb-4 block">
              Shop With Purpose
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6">
              Our <span className="text-rose-gold-light">Collections</span>
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Every piece carries an affirmation. Every purchase supports a movement. 
              Find the message that speaks to your soul.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Filter size={18} className="text-muted-foreground hidden sm:block" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-sans text-sm font-medium tracking-wide px-5 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-gradient-rose-gold text-primary-foreground shadow-soft"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/50"
                  }`}
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

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <div 
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleWishlistToggle(product.id);
                      }}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-soft ${
                        isInWishlist(product.id)
                          ? "bg-rose text-primary-foreground"
                          : "bg-background/90 backdrop-blur-sm text-muted-foreground hover:text-rose hover:bg-background"
                      }`}
                      aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-sans text-cream text-sm italic">"{product.affirmation}"</p>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <span className="font-sans text-xs text-primary tracking-wide uppercase">{product.category}</span>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-1 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="font-sans text-sm text-muted-foreground mb-3 line-clamp-1">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    {product.colors.slice(0, 3).map((color, idx) => (
                      <span key={idx} className="font-sans text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        {color}
                      </span>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="font-sans text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xl font-semibold text-foreground">${product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-opacity font-sans text-xs rounded-full px-4"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner - With Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle10} 
            alt="Joyful future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Full Shop Coming Soon
            </h2>
            <p className="font-sans text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We're putting the finishing touches on our e-commerce experience. 
              Sign up to be notified when we launch and get early access.
            </p>
            <Button 
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans text-xs tracking-luxury uppercase rounded-none px-10 py-6 shadow-lg"
            >
              Join the Waitlist <ArrowRight className="ml-2" size={14} />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
