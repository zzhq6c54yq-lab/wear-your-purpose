import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Star, Ruler, Sparkles, Droplet, ThermometerSun, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sizeGuide = [
  { size: "XS", chest: '32-34"', waist: '24-26"', hips: '34-36"' },
  { size: "S", chest: '34-36"', waist: '26-28"', hips: '36-38"' },
  { size: "M", chest: '36-38"', waist: '28-30"', hips: '38-40"' },
  { size: "L", chest: '38-40"', waist: '30-32"', hips: '40-42"' },
  { size: "XL", chest: '40-42"', waist: '32-34"', hips: '42-44"' },
  { size: "2XL", chest: '42-44"', waist: '34-36"', hips: '44-46"' },
];

const careInstructions = [
  { icon: Droplet, text: "Machine wash cold" },
  { icon: ThermometerSun, text: "Tumble dry low" },
  { icon: Sparkles, text: "Do not bleach" },
];

// Educational tips for ThriveMT products
const thriveMTEducation: Record<number, { backMessage: string; tip: string; resource: string }> = {
  76: { 
    backMessage: "Deep breaths reduce stress—try 4-7-8 breathing today",
    tip: "Inhale 4 seconds • Hold 7 seconds • Exhale 8 seconds",
    resource: "The 4-7-8 breathing technique activates your parasympathetic nervous system, reducing anxiety and promoting calm."
  },
  77: { 
    backMessage: "Mental health tip: Celebrate small wins to build self-compassion",
    tip: "Write down 3 wins today, no matter how small",
    resource: "Self-compassion research shows that celebrating small victories builds resilience and improves mental well-being."
  },
  78: { 
    backMessage: "Resilience grows with support—reach out when clouds gather",
    tip: "Text someone you trust when you need support",
    resource: "Studies show that social support is one of the strongest predictors of resilience during difficult times."
  },
  79: { 
    backMessage: "Pausing helps manage anxiety—practice grounding in the moment",
    tip: "Name 5 things you can see, 4 you can touch, 3 you can hear",
    resource: "The 5-4-3-2-1 grounding technique is clinically proven to reduce anxiety by anchoring you to the present moment."
  },
  80: { 
    backMessage: "Self-care isn't selfish—hydrate, read, and rest for better mental clarity",
    tip: "Drink water • Read 10 pages • Sleep 7+ hours",
    resource: "Basic self-care creates the foundation for mental health. Hydration, learning, and sleep are non-negotiable."
  },
  81: { 
    backMessage: "Setting boundaries protects your peace—it's key to emotional well-being",
    tip: "It's okay to say no. Your peace matters.",
    resource: "Healthy boundaries are essential for self-respect and maintaining mental health in relationships."
  },
  82: { 
    backMessage: "1 in 5 adults face mental health challenges—talking normalizes it",
    tip: "Break the stigma: Share your story when you're ready",
    resource: "Open conversations about mental health reduce stigma and encourage others to seek help."
  },
  83: { 
    backMessage: "Community support accelerates healing—seek therapy or groups for connection",
    tip: "Healing is not a solo journey. Ask for help.",
    resource: "Group therapy and community support have been shown to significantly improve mental health outcomes."
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation({ threshold: 0.1 });

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center luxury-editorial">
          <div className="text-center">
            <h1 className="font-serif text-display text-foreground mb-6">Product Not Found</h1>
            <Button className="btn-couture" asChild>
              <Link to="/collections"><span>Back to Collections</span></Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const isThriveMT = product.category === "ThriveMT";
  const education = isThriveMT ? thriveMTEducation[product.id] : null;

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Fashion Ticker for ThriveMT */}
      {isThriveMT && (
        <div className="fashion-ticker">
          <div className="fashion-ticker-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 whitespace-nowrap">
                <span className="text-xs tracking-couture">THRIVEMT COLLECTION</span>
                <Star size={8} fill="currentColor" />
                <span className="text-xs tracking-couture">MENTAL HEALTH AWARENESS</span>
                <Star size={8} fill="currentColor" />
                <span className="text-xs tracking-couture">EDUCATIONAL BACK PRINT</span>
                <Star size={8} fill="currentColor" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-card py-6 border-b border-border/50">
        <div className="container mx-auto px-6">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs tracking-couture uppercase"
          >
            <ArrowLeft size={14} />
            Back to Collections
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section ref={detailsRef} className="py-20 bg-background relative overflow-hidden luxury-editorial">
        <div className="absolute inset-0 lv-texture opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto transition-all duration-1000 ${detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden border border-border/50 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <button
                onClick={handleWishlistToggle}
                className={`absolute top-6 right-6 w-14 h-14 flex items-center justify-center border transition-all ${
                  inWishlist
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background/90 backdrop-blur-sm text-foreground border-border hover:border-foreground"
                }`}
              >
                <Heart size={22} fill={inWishlist ? "currentColor" : "none"} />
              </button>
              
              {/* ThriveMT Badge */}
              {isThriveMT && (
                <div className="absolute top-6 left-6 badge-runway">
                  ThriveMT Exclusive
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <span className="text-xs tracking-couture text-gold uppercase mb-3">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="text-gold"
                      fill={star <= 4 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-xs tracking-couture text-muted-foreground">(24 REVIEWS)</span>
              </div>

              {/* Affirmation */}
              <div className="bg-card border border-border/50 p-8 mb-8">
                <p className="text-xs tracking-couture text-gold uppercase mb-3">
                  Featured Affirmation
                </p>
                <p className="font-serif text-2xl text-foreground italic">
                  "{product.affirmation}"
                </p>
              </div>

              {/* ThriveMT Education Section */}
              {isThriveMT && education && (
                <div className="bg-foreground text-primary-foreground p-8 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain size={18} className="text-gold" />
                    <p className="text-xs tracking-couture uppercase">Back of Shirt — Mental Health Tip</p>
                  </div>
                  <p className="font-serif text-xl italic mb-4">"{education.backMessage}"</p>
                  <div className="border-t border-primary-foreground/20 pt-4 mt-4">
                    <p className="text-sm text-primary-foreground/80 mb-2">
                      <span className="text-gold">Quick Tip:</span> {education.tip}
                    </p>
                    <p className="text-xs text-primary-foreground/60">{education.resource}</p>
                  </div>
                </div>
              )}

              <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
                {product.description}. Each piece is crafted with intention, designed to remind you of your 
                inherent worth and the power of positive affirmations in your daily journey.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="price-couture text-4xl text-foreground">
                  ${product.price}
                </span>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <p className="text-xs tracking-couture text-muted-foreground uppercase mb-3">
                  Color: <span className="text-foreground">{product.colors[selectedColor]}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 border-2 transition-all ${
                        selectedColor === index
                          ? "border-foreground ring-2 ring-foreground/20"
                          : "border-border hover:border-foreground/50"
                      }`}
                      style={{
                        backgroundColor:
                          color.toLowerCase().includes("cream") ? "#F5F0E8" :
                          color.toLowerCase().includes("sage") ? "#9CAF88" :
                          color.toLowerCase().includes("rose") ? "#D4A5A5" :
                          color.toLowerCase().includes("charcoal") ? "#36454F" :
                          color.toLowerCase().includes("black") ? "#1a1a1a" :
                          color.toLowerCase().includes("white") ? "#ffffff" :
                          color.toLowerCase().includes("purple") ? "#4a235a" :
                          color.toLowerCase().includes("yellow") ? "#d4a574" :
                          color.toLowerCase().includes("terracotta") ? "#c4785a" :
                          color.toLowerCase().includes("green") ? "#7fb069" :
                          color.toLowerCase().includes("blue") ? "#6b9ac4" :
                          color.toLowerCase().includes("pink") ? "#deb6b0" :
                          "#E8DFD0",
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-couture text-muted-foreground uppercase">
                    Size: <span className="text-foreground">{selectedSize}</span>
                  </p>
                  <button 
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-xs tracking-couture text-gold hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Ruler size={12} />
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-3">
                  {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                {/* Size Guide Dropdown */}
                {showSizeGuide && (
                  <div className="mt-4 bg-card border border-border/50 p-6 animate-fade-in">
                    <h4 className="text-xs tracking-couture text-foreground uppercase mb-4">Size Chart (inches)</h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="text-left py-2 text-muted-foreground">Size</th>
                          <th className="text-left py-2 text-muted-foreground">Chest</th>
                          <th className="text-left py-2 text-muted-foreground">Waist</th>
                          <th className="text-left py-2 text-muted-foreground">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeGuide.map((row) => (
                          <tr key={row.size} className={`border-b border-border/30 ${selectedSize === row.size ? 'bg-gold/10' : ''}`}>
                            <td className="py-2 font-medium">{row.size}</td>
                            <td className="py-2 text-muted-foreground">{row.chest}</td>
                            <td className="py-2 text-muted-foreground">{row.waist}</td>
                            <td className="py-2 text-muted-foreground">{row.hips}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="flex-1 btn-gold"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  onClick={handleWishlistToggle}
                  className={`btn-couture px-8 ${
                    inWishlist ? "bg-foreground text-background" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
                    {inWishlist ? "Saved" : "Save"}
                  </span>
                </Button>
              </div>

              {/* Care Instructions */}
              <div className="border-t border-border/50 pt-8">
                <h4 className="text-xs tracking-couture text-muted-foreground uppercase mb-4">Care Instructions</h4>
                <div className="flex flex-wrap gap-6">
                  {careInstructions.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <item.icon size={16} className="text-gold" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ThriveMT CTA */}
      {isThriveMT && (
        <section className="py-20 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h3 className="font-serif text-3xl mb-4">Part of the ThriveMT Collection</h3>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Explore all 8 exclusive designs created in partnership with ThriveMT Mental Health.
            </p>
            <Button className="btn-gold" asChild>
              <Link to="/thrivemt-collection">
                <span className="flex items-center gap-2">
                  View Full Collection <ArrowRight size={14} />
                </span>
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs tracking-couture text-gold uppercase block mb-3">CURATED FOR YOU</span>
              <h2 className="font-serif text-display text-foreground">
                You May Also Love
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group product-card-couture overflow-hidden"
                >
                  <div className="aspect-[3/4] image-editorial overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 bg-background">
                    <span className="text-[0.6rem] tracking-couture text-gold uppercase">{relatedProduct.category}</span>
                    <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-gold transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <span className="price-couture text-lg text-foreground mt-2 block">${relatedProduct.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;