
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="pt-24 pb-16 bg-white shadow-sm">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2c3e50]">
          Hira - Joyo Coins Seller
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
          Available on the Play Store - Buy Coins & Become a Host Today!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#1a73e8] hover:bg-[#1a73e8]/90 text-white">
            Buy Coins Now <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8]/10">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
