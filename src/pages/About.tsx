import { Heart, Users, Leaf, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import thriveLogo from "@/assets/thrive-logo.jpeg";

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
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Born From <span className="text-gradient-rose">Purpose</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Thrive Apparel Co. was created with a singular mission: to help people wear 
              their healing journey on their sleeves—literally.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={thriveLogo}
                alt="Thrive Apparel Co. Story"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            <div className="space-y-6">
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

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Our Core <span className="text-gradient-rose">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8 bg-background rounded-lg shadow-soft hover:shadow-elevated transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rose rounded-full flex items-center justify-center">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-24 bg-gradient-rose text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8">
              Our Promise to You
            </h2>
            <p className="font-sans text-lg leading-relaxed opacity-90">
              Every piece you purchase supports a mission bigger than fashion. We're committed 
              to creating clothing that inspires, heals, and unites. When you wear Thrive, 
              you're not just wearing a brand—you're wearing a declaration. A declaration that 
              you believe in healing, in unity, in breaking cycles that no longer serve us.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
                Beyond the <span className="text-gradient-rose">Clothing</span>
              </h2>
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
                Our commitment extends beyond creating beautiful apparel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "100%", label: "Purpose-Driven Designs" },
                { number: "∞", label: "Affirmations Shared" },
                { number: "1", label: "Community, One Love" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-card rounded-lg shadow-soft">
                  <div className="font-serif text-4xl font-bold text-gradient-rose mb-2">{stat.number}</div>
                  <div className="font-sans text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;