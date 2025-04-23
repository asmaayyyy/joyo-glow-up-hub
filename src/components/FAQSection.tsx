
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function FAQSection() {
  const faqs = [
    {
      question: "How do I earn money on Joyo Poppo?",
      answer: "You can earn through multiple streams: virtual gifts from viewers during live streams, ad revenue sharing, sponsored content opportunities, and through agency commissions if you manage other hosts."
    },
    {
      question: "What's the gift system?",
      answer: "Viewers can send you virtual gifts during your live streams, which convert to real currency in your account. Different gifts have different values, and you can cash them out during payment cycles."
    },
    {
      question: "How do I cash out my earnings?",
      answer: "Joyo Poppo offers multiple withdrawal options including bank transfers, mobile wallets, and international payment services. Payments are processed twice a month with minimal fees."
    },
    {
      question: "What's the difference between being a host and joining an agency?",
      answer: "As a host, you create content independently. When you join an agency, you get management support, coaching, and promotional help in exchange for a commission on your earnings."
    },
    {
      question: "Is there a minimum payout threshold?",
      answer: "Yes, the minimum withdrawal is ₨5,000 for PKR or $50 for USD accounts. Earnings below this amount will roll over to the next payment cycle."
    },
    {
      question: "What equipment do I need to start streaming?",
      answer: "At minimum, you need a smartphone with a good camera and stable internet connection. For professional streams, we recommend additional lighting, a quality microphone, and a dedicated streaming device."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dark-lighter">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-neon-orange text-neon-orange">
            Got Questions?
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about the platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className="text-left hover:text-neon-purple transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
