import { Quote, Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

const testimonials = [
  {
    name: "Maya Johnson",
    location: "Atlanta, GA",
    quote: "Wearing my 'I Break Cycles' hoodie sparked a conversation with my daughter about our family history. It was the first time we talked openly about generational trauma. This clothing does more than look good—it opens doors.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80",
  },
  {
    name: "Marcus Williams",
    location: "Chicago, IL",
    quote: "I bought the 'My Story Is My Strength' tee during a really dark time. Reading those words every morning reminded me that my past doesn't define me—it empowers me. Thank you, Thrive.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Aaliyah Davis",
    location: "Houston, TX",
    quote: "The quality is incredible, but it's the message that matters most. Strangers have stopped me to ask about my shirt, and suddenly we're having meaningful conversations about healing. That's the power of Thrive.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "James Thompson",
    location: "New York, NY",
    quote: "As a therapist, I recommend Thrive to my clients. There's something powerful about wearing your healing journey. It's a daily commitment to yourself that everyone can see.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
];

const Community = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Our People
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              The Thrive <span className="text-gradient-rose">Community</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Real stories from real people. Our community is built on shared experiences, 
              mutual support, and the collective journey toward healing.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Stories of <span className="text-gradient-rose">Transformation</span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Hear from the individuals who make up our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                className="bg-card rounded-lg p-8 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <Quote className="text-primary mb-4" size={32} />
                <p className="font-sans text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-serif font-semibold text-foreground">{testimonial.name}</div>
                    <div className="font-sans text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-24 bg-gradient-rose text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8">
              Our Community Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We lead with empathy and understanding" },
                { icon: MessageCircle, title: "Open Dialogue", desc: "We create space for honest conversations" },
                { icon: Instagram, title: "Authentic Connection", desc: "We celebrate vulnerability as strength" },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <value.icon size={28} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="font-sans text-sm opacity-90">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
                Share Your <span className="text-gradient-rose">Story</span>
              </h2>
              <p className="font-sans text-muted-foreground">
                Your journey could be the light someone else needs. 
                Share how Thrive has impacted your life.
              </p>
            </div>
            
            <form className="space-y-6 bg-background p-8 rounded-lg shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">Your Name</label>
                  <Input className="bg-card border-border" placeholder="Full name" />
                </div>
                <div>
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">Location</label>
                  <Input className="bg-card border-border" placeholder="City, State" />
                </div>
              </div>
              <div>
                <label className="font-sans text-sm text-muted-foreground mb-2 block">Your Story</label>
                <Textarea 
                  className="bg-card border-border min-h-[150px]" 
                  placeholder="Tell us how Thrive has impacted your healing journey..."
                />
              </div>
              <Button className="w-full bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans">
                Submit Your Story
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Join the <span className="text-gradient-rose">Conversation</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-6">
              Follow us on social media and share your Thrive moments with #ThriveApparelCo
            </p>
            <Button 
              variant="outline" 
              className="font-sans border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="mr-2" size={18} /> Follow @ThriveApparelCo
            </Button>
          </div>
          
          {/* Placeholder for social feed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-shadow">
                <img src={img} alt="Community moment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;