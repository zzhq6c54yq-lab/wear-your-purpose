import { Link } from "react-router-dom";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary via-cream to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-[20%] w-[300px] h-[300px] bg-rose/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-[10%] w-[250px] h-[250px] bg-copper/15 rounded-full blur-[80px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-rose rounded-full flex items-center justify-center shadow-soft">
            <Heart className="text-primary-foreground" size={36} />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-4">
            My Wishlist
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
            {wishlistProducts.length > 0
              ? `${wishlistProducts.length} piece${wishlistProducts.length > 1 ? "s" : ""} you've loved`
              : "Start adding pieces that speak to your heart"}
          </p>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="text-muted-foreground" size={48} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Your wishlist is empty
              </h2>
              <p className="font-sans text-muted-foreground mb-8 max-w-md mx-auto">
                Explore our collections and save pieces that resonate with your journey
              </p>
              <Button
                size="lg"
                className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans tracking-wide px-10 py-6 rounded-full"
                asChild
              >
                <Link to="/collections">
                  Explore Collections <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 bg-card"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Link>
                  
                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-all shadow-soft"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="p-5">
                    <span className="font-sans text-xs text-primary tracking-wide uppercase">
                      {product.category}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-lg font-semibold text-foreground mt-1 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="font-sans text-sm text-muted-foreground italic mt-2">
                      "{product.affirmation}"
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-sans text-xl font-semibold text-foreground">
                        ${product.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-rose text-primary-foreground hover:opacity-90 rounded-full"
                      >
                        <ShoppingBag size={16} className="mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Wishlist;
