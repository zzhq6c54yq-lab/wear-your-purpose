import { useState } from "react";
import { RefreshCw, Share2, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const affirmations = [
  { text: "I am worthy of love and healing", category: "Self-Worth" },
  { text: "My story is my strength", category: "Resilience" },
  { text: "Together we rise", category: "Unity" },
  { text: "Peace begins within me", category: "Inner Peace" },
  { text: "I break cycles, not hearts", category: "Healing" },
  { text: "My presence is a gift", category: "Self-Worth" },
  { text: "I choose healing over pain", category: "Growth" },
  { text: "I am the author of my story", category: "Empowerment" },
  { text: "Love flows through me freely", category: "Love" },
  { text: "I release what no longer serves me", category: "Letting Go" },
  { text: "My ancestors' dreams live through me", category: "Heritage" },
  { text: "I am becoming who I was meant to be", category: "Growth" },
  { text: "Vulnerability is my strength", category: "Courage" },
  { text: "I deserve joy without justification", category: "Self-Worth" },
  { text: "My healing inspires others to heal", category: "Community" },
  { text: "I am exactly where I need to be", category: "Presence" },
];

const categories = ["All", "Self-Worth", "Healing", "Unity", "Growth", "Love"];

const Affirmations = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [featured, setFeatured] = useState(affirmations[0]);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const filteredAffirmations = activeCategory === "All"
    ? affirmations
    : affirmations.filter(a => a.category === activeCategory);

  const getRandomAffirmation = () => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    setFeatured(random);
  };

  const toggleLike = (text: string) => {
    const newLiked = new Set(liked);
    if (newLiked.has(text)) {
      newLiked.delete(text);
    } else {
      newLiked.add(text);
    }
    setLiked(newLiked);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Words That Heal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Affirmation <span className="text-gradient-rose">Gallery</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore our collection of affirmations. Each one is designed to remind you of 
              your worth, your power, and your capacity for healing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Affirmation */}
      <section className="py-16 bg-gradient-rose text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="mx-auto mb-4" size={28} />
            <span className="font-sans text-sm font-medium tracking-widest uppercase opacity-80 block mb-6">
              Your Affirmation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              "{featured.text}"
            </h2>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={getRandomAffirmation}
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans"
              >
                <RefreshCw size={18} className="mr-2" /> New Affirmation
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans"
              >
                <Share2 size={18} className="mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
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

      {/* Affirmations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAffirmations.map((affirmation, i) => (
              <div 
                key={i}
                className="group bg-card rounded-lg p-8 shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
              >
                <span className="font-sans text-xs text-primary tracking-widest uppercase mb-4 block">
                  {affirmation.category}
                </span>
                <p className="font-serif text-2xl font-semibold text-foreground mb-6 leading-relaxed">
                  "{affirmation.text}"
                </p>
                <button
                  onClick={() => toggleLike(affirmation.text)}
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center transition-all ${
                    liked.has(affirmation.text)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-primary"
                  }`}
                  aria-label="Like affirmation"
                >
                  <Heart size={18} className={liked.has(affirmation.text) ? "fill-current" : ""} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practice */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Make Affirmations a <span className="text-gradient-rose">Daily Practice</span>
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              The more you speak these truths, the more you believe them. 
              Start each day with an affirmation that speaks to your soul.
            </p>
            <div className="bg-background rounded-lg p-8 shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">How to Practice:</h3>
              <ol className="font-sans text-muted-foreground text-left space-y-3">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-gradient-rose text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">1</span>
                  <span>Choose an affirmation that resonates with where you are today</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-gradient-rose text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">2</span>
                  <span>Speak it aloud, looking at yourself in the mirror</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-gradient-rose text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">3</span>
                  <span>Write it down in a journal or wear it on your clothing</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-gradient-rose text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">4</span>
                  <span>Return to it throughout the day when you need a reminder</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Affirmations;