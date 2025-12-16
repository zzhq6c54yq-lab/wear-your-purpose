import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/collections">Back to Collections</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const inWishlist = isInWishlist(product.id);

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
      {/* Breadcrumb */}
      <div className="bg-secondary/50 py-4">
        <div className="container mx-auto px-6">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
          >
            <ArrowLeft size={16} />
            Back to Collections
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handleWishlistToggle}
                className={`absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-all ${
                  inWishlist
                    ? "bg-rose text-primary-foreground"
                    : "bg-background/90 backdrop-blur-sm text-foreground hover:bg-rose hover:text-primary-foreground"
                }`}
              >
                <Heart size={24} fill={inWishlist ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-2">
                {product.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="text-copper"
                      fill={star <= 4 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-muted-foreground">(24 reviews)</span>
              </div>

              {/* Affirmation */}
              <div className="bg-gradient-to-r from-primary/10 via-rose/10 to-copper/10 rounded-2xl p-6 mb-8">
                <p className="font-sans text-xs font-medium tracking-widest text-primary uppercase mb-2">
                  Featured Affirmation
                </p>
                <p className="font-serif text-2xl text-foreground italic">
                  "{product.affirmation}"
                </p>
              </div>

              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}. Each piece is crafted with intention, designed to remind you of your 
                inherent worth and the power of positive affirmations in your daily journey.
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="font-serif text-4xl font-semibold text-foreground">
                  ${product.price}
                </span>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <p className="font-sans text-sm font-medium text-foreground mb-3">
                  Color: <span className="text-muted-foreground">{product.colors[selectedColor]}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === index
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border hover:border-primary/50"
                      }`}
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "cream" ? "#F5F0E8" :
                          color.toLowerCase() === "sage" ? "#9CAF88" :
                          color.toLowerCase() === "rose" ? "#D4A5A5" :
                          color.toLowerCase() === "charcoal" ? "#36454F" :
                          color.toLowerCase() === "black" ? "#1a1a1a" :
                          color.toLowerCase() === "white" ? "#ffffff" :
                          color.toLowerCase() === "oatmeal" ? "#E8DFD0" :
                          color.toLowerCase() === "sand" ? "#C2B280" :
                          color.toLowerCase() === "copper" ? "#B87333" :
                          "#E8DFD0",
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans text-lg tracking-wide py-7 rounded-full shadow-soft"
                >
                  <ShoppingBag className="mr-2" size={20} />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleWishlistToggle}
                  className={`py-7 px-8 rounded-full border-2 ${
                    inWishlist
                      ? "border-rose bg-rose/10 text-rose"
                      : "border-primary/30 hover:bg-primary/10"
                  }`}
                >
                  <Heart size={20} fill={inWishlist ? "currentColor" : "none"} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
              You May Also Love
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 bg-background"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-lg font-semibold text-cream">
                      {relatedProduct.name}
                    </h3>
                    <span className="font-sans text-cream/80">${relatedProduct.price}</span>
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
