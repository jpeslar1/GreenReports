import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

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
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">HOME</Link>
            <Link href="/#about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">ABOUT US</Link>
            <Link href="/#services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">SERVICES</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">BLOG</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">CONTACT</Link>
            <Link href="/#contact">
              <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                GET STARTED
              </Button>
            </Link>
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
              <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">HOME</Link>
              <Link href="/#about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">ABOUT US</Link>
              <Link href="/#services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">SERVICES</Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">BLOG</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2">CONTACT</Link>
              <Link href="/#contact">
                <Button className="bg-[#99CC33] hover:bg-[#88bb22] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 w-full">
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
