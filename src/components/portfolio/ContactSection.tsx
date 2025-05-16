
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a73e8]">
          Contact Me
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch for the best coin packages and special offers
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="h-12 w-12 rounded-full bg-[#1a73e8]/20 flex items-center justify-center mx-auto mb-4">
            <Phone className="text-[#1a73e8]" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-700">03287360655</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="h-12 w-12 rounded-full bg-[#1a73e8]/20 flex items-center justify-center mx-auto mb-4">
            <Mail className="text-[#1a73e8]" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-700">hira@joyocoins.com</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="h-12 w-12 rounded-full bg-[#1a73e8]/20 flex items-center justify-center mx-auto mb-4">
            <Instagram className="text-[#1a73e8]" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Instagram</h3>
          <p className="text-gray-700">@hira_joyocoins</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-[#1a73e8] hover:bg-[#1a73e8]/90 text-white">
          WhatsApp Me
        </Button>
        <Button variant="outline" className="border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8]/10">
          Send Email
        </Button>
      </div>
    </section>
  );
}
