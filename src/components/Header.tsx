import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import cocLogo from "@/assets/coc-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={cocLogo} 
              alt="COC Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;