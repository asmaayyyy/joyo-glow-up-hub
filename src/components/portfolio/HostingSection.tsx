
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export function HostingSection() {
  return (
    <section className="py-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1a73e8]">
          Become a Host on Joyo App
        </h2>
      </div>
      
      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Join the Joyo App as a host and unlock the opportunity to earn from your talent. 
          If you love performing, chatting, or engaging with an audience, this is for you!
        </p>
        
        <ul className="space-y-2 list-disc pl-6 mb-6">
          <li>Start your own live shows and gain followers.</li>
          <li>Earn coins from fans and convert them into money.</li>
          <li>Get onboarding support and guidance from the Joyo team.</li>
          <li>Work from home with a flexible schedule.</li>
          <li>Grow your online presence and become a star!</li>
        </ul>
        
        <p className="font-bold mb-6">
          Contact Hira to get started as a host on the Joyo App today!
        </p>
        
        <div className="flex justify-center">
          <Button size="lg" className="bg-[#1a73e8] hover:bg-[#1a73e8]/90 text-white">
            Start Your Hosting Journey <Link className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
