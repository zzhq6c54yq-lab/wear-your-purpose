import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const categories = ["All", "T-Shirts", "Hoodies", "Athleisure", "Accessories"];

const products = [
  {
    id: 1,
    name: "I Am Worthy Tee",
    category: "T-Shirts",
    price: 45,
    affirmation: "I am worthy of love and healing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    id: 2,
    name: "Rise Together Hoodie",
    category: "Hoodies",
    price: 85,
    affirmation: "Together we rise",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
  },
  {
    id: 3,
    name: "Peace Within Joggers",
    category: "Athleisure",
    price: 65,
    affirmation: "Peace begins within me",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
  },
  {
    id: 4,
    name: "Break Cycles Cap",
    category: "Accessories",
    price: 35,
    affirmation: "I break cycles, not hearts",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
  },
  {
    id: 5,
    name: "My Story Tee",
    category: "T-Shirts",
    price: 45,
    affirmation: "My story is my strength",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  },
  {
    id: 6,
    name: "Healing Journey Hoodie",
    category: "Hoodies",
    price: 89,
    affirmation: "Healing is not linear",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
  },
  {
    id: 7,
    name: "Unity Sports Bra",
    category: "Athleisure",
    price: 55,
    affirmation: "United we thrive",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
  },
  {
    id: 8,
    name: "Love Tote Bag",
    category: "Accessories",
    price: 40,
    affirmation: "Love always wins",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
  },
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Shop With Purpose
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Our <span className="text-gradient-rose">Collections</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every piece carries an affirmation. Every purchase supports a movement. 
              Find the message that speaks to your soul.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-sans text-sm font-medium tracking-wide px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-gradient-rose text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={18} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-sans text-cream text-xs italic">"{product.affirmation}"</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-sans text-xs text-primary tracking-wide uppercase">{product.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-lg font-semibold text-foreground">${product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans text-xs"
                    >
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Full Shop <span className="text-gradient-rose">Coming Soon</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-6">
              We're putting the finishing touches on our e-commerce experience. 
              Sign up to be notified when we launch.
            </p>
            <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;