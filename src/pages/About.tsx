import { Heart, Users, Leaf, Shield, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import thriveLogo from "@/assets/thrive-logo.jpeg";

// Import lifestyle images
import lifestyle1 from "@/assets/community/lifestyle-1.jpg";
import lifestyle7 from "@/assets/community/lifestyle-7.jpg";
import lifestyle8 from "@/assets/community/lifestyle-8.jpg";
import lifestyle9 from "@/assets/community/lifestyle-9.jpg";

const values = [
  {
    icon: Heart,
    title: "Healing",
    description: "We believe in the power of acknowledgment. By naming our pain, we begin to heal.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Together we are stronger. Community is at the heart of everything we create.",
  },
  {
    icon: Leaf,
    title: "Growth",
    description: "Every day is an opportunity to become who we were meant to be.",
  },
  {
    icon: Shield,
    title: "Peace",
    description: "We promote tranquility in a chaotic world through mindful living.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero - Full Width Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle1} 
            alt="Community of diverse friends"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary-foreground/70 uppercase mb-6 block">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6">
              Born From <span className="text-rose-gold-light">Purpose</span>
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Thrive Apparel Co. was created with a singular mission: to help people wear 
              their healing journey on their sleeves—literally.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Story Section - With Lifestyle Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={lifestyle7}
                  alt="Multi-generational family healing together"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating Logo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-card rounded-2xl shadow-elevated p-4 border border-primary/20">
                <img
                  src={thriveLogo}
                  alt="Thrive Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase">
                Our Beginning
              </span>
              <h2 className="font-serif text-4xl font-semibold text-foreground">
                Breaking the Silence, <span className="text-gradient-rose">One Stitch at a Time</span>
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                We understand that generational trauma often goes unspoken. It's passed down 
                through silence, through learned behaviors, through the pain we don't name. 
                Thrive Apparel Co. was founded on the belief that healing begins with acknowledgment.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Our clothing carries affirmations—powerful words designed not just to make you 
                feel good about wearing them, but to spark conversations. When someone reads the 
                message on your shirt, they might find the courage to speak their own truth.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                We're here to break taboos. To make mental health discussions as common as 
                discussing the weather. To create a world where seeking healing isn't just 
                accepted—it's celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - With Background Image */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle8} 
            alt="Community gathering"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-card/95" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Our Core <span className="text-gradient-rose">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8 bg-background rounded-lg shadow-soft hover:shadow-elevated transition-all hover:-translate-y-2 duration-500 border border-primary/10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rose-gold rounded-full flex items-center justify-center">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise - Full Width Image Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle9} 
            alt="Strength and resilience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="mx-auto mb-8 text-primary-foreground/40" size={48} strokeWidth={1} />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-8">
              Our Promise to You
            </h2>
            <p className="font-sans text-lg leading-relaxed text-primary-foreground/90 mb-10">
              Every piece you purchase supports a mission bigger than fashion. We're committed 
              to creating clothing that inspires, heals, and unites. When you wear Thrive, 
              you're not just wearing a brand—you're wearing a declaration. A declaration that 
              you believe in healing, in unity, in breaking cycles that no longer serve us.
            </p>
            <Button 
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans text-xs tracking-luxury uppercase px-12 py-7 rounded-none"
              asChild
            >
              <Link to="/collections">
                Explore Our Collection <ArrowRight className="ml-2" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Impact - With Lifestyle Images */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
                Beyond the <span className="text-gradient-rose">Clothing</span>
              </h2>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
                Our commitment extends beyond creating beautiful apparel. Every thread weaves a story of hope.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { number: "100%", label: "Purpose-Driven Designs", image: lifestyle1 },
                { number: "∞", label: "Affirmations Shared", image: lifestyle7 },
                { number: "1", label: "Community, One Love", image: lifestyle8 },
              ].map((stat, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={stat.image} 
                      alt={stat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                    <div className="font-sans text-sm tracking-luxury uppercase text-primary-foreground/80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-blush">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="mx-auto mb-6 text-primary" size={40} fill="currentColor" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="font-sans text-muted-foreground mb-10 leading-relaxed">
              Wear your healing. Start conversations. Break cycles. Together, we thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-rose-gold text-primary-foreground hover:opacity-90 font-sans text-xs tracking-luxury uppercase px-10 py-6 rounded-none"
                asChild
              >
                <Link to="/collections">Shop Now</Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="font-sans text-xs tracking-luxury uppercase px-10 py-6 border border-primary/30 hover:bg-primary/5 rounded-none"
                asChild
              >
                <Link to="/community">Meet Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
