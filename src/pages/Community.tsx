import { Quote, Instagram, Heart, MessageCircle, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

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
  return (
    <Layout>
      {/* Hero - Full Width Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle5} 
            alt="Empowered community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary-foreground/70 uppercase mb-6 block">
              Our People
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6">
              The Thrive <span className="text-rose-gold-light">Community</span>
            </h1>
            <p className="font-sans text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Real stories from real people. Our community is built on shared experiences, 
              mutual support, and the collective journey toward healing.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-gradient-rose-gold">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground">2,000+</span>
              <p className="font-sans text-xs tracking-luxury uppercase text-primary-foreground/80 mt-1">Community Members</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground">50+</span>
              <p className="font-sans text-xs tracking-luxury uppercase text-primary-foreground/80 mt-1">Cities Represented</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground">∞</span>
              <p className="font-sans text-xs tracking-luxury uppercase text-primary-foreground/80 mt-1">Stories Shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Lifestyle Images */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
              Voices of Healing
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Stories of <span className="text-gradient-rose">Transformation</span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Hear from the individuals who make up our community
            </p>
          </div>
          
          <div className="space-y-16">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
                  <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-lg p-8 shadow-soft">
                    <Quote className="text-primary mb-6" size={40} strokeWidth={1} />
                    <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-rose-gold rounded-full flex items-center justify-center">
                        <span className="font-serif text-xl text-primary-foreground">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <div className="font-serif text-lg font-semibold text-foreground">{testimonial.name}</div>
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

      {/* Full-width Community Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle8} 
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        
        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
              We Are <span className="text-rose-gold-light">One</span>
            </h2>
            <p className="font-sans text-lg text-primary-foreground/80 leading-relaxed">
              United by the belief that healing is possible. Connected through shared experiences.
              Together, we break cycles and build bridges.
            </p>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-24 bg-gradient-blush">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Our Community <span className="text-gradient-rose">Values</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We lead with empathy and understanding", image: lifestyle2 },
                { icon: MessageCircle, title: "Open Dialogue", desc: "We create space for honest conversations", image: lifestyle7 },
                { icon: Users, title: "Authentic Connection", desc: "We celebrate vulnerability as strength", image: lifestyle4 },
              ].map((value, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-card shadow-soft">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-rose-gold rounded-full flex items-center justify-center">
                      <value.icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] font-medium tracking-ultra text-primary uppercase block mb-4">
              #ThriveApparelCo
            </span>
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Moments of <span className="text-gradient-rose">Connection</span>
            </h2>
            <p className="font-sans text-muted-foreground">
              Touch someone's heart today. Share your Thrive moments.
            </p>
          </div>
          
          {/* Instagram-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {lifestyleImages.map((img, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`${i === 0 ? 'aspect-square' : 'aspect-square'}`}>
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                  <Heart 
                    className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    size={32} 
                    fill="currentColor"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="font-sans text-xs tracking-luxury uppercase border-primary/30 text-foreground hover:bg-primary/5 rounded-none px-10 py-6"
            >
              <Instagram className="mr-2" size={18} /> Follow @ThriveApparelCo
            </Button>
          </div>
        </div>
      </section>

      {/* Share Your Story - With Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle9} 
            alt="Strength and resilience"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-card/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Star className="mx-auto mb-4 text-primary" size={32} strokeWidth={1} />
              <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
                Share Your <span className="text-gradient-rose">Story</span>
              </h2>
              <p className="font-sans text-muted-foreground">
                Your journey could be the light someone else needs. 
                Share how Thrive has impacted your life.
              </p>
            </div>
            
            <form className="space-y-6 bg-background p-8 md:p-10 rounded-lg shadow-elevated border border-primary/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">Your Name</label>
                  <Input className="bg-card border-border rounded-none" placeholder="Full name" />
                </div>
                <div>
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">Location</label>
                  <Input className="bg-card border-border rounded-none" placeholder="City, State" />
                </div>
              </div>
              <div>
                <label className="font-sans text-sm text-muted-foreground mb-2 block">Your Story</label>
                <Textarea 
                  className="bg-card border-border min-h-[150px] rounded-none" 
                  placeholder="Tell us how Thrive has impacted your healing journey..."
                />
              </div>
              <Button className="w-full bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-opacity font-sans text-xs tracking-luxury uppercase py-6 rounded-none">
                Submit Your Story <ArrowRight className="ml-2" size={14} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={lifestyle10} 
            alt="Joyful future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
              Ready to <span className="text-rose-gold-light">Thrive</span>?
            </h2>
            <p className="font-sans text-lg text-primary-foreground/80 mb-8">
              Join thousands who wear their healing journey with pride.
            </p>
            <Button 
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans text-xs tracking-luxury uppercase px-12 py-7 rounded-none"
              asChild
            >
              <a href="/collections">
                Shop the Collection <ArrowRight className="ml-2" size={14} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
