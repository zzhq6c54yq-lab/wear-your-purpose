import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import thriveIcon from "@/assets/thrive-icon-bronze.png";
import { useWishlist } from "@/contexts/WishlistContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Collections", path: "/collections" },
  { name: "Affirmations", path: "/affirmations" },
  { name: "Community", path: "/community" },
  { name: "Thrive MT", path: "/thrive-mt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={thriveIcon}
                alt="Thrive"
                className="relative h-12 w-12 object-contain drop-shadow-lg"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-2xl font-semibold text-foreground tracking-wide">
                THRIVE
              </span>
              <span className="font-sans text-[10px] tracking-luxury text-primary block -mt-1">
                APPAREL CO.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-xs font-medium tracking-luxury uppercase transition-colors luxury-link ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Wishlist & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/wishlist"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs tracking-luxury uppercase px-8 py-6 rounded-none shadow-gold">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-8 border-t border-primary/10 animate-fade-in bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm font-medium tracking-luxury uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link
                  to="/wishlist"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Heart size={18} />
                  <span className="font-sans text-sm">Wishlist ({wishlistCount})</span>
                </Link>
              </div>
              <Button className="bg-gradient-gold text-primary-foreground font-sans text-xs tracking-luxury uppercase py-6 rounded-none w-full mt-2">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
