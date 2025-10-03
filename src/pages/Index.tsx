import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground overflow-hidden">
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
    </div>
  );
};

export default Index;
