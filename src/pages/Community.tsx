import { Quote, Instagram, Heart, MessageCircle, Users, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import lifestyle images
import lifestyle1 from "@/assets/community/lifestyle-1.jpg";
import lifestyle2 from "@/assets/community/lifestyle-2.jpg";
import lifestyle3 from "@/assets/community/lifestyle-3.jpg";
import lifestyle4 from "@/assets/community/lifestyle-4.jpg";
import lifestyle5 from "@/assets/community/lifestyle-5.jpg";
import lifestyle6 from "@/assets/community/lifestyle-6.jpg";
import lifestyle7 from "@/assets/community/lifestyle-7.jpg";
import lifestyle8 from "@/assets/community/lifestyle-8.jpg";
import lifestyle9 from "@/assets/community/lifestyle-9.jpg";
import lifestyle10 from "@/assets/community/lifestyle-10.jpg";

const lifestyleImages = [
  { src: lifestyle1, alt: "Diverse friends laughing together" },
  { src: lifestyle2, alt: "Mother and daughter embrace" },
  { src: lifestyle3, alt: "Father and son playing" },
  { src: lifestyle4, alt: "Couple holding hands" },
  { src: lifestyle5, alt: "Empowered women together" },
  { src: lifestyle6, alt: "Man meditating peacefully" },
  { src: lifestyle7, alt: "Multi-generational family" },
  { src: lifestyle8, alt: "Community gathering circle" },
  { src: lifestyle9, alt: "Woman with disability" },
  { src: lifestyle10, alt: "Kids playing joyfully" },
];

const testimonials = [
  {
    name: "Maya Johnson",
    location: "Atlanta, GA",
    quote: "Wearing my 'I Break Cycles' hoodie sparked a conversation with my daughter about our family history. It was the first time we talked openly about generational trauma. This clothing does more than look good—it opens doors.",
    image: lifestyle2,
  },
  {
    name: "Marcus Williams",
    location: "Chicago, IL",
    quote: "I bought the 'My Story Is My Strength' tee during a really dark time. Reading those words every morning reminded me that my past doesn't define me—it empowers me. Thank you, Thrive.",
    image: lifestyle6,
  },
  {
    name: "Aaliyah Davis",
    location: "Houston, TX",
    quote: "The quality is incredible, but it's the message that matters most. Strangers have stopped me to ask about my shirt, and suddenly we're having meaningful conversations about healing. That's the power of Thrive.",
    image: lifestyle5,
  },
  {
    name: "James Thompson",
    location: "New York, NY",
    quote: "As a therapist, I recommend Thrive to my clients. There's something powerful about wearing your healing journey. It's a daily commitment to yourself that everyone can see.",
    image: lifestyle3,
  },
];

const Community = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Layout>
      {/* Hero - Full Width with Ken Burns */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle5} 
              alt="Empowered community"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        
        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-gold-light/20 animate-float-heart"
              size={14 + i * 5}
              style={{
                left: `${20 + i * 15}%`,
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
            <span className="font-sans text-sm font-medium tracking-ultra text-primary-foreground/70 uppercase mb-6 block">
              Our People
            </span>
            <h1 className="font-serif text-hero font-semibold text-primary-foreground mb-8">
              The Thrive <span className="text-rose-gold-light">Community</span>
            </h1>
            <p className="font-sans text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Real stories from real people. Our community is built on shared experiences, 
              mutual support, and the collective journey toward healing.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-primary-foreground/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats Banner with Animated Numbers */}
      <section className="py-10 bg-gradient-rose-gold relative overflow-hidden">
        <div className="absolute inset-0 shimmer-gold" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { number: "2,000+", label: "Community Members" },
              { number: "50+", label: "Cities Represented" },
              { number: "∞", label: "Stories Shared" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <span className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground block group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </span>
                <p className="font-sans text-xs tracking-luxury uppercase text-primary-foreground/80 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Premium Cards */}
      <section ref={testimonialRef} className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="mx-auto mb-4 text-rose-gold animate-sparkle" size={24} />
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
              Voices of Healing
            </span>
            <h2 className="font-serif text-display font-semibold text-foreground mb-4">
              Stories of <span className="text-gradient-rose">Transformation</span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Hear from the individuals who make up our community
            </p>
          </div>
          
          <div className="space-y-20">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Image */}
                <div className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                  <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Testimonial */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-xl p-10 shadow-luxury testimonial-card">
                    <Quote className="text-rose-gold/40 mb-6 animate-float" size={48} strokeWidth={1} />
                    <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-10 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-gradient-rose-gold rounded-full flex items-center justify-center shadow-rose animate-pulse-glow">
                        <span className="font-serif text-2xl text-primary-foreground">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <div className="font-serif text-xl font-semibold text-foreground">{testimonial.name}</div>
                        <div className="font-sans text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Community Image - Cinematic */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle8} 
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-3xl">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-8">
              We Are <span className="text-rose-gold-light">One</span>
            </h2>
            <p className="font-sans text-xl text-primary-foreground/80 leading-relaxed">
              United by the belief that healing is possible. Connected through shared experiences.
              Together, we break cycles and build bridges.
            </p>
          </div>
        </div>
      </section>

      {/* Community Values with Premium Cards */}
      <section ref={valuesRef} className="py-28 bg-gradient-blush relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-20 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Sparkles className="mx-auto mb-4 text-rose-gold animate-sparkle" size={24} />
              <h2 className="font-serif text-display font-semibold text-foreground mb-4">
                Our Community <span className="text-gradient-rose">Values</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We lead with empathy and understanding", image: lifestyle2 },
                { icon: MessageCircle, title: "Open Dialogue", desc: "We create space for honest conversations", image: lifestyle7 },
                { icon: Users, title: "Authentic Connection", desc: "We celebrate vulnerability as strength", image: lifestyle4 },
              ].map((value, i) => (
                <div 
                  key={i} 
                  className={`group relative overflow-hidden rounded-2xl bg-card shadow-luxury hover-lift transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-8 text-center relative -mt-16">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-rose-gold rounded-full flex items-center justify-center shadow-rose animate-pulse-glow">
                      <value.icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery - Premium Masonry */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
              #ThriveApparelCo
            </span>
            <h2 className="font-serif text-display font-semibold text-foreground mb-4">
              Moments of <span className="text-gradient-rose">Connection</span>
            </h2>
            <p className="font-sans text-muted-foreground">
              Touch someone's heart today. Share your Thrive moments.
            </p>
          </div>
          
          {/* Instagram-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {lifestyleImages.map((img, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden rounded-xl hover-lift ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`${i === 0 ? 'aspect-square' : 'aspect-square'}`}>
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                  <Heart 
                    className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" 
                    size={32} 
                    fill="currentColor"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="btn-magnetic font-sans text-xs tracking-luxury uppercase border-primary/30 text-foreground hover:bg-primary/5 rounded-none px-12 py-7 group"
            >
              <Instagram className="mr-2" size={18} /> 
              <span>Follow @ThriveApparelCo</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Share Your Story - Premium Form */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle9} 
            alt="Strength and resilience"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-card/95" />
        </div>
        <div className="absolute inset-0 aurora-bg opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <Star className="mx-auto mb-4 text-rose-gold animate-sparkle" size={32} strokeWidth={1} />
              <h2 className="font-serif text-display font-semibold text-foreground mb-4">
                Share Your <span className="text-gradient-rose">Story</span>
              </h2>
              <p className="font-sans text-muted-foreground">
                Your journey could be the light someone else needs. 
                Share how Thrive has impacted your life.
              </p>
            </div>
            
            <form className="space-y-6 bg-background/80 backdrop-blur-sm p-10 md:p-12 rounded-2xl shadow-luxury border border-primary/10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">Your Name</label>
                  <Input className="bg-card border-border rounded-lg focus:border-rose-gold transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">Location</label>
                  <Input className="bg-card border-border rounded-lg focus:border-rose-gold transition-colors" placeholder="City, State" />
                </div>
              </div>
              <div>
                <label className="font-sans text-sm text-muted-foreground mb-2 block">Your Story</label>
                <Textarea 
                  className="bg-card border-border min-h-[180px] rounded-lg focus:border-rose-gold transition-colors" 
                  placeholder="Tell us how Thrive has impacted your healing journey..."
                />
              </div>
              <Button className="w-full btn-magnetic bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-opacity font-sans text-xs tracking-luxury uppercase py-7 rounded-lg shadow-rose relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center">
                  Submit Your Story <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ken-burns">
            <img 
              src={lifestyle10} 
              alt="Joyful future"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        
        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-8">
              Ready to <span className="text-rose-gold-light">Thrive</span>?
            </h2>
            <p className="font-sans text-xl text-primary-foreground/80 mb-10">
              Join thousands who wear their healing journey with pride.
            </p>
            <Button 
              size="lg"
              className="btn-magnetic bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans text-xs tracking-luxury uppercase px-14 py-8 rounded-none shadow-lg relative overflow-hidden group"
              asChild
            >
              <a href="/collections">
                <span className="relative z-10 flex items-center">
                  Shop the Collection <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
