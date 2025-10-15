import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { WhatIsAK } from "./components/WhatIsAK";
import { OriginsSection } from "./components/OriginsSection";
import { VariantsSection } from "./components/VariantsSection";
import { TechnicalOverview } from "./components/TechnicalOverview";
import { GlobalImpact } from "./components/GlobalImpact";
import { FactsSection } from "./components/FactsSection";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <HeroSection />
      <WhatIsAK />
      <OriginsSection />
      <VariantsSection />
      <TechnicalOverview />
      <GlobalImpact />
      <FactsSection />
      <Footer />
    </div>
  );
}
