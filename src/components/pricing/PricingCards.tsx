import { PricingCard } from "./PricingCard";
import { Check } from "lucide-react";

export const pricingPlans = [
  {
    name: "Basic",
    price: "Gratis",
    period: "",
    description: "Perfekt för att komma igång",
    features: [
      "1 enhet",
      "Grundläggande blockering",
      "Statistik & aviseringar",
      "Community-support",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "För avancerade användare",
    features: [
      "Obegränsat antal enheter",
      "AI-driven blockering",
      "Mjuk & hård blockering",
      "Prioriterad support",
      "Avancerad analys",
      "Anpassade scheman",
    ],
    featured: false,
  },
  {
    name: "Family Bundle",
    price: "$24.99",
    period: "/month",
    description: "Populärast",
    features: [
      "Upp till 5 användare",
      "Föräldra-/adminpanel",
      "Gruppofflineperioder",
      "Belöningssystem",
      "Familjeöversiktsdashboard",
      "Prioriterad support",
      "Alla Premium-funktioner",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "Anpassat",
    period: "",
    description: "För team och organisationer",
    features: [
      "Anpassat antal enheter",
      "Företagsdashboard",
      "Integrationer (Teams, Slack)",
      "SLA-stödd support",
      "Avancerad rapportering",
      "Dedikerad kontoansvarig",
      "Anpassad distribution",
    ],
    featured: false,
  },
];

export const PricingCards = () => {
  return (
    <section className="relative px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
