
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PriceSection } from "@/components/portfolio/PriceSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function CoinPortfolio() {
  return (
    <div className="bg-white text-dark min-h-screen">
      <Header />
      <PortfolioHero />
      <PriceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
