import { FaPhoneAlt } from "react-icons/fa";

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
          
          {/* Right side spacing (kept for layout balance) */}
          <div className="flex items-center">
            {/* Intentionally left empty for layout balance */}
          </div>
        </div>
      </div>
    </header>
  );
}
