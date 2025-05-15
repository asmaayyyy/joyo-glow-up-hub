
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Link, Database } from "lucide-react";

export function HostingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">
            Hosting <span className="text-neon-purple">Opportunities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join Joyo Poppo as a host and earn real money by streaming and creating content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Beginner Host */}
          <Card className="bg-white shadow-lg border-2 border-neon-purple/20 hover:border-neon-purple/50 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Beginner Host</h3>
              <p className="text-gray-600 mb-4">
                Perfect for those just starting their streaming journey
              </p>
              <ul className="text-left space-y-2 mb-6 w-full">
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Basic streaming tools</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Earn up to ₹5,000 monthly</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Starter bonuses</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-900">
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          {/* Professional Host */}
          <Card className="bg-white shadow-xl border-2 border-neon-purple relative mt-[-20px] md:mt-[-40px] z-10">
            <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2 flex justify-center">
              <span className="bg-neon-purple text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </span>
            </div>
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Professional Host</h3>
              <p className="text-gray-600 mb-4">
                For committed streamers looking to build a following
              </p>
              <ul className="text-left space-y-2 mb-6 w-full">
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Advanced streaming features</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Earn up to ₹20,000 monthly</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Personal account manager</span>
                </li>
              </ul>
              <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white">
                Start Now
              </Button>
            </CardContent>
          </Card>
          
          {/* Elite Host */}
          <Card className="bg-white shadow-lg border-2 border-neon-purple/20 hover:border-neon-purple/50 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Elite Host</h3>
              <p className="text-gray-600 mb-4">
                For established influencers wanting to maximize earnings
              </p>
              <ul className="text-left space-y-2 mb-6 w-full">
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Premium features & tools</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Earn ₹50,000+ monthly</span>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex-shrink-0 mr-2">
                    <span className="block w-2 h-2 rounded-full bg-neon-purple mx-auto mt-1"></span>
                  </span>
                  <span>Exclusive partnerships</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-900">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Ready to start your hosting journey? I can provide you with all the guidance and support you need to become a successful Joyo Poppo host. Join thousands of creators already earning with Joyo!
          </p>
          <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/80 text-white">
            Start Your Hosting Journey <Link className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
