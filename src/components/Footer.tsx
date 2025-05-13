
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark-light pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-purple text-glow">
              Joyo <span className="text-neon-pink">Poppo</span>
            </h3>
            <p className="text-gray-400 mb-6">
              The premium platform for live streaming creators to monetize their talents and grow their audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-neon-purple hover:bg-neon-purple hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-neon-pink hover:bg-neon-pink hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-neon-orange hover:bg-neon-orange hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-neon-purple transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-neon-pink transition-colors">Features</a></li>
              <li><a href="#join" className="text-gray-400 hover:text-neon-blue transition-colors">Join Us</a></li>
              <li><Link to="/coin-seller" className="text-gray-400 hover:text-neon-green transition-colors">Coin Seller</Link></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-neon-green transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-neon-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center">
                <Phone size={16} className="mr-2 text-neon-purple" />
                <span>+92 300 1234567</span>
              </li>
              <li className="text-gray-400">info@joyopoppo.com</li>
              <li className="text-gray-400">Support: 24/7</li>
              <li className="mt-4">
                <Button 
                  variant="outline" 
                  className="border-neon-green bg-dark-lighter text-neon-green hover:bg-neon-green hover:text-white"
                  size="sm"
                >
                  <Phone size={16} className="mr-2" /> Contact Coin Seller
                </Button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Download App</h4>
            <p className="text-gray-400 mb-4">Get the Joyo Poppo app now and start earning!</p>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="border-neon-purple text-neon-purple justify-start hover:bg-neon-purple hover:text-white">
                App Store
              </Button>
              <Button variant="outline" className="border-neon-pink text-neon-pink justify-start hover:bg-neon-pink hover:text-white">
                Google Play
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Joyo Poppo. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
