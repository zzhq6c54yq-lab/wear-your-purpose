import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import thriveIcon from "@/assets/thrive-icon-bronze.png";
import { useWishlist } from "@/contexts/WishlistContext";
import ScrollProgress from "@/components/ScrollProgress";

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
    <>
      <ScrollProgress />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "glass-premium py-2" 
          : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Rose Gold Theme with Premium Animation */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute -inset-3 bg-rose-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow" />
                <div className={`relative transition-transform duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                  <img
                    src={thriveIcon}
                    alt="Thrive"
                    className="relative h-14 w-14 object-contain drop-shadow-lg group-hover:animate-pulse-glow transition-all duration-300"
                    style={{ filter: "sepia(20%) saturate(150%) hue-rotate(-10deg)" }}
                  />
                </div>
              </div>
              <div className="hidden sm:block overflow-hidden">
                <span className="font-serif text-2xl font-semibold text-foreground tracking-wide block transform transition-all duration-300 group-hover:text-gradient-rose">
                  THRIVE
                </span>
                <span className="font-sans text-[10px] tracking-luxury text-rose-gold block -mt-1 transform transition-all duration-500 group-hover:tracking-ultra">
                  APPAREL CO.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Premium Hover Effects */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, i) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-sans text-xs font-medium tracking-luxury uppercase transition-all duration-300 group ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Gold underline animation */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-rose-gold to-gold transition-all duration-500 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Wishlist & CTA with Enhanced Animations */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/wishlist"
                className="relative p-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <Heart 
                  size={22} 
                  strokeWidth={1.5} 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-rose-gold text-primary-foreground text-[10px] font-medium rounded-full flex items-center justify-center animate-scale-in shadow-rose">
                    {wishlistCount}
                  </span>
                )}
                {/* Hover glow */}
                <span className="absolute inset-0 bg-rose-gold/10 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </Link>
              <Button 
                className="btn-magnetic bg-gradient-rose-gold text-primary-foreground hover:opacity-90 transition-all font-sans text-xs tracking-luxury uppercase px-8 py-6 rounded-none shadow-rose hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag size={14} />
                  Join Us
                </span>
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </div>

            {/* Mobile Menu Toggle with Animation */}
            <button
              className="lg:hidden p-2 text-foreground relative group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-rose-gold/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              {isOpen ? (
                <X size={24} className="relative z-10 transition-transform duration-300 rotate-0" />
              ) : (
                <Menu size={24} className="relative z-10 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation with Staggered Animation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-8 border-t border-primary/10 glass-premium">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-sm font-medium tracking-luxury uppercase transition-all duration-300 transform ${
                      isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    } ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:translate-x-2"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Link
                    to="/wishlist"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Heart size={18} />
                    <span className="font-sans text-sm">Wishlist ({wishlistCount})</span>
                  </Link>
                </div>
                <Button className="bg-gradient-rose-gold text-primary-foreground font-sans text-xs tracking-luxury uppercase py-6 rounded-none w-full mt-2 shadow-rose">
                  <ShoppingBag size={14} className="mr-2" />
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
