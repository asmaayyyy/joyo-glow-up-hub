
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, UserPlus } from "lucide-react";

export function JoinSection() {
  return (
    <section id="join" className="py-20 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join as an Agency or Host</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the path that best suits your goals and start earning today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Agency Card */}
          <Card className="bg-dark-lighter border border-neon-purple/30 p-8 rounded-xl hover:neon-border-purple transition-all">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue mx-auto flex items-center justify-center mb-4 neon-glow">
                <Users size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Start Your Agency</h3>
              <p className="text-gray-400">
                Build your own team of hosts and earn a percentage of their income
              </p>
            </div>
            
            <ul className="mb-8">
              <li className="mb-3 flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Manage multiple hosts</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Agency dashboard access</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Enhanced revenue sharing</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-purple"></span>
                </span>
                <span className="text-gray-300">Priority support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white py-6 neon-glow">
              Start Your Agency
            </Button>
          </Card>
          
          {/* Host Card */}
          <Card className="bg-dark-lighter border border-neon-pink/30 p-8 rounded-xl hover:neon-border-pink transition-all">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-pink to-neon-orange mx-auto flex items-center justify-center mb-4 neon-glow-pink">
                <UserPlus size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Apply as a Host</h3>
              <p className="text-gray-400">
                Create your content and build your personal brand and audience
              </p>
            </div>
            
            <ul className="mb-8">
              <li className="mb-3 flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Full streaming features</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Gift revenue system</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Personal profile customization</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 rounded-full bg-neon-pink"></span>
                </span>
                <span className="text-gray-300">Audience analytics</span>
              </li>
            </ul>
            
            <Button className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white py-6 neon-glow-pink">
              Apply as a Host
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
