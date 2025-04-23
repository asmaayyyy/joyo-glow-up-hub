
import { Badge } from "@/components/ui/badge";
import { 
  Quote,
} from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha K.",
      role: "Top Host",
      quote: "After 3 months on Joyo Poppo, I'm earning more than my previous full-time job. The gift system is incredibly lucrative!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      color: "neon-purple",
      earnings: "₨120,000/month"
    },
    {
      name: "Ahmed J.",
      role: "Agency Owner",
      quote: "Managing 20+ hosts through the platform has been seamless. The dashboard gives me all the analytics I need to help my team succeed.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      color: "neon-pink",
      earnings: "$2,500/month"
    },
    {
      name: "Sana T.",
      role: "Lifestyle Host",
      quote: "The dual currency support lets me work with international brands while still connecting with my local audience. Game-changer!",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      color: "neon-blue",
      earnings: "₨85,000/month"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-neon-green text-neon-green">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-4">User Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from creators who are already thriving on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colorClass = `text-${testimonial.color}`;
            const borderColorClass = `border-${testimonial.color}`;
            const glowClass = `neon-glow-${testimonial.color.split('-')[1]}`;
            
            return (
              <div key={index} className={`bg-dark-lighter border border-gray-800 p-8 rounded-xl hover:${borderColorClass} transition-all group relative`}>
                <div className={`${colorClass} mb-6`}>
                  <Quote size={32} />
                </div>
                
                <p className="text-gray-300 mb-8 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6">
                  <Badge className={`bg-${testimonial.color} text-white`}>
                    {testimonial.earnings}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
