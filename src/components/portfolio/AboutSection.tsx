
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">
            About <span className="text-neon-purple">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted Joyo Poppo coin seller
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-lg border-2 border-neon-purple/20 p-8">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Hi, I'm Hira! I am an official coin seller for the Joyo Poppo app, which is available on the Play Store.
                I provide fast and reliable service to all my customers, ensuring they get their coins quickly and securely.
              </p>
              
              <p className="mb-4">
                With years of experience in the digital currency market, I understand the importance of trust and reliability.
                My customers know they can count on me for the best rates and exceptional service.
              </p>
              
              <h3 className="text-xl font-bold text-purple-900 mt-6 mb-4">Why Choose My Services:</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Instant delivery after payment confirmation</li>
                <li>Competitive rates guaranteed</li>
                <li>100% secure transactions</li>
                <li>24/7 customer support</li>
                <li>Special discounts for regular customers</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
