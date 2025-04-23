
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Gift, Video, DollarSign, Users, UserPlus } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Video,
      title: "Start Live Streaming",
      description: "Create compelling content and engage with your audience in real-time.",
      color: "neon-purple"
    },
    {
      icon: DollarSign,
      title: "Post Ads",
      description: "Monetize your streams with in-app ads and sponsored content.",
      color: "neon-pink"
    },
    {
      icon: Gift,
      title: "Send & Receive Gifts",
      description: "Exchange virtual gifts that convert to real currency.",
      color: "neon-blue"
    },
    {
      icon: Users,
      title: "Join an Agency or Become a Host",
      description: "Take your career to the next level with professional support.",
      color: "neon-green"
    },
    {
      icon: UserPlus,
      title: "Earn in PKR & USD",
      description: "Get paid in multiple currencies directly to your account.",
      color: "neon-orange"
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark-lighter">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-neon-purple text-neon-purple">
            Simple Process
          </Badge>
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to start earning with Joyo Poppo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const colorClass = `text-${step.color}`;
            const borderClass = `neon-border-${step.color.split('-')[1]}`;
            
            return (
              <div key={index} className={`bg-dark p-6 rounded-xl relative group ${borderClass}`}>
                <div className={`w-16 h-16 rounded-full bg-dark-lighter flex items-center justify-center mb-6 ${colorClass}`}>
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                
                <div className="absolute top-4 right-4">
                  <Badge className={`bg-${step.color} text-white`}>Step {index + 1}</Badge>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-gray-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
