
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">
            Contact <span className="text-neon-purple">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for the best coin packages and special offers
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border-2 border-neon-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-neon-purple" />
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">Phone</h3>
              <p className="text-gray-700">03287360655</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-neon-pink/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-neon-pink" />
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">Email</h3>
              <p className="text-gray-700">hira@joyocoins.com</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Instagram className="text-neon-purple" />
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">Instagram</h3>
              <p className="text-gray-700">@hira_joyocoins</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
              WhatsApp Me
            </Button>
            <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white">
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
