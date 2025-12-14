import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import thriveLogo from "@/assets/thrive-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={thriveLogo}
                alt="Thrive Apparel Co."
                className="h-12 w-12 rounded-full object-cover shadow-soft"
              />
              <span className="font-serif text-lg font-semibold text-foreground">
                Thrive Apparel Co.
              </span>
            </div>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Clothing with purpose. Wear your affirmations. Heal through fashion.
              Join the movement towards unity, peace, and generational healing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Collections", "Affirmations", "Community"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Support
            </h4>
            <ul className="space-y-3">
              {["Contact Us", "Shipping Info", "Returns", "Size Guide", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Stay Connected
            </h4>
            <p className="text-muted-foreground font-sans text-sm">
              Join our community and receive exclusive updates, affirmations, and
              early access to new collections.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background border-border font-sans text-sm"
              />
              <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity shrink-0">
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-sans text-sm">
            © 2024 Thrive Apparel Co. All rights reserved.
          </p>
          <p className="text-muted-foreground font-sans text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> for
            healing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;