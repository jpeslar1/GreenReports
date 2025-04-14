import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

// Custom NavLink component that handles both internal anchor links and page navigation
function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const [, setLocation] = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isAnchorLink = href.startsWith('/#');
    
    if (isAnchorLink) {
      e.preventDefault();
      
      // Handle anchor link
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      
      // First navigate to home page if needed
      if (window.location.pathname !== '/') {
        setLocation('/');
        // Give time for the home page to load before scrolling
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (targetElement) {
        // Already on home page, just scroll
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For non-anchor links, let the Link component handle it normally
  };
  
  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-2">
                <FaLeaf className="text-lg" />
              </div>
              <span className="font-montserrat font-bold text-xl text-primary">greenreports</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">HOME</NavLink>
            <NavLink href="/#about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">ABOUT US</NavLink>
            <NavLink href="/#services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">SERVICES</NavLink>
            <NavLink href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">BLOG</NavLink>
            <NavLink href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">CONTACT</NavLink>
            <NavLink href="/#contact">
              <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                GET STARTED
              </Button>
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <NavLink href="/" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">HOME</NavLink>
              <NavLink href="/#about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">ABOUT US</NavLink>
              <NavLink href="/#services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">SERVICES</NavLink>
              <NavLink href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">BLOG</NavLink>
              <NavLink href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">CONTACT</NavLink>
              <NavLink href="/#contact">
                <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 w-full">
                  GET STARTED
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
