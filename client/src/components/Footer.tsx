import { Link } from "wouter";
import { 
  FaLeaf, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-2">
                <FaLeaf className="text-lg" />
              </div>
              <span className="text-white font-montserrat font-bold text-xl">greenreports</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Helping companies build a more sustainable future through digital reporting solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-[#99CC33]" />
                <span className="text-gray-400">123 Orchard Road, #10-01, Singapore 238865</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#99CC33]" />
                <span className="text-gray-400">+65 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#99CC33]" />
                <span className="text-gray-400">info@greenreports.sg</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright {currentYear}, A division of Interactive Networks. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Help</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
