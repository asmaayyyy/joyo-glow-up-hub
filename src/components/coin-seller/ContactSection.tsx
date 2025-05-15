
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
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
  );
}
