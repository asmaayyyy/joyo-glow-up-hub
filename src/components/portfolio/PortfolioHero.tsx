
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/coin-bg.svg')] opacity-5 bg-repeat"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">
              Hira's <span className="text-neon-purple">Joyo Coin</span> Store
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-8">
              Official seller of Joyo Poppo coins at the best rates. Fast delivery and secure transactions guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                Get Coins Now <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative p-1 bg-white rounded-xl shadow-lg border-2 border-neon-purple/20">
              <img 
                src="/lovable-uploads/6f4e6f8e-e775-4978-8e17-be690202a9e7.png" 
                alt="Joyo Coins" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
