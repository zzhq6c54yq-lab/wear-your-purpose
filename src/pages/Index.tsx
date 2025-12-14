import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import thriveLogo from "@/assets/thrive-logo.jpeg";

const affirmations = [
  "I am worthy of love and healing",
  "My story is my strength",
  "Together we rise",
  "Peace begins within me",
  "I break cycles, not hearts",
];

const collections = [
  {
    name: "Healing Collection",
    description: "Pieces designed to acknowledge and overcome generational trauma",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
  },
  {
    name: "Unity Line",
    description: "Celebrating togetherness and the power of community",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
  },
  {
    name: "Affirmation Essentials",
    description: "Daily reminders of your inherent worth and potential",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <img
                src={thriveLogo}
                alt="Thrive Apparel Co."
                className="h-32 w-32 mx-auto rounded-full object-cover shadow-elevated"
              />
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Wear Your <span className="text-gradient-rose">Purpose</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Clothing that heals. Affirmations you wear. Join a movement dedicated to 
              breaking generational cycles and spreading unity, peace, and love.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans text-base tracking-wide px-8"
              >
                Explore Collections <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-sans text-base tracking-wide px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Our Mission
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
              More Than Clothing. It's a <span className="text-gradient-rose">Movement</span>.
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              At Thrive Apparel Co., we believe that what you wear can transform how you feel. 
              Each piece carries an affirmation, a reminder of your worth, your strength, and 
              your capacity for healing. We're here to acknowledge generational trauma, break 
              taboos, and create a community united in peace and love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Heart, title: "Healing Through Fashion", desc: "Wear affirmations that speak to your soul" },
              { icon: Users, title: "Unity & Togetherness", desc: "Building a community of support and love" },
              { icon: Sparkles, title: "Break the Cycle", desc: "Acknowledge and transcend generational patterns" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-background rounded-lg shadow-soft hover:shadow-elevated transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rose rounded-full flex items-center justify-center">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-sans text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Our Collections
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Curated With <span className="text-gradient-rose">Intention</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, i) => (
              <Link 
                key={i} 
                to="/collections"
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-semibold text-cream mb-2">{collection.name}</h3>
                  <p className="font-sans text-cream/80 text-sm">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="font-sans tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/collections">
                View All Collections <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Affirmation of the Day */}
      <section className="py-24 bg-gradient-rose text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="mx-auto mb-6" size={32} />
            <span className="font-sans text-sm font-medium tracking-widest uppercase mb-4 block opacity-80">
              Affirmation of the Day
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              "{affirmations[0]}"
            </h2>
            <p className="font-sans text-lg opacity-90">
              Carry this truth with you today. Let it guide your thoughts, your actions, and your interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Join the <span className="text-gradient-rose">Movement</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              Be the first to know about new collections, exclusive affirmations, and 
              community events. Together, we thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border font-sans flex-1"
              />
              <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans tracking-wide">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;