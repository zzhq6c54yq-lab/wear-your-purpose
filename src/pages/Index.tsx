import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Sparkles, Star, Leaf } from "lucide-react";
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
      {/* Hero Section - Full Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Warm background with texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-secondary to-accent/20" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-copper/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Large Logo - Full Display */}
            <div className="mb-10 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-rose rounded-full blur-xl opacity-30 animate-pulse" />
                <img
                  src={thriveLogo}
                  alt="Thrive Apparel Co."
                  className="relative h-48 w-48 md:h-64 md:w-64 mx-auto rounded-full object-cover shadow-elevated ring-4 ring-primary/20"
                />
              </div>
            </div>
            
            {/* Brand Name */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Thrive Apparel Co.
            </h1>
            
            {/* Tagline */}
            <p className="font-serif text-xl md:text-2xl text-primary mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Wear Your Purpose. Heal Your Soul.
            </p>
            
            {/* Mission Statement */}
            <p className="font-sans text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Clothing that speaks to your heart. Affirmations that transform your day. 
              Join a movement dedicated to unity, peace, and healing generational wounds—together.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans text-base tracking-wide px-10 py-6 shadow-elevated hover:shadow-lg"
                asChild
              >
                <Link to="/collections">
                  Explore Collections <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-sans text-base tracking-wide px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <Leaf className="mx-auto text-primary/50" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Flowing Cards */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Sparkles className="mx-auto text-primary mb-4" size={28} />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              More Than Clothing
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
              Every thread woven with intention. Every message chosen with love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Healing Through Fashion", 
                desc: "Wear affirmations that speak directly to your soul and remind you of your inherent worth every single day.",
                gradient: "from-rose/20 to-primary/10"
              },
              { 
                icon: Users, 
                title: "Unity & Togetherness", 
                desc: "Building a community where everyone belongs. Where love flows freely and support is unconditional.",
                gradient: "from-copper/20 to-rose/10"
              },
              { 
                icon: Sparkles, 
                title: "Break the Cycle", 
                desc: "Acknowledge generational patterns with compassion. Transform pain into purpose, trauma into triumph.",
                gradient: "from-primary/20 to-copper/10"
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-soft hover:shadow-elevated`}
              >
                <div className="w-16 h-16 mb-6 bg-gradient-rose rounded-2xl flex items-center justify-center shadow-soft rotate-3 hover:rotate-0 transition-transform">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affirmation of the Day - Warm & Inviting */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-rose to-copper" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYtMkgyNHYyaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <Star className="mx-auto mb-4 opacity-80" size={32} />
            <span className="font-sans text-sm font-medium tracking-widest uppercase mb-6 block opacity-80">
              Today's Affirmation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
              "{affirmations[0]}"
            </h2>
            <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-8 rounded-full" />
            <p className="font-sans text-lg opacity-90 max-w-xl mx-auto">
              Let this truth wrap around you like a warm embrace. Carry it with you today.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Curated With Love
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Our Collections
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, i) => (
              <Link 
                key={i} 
                to="/collections"
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-serif text-2xl font-semibold text-cream mb-2 group-hover:text-rose transition-colors">{collection.name}</h3>
                  <p className="font-sans text-cream/80 text-sm leading-relaxed">{collection.description}</p>
                  <div className="mt-4 flex items-center text-rose font-sans text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="font-sans tracking-wide border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <Link to="/collections">
                View All Collections <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter - Warm Invitation */}
      <section className="py-24 bg-gradient-to-br from-secondary via-card to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="mx-auto text-primary mb-4" size={32} />
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Join Our Family
            </h2>
            <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
              Be the first to receive new affirmations, exclusive collection drops, and stories 
              from our growing community. Together, we thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background border-2 border-border focus:border-primary font-sans flex-1 py-6"
              />
              <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-all font-sans tracking-wide py-6 px-8 shadow-soft hover:shadow-elevated">
                Subscribe
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-4">
              Join 2,000+ souls on this healing journey. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;