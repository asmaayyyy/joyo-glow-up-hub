
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Coins, IndianRupee } from "lucide-react";

export function PriceListSection() {
  return (
    <section id="price-list" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-neon-yellow text-glow">Price</span> <span className="text-white">List</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Joyo live and poppo live coins price list
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex items-center p-4 bg-dark-light rounded-lg border border-neon-yellow/30 inline-flex">
              <div className="h-10 w-10 rounded-full bg-neon-yellow/20 flex items-center justify-center mr-4">
                <Phone className="text-neon-yellow" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Contact</p>
                <p className="text-lg font-medium">03287360655</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-dark-light border border-neon-yellow/30 p-8 rounded-xl hover:neon-border-yellow transition-all">
            <div className="grid grid-cols-2 gap-10">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <IndianRupee className="text-neon-yellow mr-2 h-8 w-8" />
                  <h3 className="text-2xl font-bold">Rupees</h3>
                </div>
                <div className="space-y-6 text-xl">
                  <p>500</p>
                  <p>1000</p>
                  <p>2000</p>
                  <p>3000</p>
                  <p>30000</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Coins className="text-neon-yellow mr-2 h-8 w-8" />
                  <h3 className="text-2xl font-bold">Coins</h3>
                </div>
                <div className="space-y-6 text-xl">
                  <p>16000</p>
                  <p>32000</p>
                  <p>64000</p>
                  <p>100,000</p>
                  <p>1 million</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <img 
                src="/lovable-uploads/6f4e6f8e-e775-4978-8e17-be690202a9e7.png" 
                alt="Joyo Poppo Price List" 
                className="max-w-full h-auto rounded-lg border-2 border-neon-yellow/30"
              />
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-neon-yellow hover:bg-neon-yellow/80 text-dark font-medium">
                Contact for Special Packages
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
