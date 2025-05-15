
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/coin-seller/HeroSection";
import { PriceListSection } from "@/components/coin-seller/PriceListSection";
import { ServicesSection } from "@/components/coin-seller/ServicesSection";
import { ContactSection } from "@/components/coin-seller/ContactSection";
import { WhyChooseUsSection } from "@/components/coin-seller/WhyChooseUsSection";

export default function CoinSeller() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Header />
      <HeroSection />
      <PriceListSection />
      <ServicesSection />
      <ContactSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
}
