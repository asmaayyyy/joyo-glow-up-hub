
import { Badge } from "@/components/ui/badge";
import { 
  Gift, DollarSign, Image, Users, Calendar, Shield
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Gift,
      title: "Gift Sending",
      description: "Send and receive virtual gifts that convert to real money. Choose from hundreds of animated options.",
      color: "neon-purple"
    },
    {
      icon: DollarSign,
      title: "Dual Currency Support",
      description: "Earn and withdraw in both PKR & USD. Perfect for local and international creators.",
      color: "neon-pink"
    },
    {
      icon: Image,
      title: "Ads Posting",
      description: "Monetize your audience with targeted in-app advertisements and sponsored content.",
      color: "neon-blue"
    },
    {
      icon: Users,
      title: "Hosting & Agency Management",
      description: "Join or create your own agency. Manage your team of hosts and maximize earnings.",
      color: "neon-green"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Fast, reliable payment system with multiple withdrawal options and minimal fees.",
      color: "neon-orange"
    },
    {
      icon: Calendar,
      title: "Scheduled Streams",
      description: "Plan your content calendar and notify fans about upcoming live sessions.",
      color: "neon-yellow"
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-neon-pink text-neon-pink">
            What We Offer
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover all the tools you need to create, grow and monetize your content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClass = `text-${feature.color}`;
            const borderColorClass = `border-${feature.color}`;
            const glowClass = `neon-glow-${feature.color.split('-')[1]}`;
            
            return (
              <div key={index} className={`border bg-dark-lighter border-gray-800 p-8 rounded-xl hover:${borderColorClass} transition-all group hover:${glowClass}`}>
                <div className={`w-14 h-14 rounded-full bg-dark flex items-center justify-center mb-6 ${colorClass}`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
