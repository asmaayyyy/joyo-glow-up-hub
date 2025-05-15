
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-neon-pink">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide premium services for Joyo Poppo users, agencies, and hosts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coin Packages */}
          <Card className="bg-dark-light border border-neon-purple/30 p-8 rounded-xl hover:neon-border-purple transition-all">
            <div className="h-16 w-16 rounded-full bg-neon-purple/20 flex items-center justify-center mb-6 mx-auto">
              <div className="h-10 w-10 rounded-full bg-neon-purple text-white flex items-center justify-center">
                <span className="text-xl font-bold">₹</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Coin Packages</h3>
            <p className="text-gray-400 mb-6 text-center">
              Best rates for all coin packages with instant delivery
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Small Packages (1,000 - 5,000)</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Medium Packages (5,000 - 20,000)</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Bulk Packages (20,000+)</span>
              </li>
            </ul>
            <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white py-6">
              Get Coin Package
            </Button>
          </Card>
          
          {/* Agency Support */}
          <Card className="bg-dark-light border border-neon-pink/30 p-8 rounded-xl hover:neon-border-pink transition-all">
            <div className="h-16 w-16 rounded-full bg-neon-pink/20 flex items-center justify-center mb-6 mx-auto">
              <div className="h-10 w-10 rounded-full bg-neon-pink text-white flex items-center justify-center">
                <span className="text-xl font-bold">A</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Agency Support</h3>
            <p className="text-gray-400 mb-6 text-center">
              Complete agency setup and management support
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Agency Registration</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Host Recruitment</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Revenue Optimization</span>
              </li>
            </ul>
            <Button className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white py-6">
              Agency Services
            </Button>
          </Card>
          
          {/* Host Support */}
          <Card className="bg-dark-light border border-neon-blue/30 p-8 rounded-xl hover:neon-border-blue transition-all">
            <div className="h-16 w-16 rounded-full bg-neon-blue/20 flex items-center justify-center mb-6 mx-auto">
              <div className="h-10 w-10 rounded-full bg-neon-blue text-white flex items-center justify-center">
                <span className="text-xl font-bold">H</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Host Support</h3>
            <p className="text-gray-400 mb-6 text-center">
              Complete guidance for new and existing hosts
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                </span>
                <span className="text-gray-300">Host Registration</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                </span>
                <span className="text-gray-300">Content Strategy</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                </span>
                <span className="text-gray-300">Earnings Maximization</span>
              </li>
            </ul>
            <Button className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white py-6">
              Host Services
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
