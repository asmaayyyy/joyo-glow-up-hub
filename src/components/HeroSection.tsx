
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-16">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark to-dark-light z-0">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1557682250-f5333c76fc22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2029&q=80')" 
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Go Live.</span> 
            <span className="text-neon-pink text-glow block">Get Famous.</span> 
            <span className="text-neon-purple text-glow block">Earn Real Money.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Join Joyo Poppo and start your hosting journey today.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6 text-lg flex items-center gap-2 neon-glow">
              App Store
              <ArrowRight size={20} />
            </Button>
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-6 text-lg flex items-center gap-2 neon-glow-pink">
              Google Play
              <ArrowRight size={20} />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
            <span>Over 10,000 active streamers earning daily</span>
          </div>
        </div>
      </div>
      
      {/* Floating glowing elements for visual effect */}
      <div className="absolute bottom-16 right-40 w-20 h-20 rounded-full bg-neon-purple/20 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-neon-pink/20 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-neon-blue/20 blur-3xl"></div>
    </section>
  );
}
