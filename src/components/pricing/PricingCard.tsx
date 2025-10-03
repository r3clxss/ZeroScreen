import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  featured = false,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative group h-full",
        featured && "animate-float"
      )}
    >
      {/* Glow effect for featured card */}
      {featured && (
        <div className="absolute -inset-0.5 bg-gradient-neon rounded-2xl opacity-75 blur-xl animate-glow-pulse" />
      )}
      
      {/* Card */}
      <div
        className={cn(
          "relative h-full backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300",
          "hover:scale-105 hover:shadow-glow-primary",
          featured
            ? "bg-gradient-card border-primary/50 shadow-glow-featured"
            : "bg-glass-bg border-glass-border"
        )}
        style={{
          background: featured
            ? "linear-gradient(135deg, hsl(230 40% 12% / 0.6) 0%, hsl(250 35% 15% / 0.4) 100%)"
            : "linear-gradient(135deg, hsl(230 40% 12% / 0.3) 0%, hsl(250 35% 15% / 0.2) 100%)",
        }}
      >
        {featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-neon rounded-full text-sm font-semibold text-background">
            {description}
          </div>
        )}

        <div className="space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            {!featured && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline">
            <span className="text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              {price}
            </span>
            <span className="text-muted-foreground ml-2">{period}</span>
          </div>

          {/* Features */}
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className={cn(
                  "w-5 h-5 mt-0.5 shrink-0",
                  featured ? "text-primary" : "text-secondary"
                )} />
                <span className="text-sm text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            className={cn(
              "w-full font-semibold transition-all duration-300",
              featured
                ? "bg-gradient-neon text-background hover:shadow-glow-primary"
                : "bg-card border border-border hover:bg-accent hover:shadow-glow-secondary"
            )}
            size="lg"
          >
            {price === "Anpassat" ? "Kontakta försäljning" : "Kom igång"}
          </Button>
        </div>
      </div>
    </div>
  );
};
