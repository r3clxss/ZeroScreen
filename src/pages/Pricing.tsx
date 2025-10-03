import { Navigation } from "@/components/Navigation";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { AIRecommendation } from "@/components/pricing/AIRecommendation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground overflow-hidden">
      <Navigation />
      <div className="pt-16">
        <PricingHero />
        <PricingCards />
        <AIRecommendation />
        <ComparisonTable />
        
        {/* CTA Section */}
        <section className="relative px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Starta din gratisperiod
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Prova valfri plan gratis i 7 dagar. Ingen kreditkortsinformation krävs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                  <Button size="lg" className="bg-gradient-neon text-background hover:shadow-glow-primary">
                  Starta gratisperiod
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Tillbaka till startsidan
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 px-4 py-12">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground">
            <p>Behöver du hjälp att välja? Kontakta oss på support@zeroscreen.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Pricing;
