
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PriceSection } from "@/components/portfolio/PriceSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { HostingSection } from "@/components/portfolio/HostingSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function CoinPortfolio() {
  return (
    <div className="bg-white text-dark min-h-screen">
      <Header />
      <PortfolioHero />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md mb-12 p-8">
          <PriceSection />
        </div>
        
        <div className="bg-white rounded-xl shadow-md mb-12 p-8">
          <HostingSection />
        </div>
        
        <div className="bg-white rounded-xl shadow-md mb-12 p-8">
          <AboutSection />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
