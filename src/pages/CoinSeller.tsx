
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CoinSeller() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
      
      {/* Services Section */}
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
      
      {/* Contact Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-dark-lighter p-8 md:p-12 rounded-2xl border border-neon-purple/30">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-400">
                Get in touch for the best coin packages and agency/host services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-dark-light rounded-lg border border-gray-800">
                <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center mr-4">
                  <Phone className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone Number</p>
                  <p className="text-lg font-medium">+92 300 1234567</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-dark-light rounded-lg border border-gray-800">
                <div className="h-12 w-12 rounded-full bg-neon-pink/20 flex items-center justify-center mr-4">
                  <Mail className="text-neon-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">coinseller@joyopoppo.com</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Button className="flex-1 bg-neon-purple hover:bg-neon-purple/80 text-white py-6">
                  WhatsApp Us
                </Button>
                <Button className="flex-1 bg-dark-light border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white py-6">
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-t from-dark to-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why <span className="text-neon-green">Choose Us</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The most reliable coin seller for Joyo Poppo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
              <div className="h-14 w-14 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4">
                <div className="h-8 w-8 rounded-full bg-neon-purple text-white flex items-center justify-center">
                  <span className="text-xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-400">Instant coin delivery after payment confirmation</p>
            </div>
            
            <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
              <div className="h-14 w-14 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4">
                <div className="h-8 w-8 rounded-full bg-neon-pink text-white flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Best Rates</h3>
              <p className="text-gray-400">Competitive prices for all coin packages</p>
            </div>
            
            <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
              <div className="h-14 w-14 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4">
                <div className="h-8 w-8 rounded-full bg-neon-blue text-white flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">Always available to assist with your needs</p>
            </div>
            
            <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
              <div className="h-14 w-14 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                <div className="h-8 w-8 rounded-full bg-neon-green text-white flex items-center justify-center">
                  <span className="text-xl font-bold">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Seller</h3>
              <p className="text-gray-400">Officially recognized Joyo Poppo coin seller</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
