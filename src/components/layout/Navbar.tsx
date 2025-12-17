import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import thriveLogo from "@/assets/thrive-logo.jpeg";
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
  const location = useLocation();
  const { wishlistCount } = useWishlist();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img
              src={thriveLogo}
              alt="Thrive Apparel Co."
              className="h-14 w-auto sm:h-16 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Wishlist & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/wishlist"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans text-sm tracking-wide">
              Join the Movement
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
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-base font-medium tracking-wide transition-colors hover:text-primary py-2 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-gradient-rose text-primary-foreground hover:opacity-90 transition-opacity font-sans text-sm tracking-wide mt-4 w-full">
                Join the Movement
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;