import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Heart, ArrowUp, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import thriveLogo from "@/assets/thrive-logo.jpeg";
import lifestyle8 from "@/assets/community/lifestyle-8.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={lifestyle8} 
          alt="Community"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/90" />
      </div>

      {/* Gold gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-rose-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={thriveLogo}
                  alt="Thrive Apparel Co."
                  className="relative h-14 w-14 rounded-full object-cover shadow-soft group-hover:shadow-rose transition-shadow duration-300"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold text-foreground block">
                  Thrive Apparel Co.
                </span>
                <span className="font-sans text-[10px] tracking-luxury text-rose-gold">
                  WEAR YOUR HEALING
                </span>
              </div>
            </div>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Clothing with purpose. Wear your affirmations. Heal through fashion.
              Join the movement towards unity, peace, and generational healing.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="relative p-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-rose-gold/10 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-foreground flex items-center gap-2">
              <Sparkles size={16} className="text-rose-gold" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Collections", "Affirmations", "Community"].map(
                (link, i) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 font-sans text-sm group flex items-center gap-2"
                    >
                      <span className="w-0 h-px bg-rose-gold group-hover:w-4 transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-foreground flex items-center gap-2">
              <Heart size={16} className="text-rose-gold" />
              Support
            </h4>
            <ul className="space-y-3">
              {["Contact Us", "Shipping Info", "Returns", "Size Guide", "FAQ"].map(
                (link, i) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 font-sans text-sm group flex items-center gap-2"
                    >
                      <span className="w-0 h-px bg-rose-gold group-hover:w-4 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-foreground flex items-center gap-2">
              <Mail size={16} className="text-rose-gold" />
              Stay Connected
            </h4>
            <p className="text-muted-foreground font-sans text-sm">
              Join our community and receive exclusive updates, affirmations, and
              early access to new collections.
            </p>
            <div className="space-y-3">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/50 border-border font-sans text-sm pr-12 focus:border-rose-gold transition-colors duration-300"
                />
                <Button 
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-opacity h-8 w-8 p-0 rounded-sm"
                >
                  <Mail size={14} />
                </Button>
              </div>
              <p className="font-sans text-xs text-muted-foreground/70">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-sans text-sm">
            © 2024 Thrive Apparel Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-muted-foreground font-sans text-sm flex items-center gap-2">
              Made with 
              <Heart size={14} className="text-rose-gold fill-rose-gold animate-pulse" /> 
              for healing
            </p>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-rose-gold/10 hover:bg-rose-gold/20 text-rose-gold rounded-full transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
