import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Top contact bar */}
          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+6512345678" className="flex items-center">
              <FaPhoneAlt className="mr-2 text-primary" /> +65 1234 5678
            </a>
            <span>100+ clients have been served today</span>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a href="#" className="text-primary hover:text-primary/80" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="text-primary hover:text-primary/80" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-primary hover:text-primary/80" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-primary hover:text-primary/80" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
