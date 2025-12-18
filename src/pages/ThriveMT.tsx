import { ExternalLink, Heart, Brain, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import thriveLogo from "@/assets/thrive-logo.jpeg";
import thriveMTQR from "@/assets/thrive-mt-qr.jpeg";

const ThriveMT = () => {
  return (
    <Layout>
      <SEO 
        title="ThriveMT Partnership"
        description="Discover the connection between Thrive Apparel Co. and Thrive Mental. Fashion meets mental wellness with resources, community support, and holistic healing tools."
        keywords="ThriveMT, thrive mental health, mental wellness resources, healing partnership, mental health support"
        url="https://thrive-mental.store/thrivemt"
      />
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-warm relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block animate-fade-in">
                  A Thrive Initiative
                </span>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  Thrive <span className="text-gradient-rose">Mental</span>
                </h1>
                <p className="font-sans text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  Where fashion meets mental wellness. Thrive Mental is our dedicated platform 
                  for mental health resources, community support, and healing tools.
                </p>
                <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <Button 
                    size="lg"
                    className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans text-base tracking-wide px-8"
                    asChild
                  >
                    <a 
                      href="https://Thrive-Mental.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Visit Thrive Mental <ExternalLink size={18} />
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* QR Code */}
              <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="relative z-10 bg-card p-8 rounded-2xl shadow-elevated">
                  <p className="font-sans text-sm text-muted-foreground text-center mb-4 uppercase tracking-widest">
                    Scan to Visit
                  </p>
                  <img
                    src={thriveMTQR}
                    alt="Scan to visit Thrive Mental"
                    className="w-full max-w-sm mx-auto rounded-xl"
                  />
                  <p className="font-serif text-lg text-foreground text-center mt-4">
                    Thrive-Mental.com
                  </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-rose rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/30 rounded-full opacity-40 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Alignment */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
              The <span className="text-gradient-rose">Connection</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-12">
              Thrive Apparel Co. and Thrive Mental share a common mission: to normalize 
              conversations about mental health and provide tools for healing. While our 
              clothing carries messages that inspire, Thrive Mental provides the deeper 
              resources to support your journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Brain, 
                  title: "Mental Health Resources", 
                  desc: "Access articles, guides, and tools designed to support your mental wellness journey" 
                },
                { 
                  icon: Heart, 
                  title: "Community Support", 
                  desc: "Connect with others who understand the path of healing and growth" 
                },
                { 
                  icon: Sparkles, 
                  title: "Holistic Healing", 
                  desc: "Explore approaches that nurture mind, body, and spirit together" 
                },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-background rounded-lg shadow-soft">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rose rounded-full flex items-center justify-center">
                    <item.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Page Ad Section */}
      <section className="py-24 bg-gradient-rose text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest uppercase opacity-80 block mb-6">
              Exclusive Partnership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
              Healing Starts With a Single Step
            </h2>
            <p className="font-sans text-xl opacity-90 mb-12 leading-relaxed">
              Thrive Mental is your companion on the journey to mental wellness. 
              Whether you're seeking resources, community, or simply a space to breathe—
              we're here for you.
            </p>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-12 mb-12">
              <blockquote className="font-serif text-3xl md:text-4xl italic mb-6">
                "Your mental health is a priority. Your happiness is essential. 
                Your self-care is a necessity."
              </blockquote>
              <p className="font-sans text-sm opacity-80">— The Thrive Philosophy</p>
            </div>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans text-lg tracking-wide px-12 py-6"
              asChild
            >
              <a 
                href="https://Thrive-Mental.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                Explore Thrive Mental <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Wear Your Healing. <span className="text-gradient-rose">Live Your Healing.</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              Together, Thrive Apparel Co. and Thrive Mental create a complete ecosystem 
              for your journey. Wear the message. Live the mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans"
                asChild
              >
                <a href="/collections">Shop Thrive Apparel</a>
              </Button>
              <Button 
                variant="outline"
                className="font-sans border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
              <a 
                  href="https://Thrive-Mental.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Thrive Mental
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThriveMT;