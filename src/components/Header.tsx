
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-lighter bg-opacity-90 backdrop-blur-md z-50 border-b border-neon-purple/30">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-neon-purple text-glow">
            Joyo <span className="text-neon-pink">Poppo</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-white hover:text-neon-purple transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-white hover:text-neon-pink transition-colors">
            Features
          </a>
          <a href="#join" className="text-white hover:text-neon-blue transition-colors">
            Join Us
          </a>
          <a href="#testimonials" className="text-white hover:text-neon-green transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-white hover:text-neon-orange transition-colors">
            FAQ
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline"
            onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
            className="border-neon-blue hover:border-neon-blue/80 text-neon-blue hover:text-neon-blue/80"
          >
            {language === 'en' ? 'اردو' : 'English'}
          </Button>
          <Button 
            className="bg-neon-purple hover:bg-neon-purple/80 text-white"
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
}
