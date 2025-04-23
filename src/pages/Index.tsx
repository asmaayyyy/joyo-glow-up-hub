
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { JoinSection } from "@/components/JoinSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <JoinSection />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
