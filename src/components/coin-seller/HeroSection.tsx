
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/coin-bg.svg')] opacity-10 bg-repeat"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Badge variant="outline" className="mb-4 border-neon-orange text-neon-orange">
          Official Joyo Poppo Coin Seller
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-neon-purple text-glow">Premium Coins</span> for 
          <span className="text-neon-pink text-glow"> Joyo Poppo</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Get the best rates for Joyo Poppo coins. Official supplier for agencies and hosts.
          Fast delivery and secure transactions guaranteed.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/80 text-white neon-glow">
            Contact Now <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white">
            Agency Services
          </Button>
        </div>
      </div>
    </section>
  );
}
