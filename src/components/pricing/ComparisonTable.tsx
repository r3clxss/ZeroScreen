import { Check, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  { name: "Devices", basic: "1", premium: "Unlimited", family: "5 users", business: "Custom" },
  { name: "AI-Driven Blocking", basic: false, premium: true, family: true, business: true },
  { name: "Soft & Hard Lock", basic: false, premium: true, family: true, business: true },
  { name: "Statistics & Notifications", basic: true, premium: true, family: true, business: true },
  { name: "Priority Support", basic: false, premium: true, family: true, business: true },
  { name: "Parent/Admin Panel", basic: false, premium: false, family: true, business: true },
  { name: "Reward System", basic: false, premium: false, family: true, business: true },
  { name: "Business Dashboard", basic: false, premium: false, family: false, business: true },
  { name: "Integrations", basic: false, premium: false, family: false, business: true },
  { name: "SLA Support", basic: false, premium: false, family: false, business: true },
];

export const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="relative px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-neon bg-clip-text text-transparent">
          Funktionjämförelse
        </h2>

        <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl overflow-hidden shadow-glow-primary">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-6 text-lg font-semibold">Funktion</th>
                  <th className="text-center p-6 text-lg font-semibold">Basic</th>
                  <th className="text-center p-6 text-lg font-semibold">Premium</th>
                  <th className="text-center p-6 text-lg font-semibold bg-primary/10">
                    Familjepaket
                  </th>
                  <th className="text-center p-6 text-lg font-semibold">Företag</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={cn(
                      "border-b border-border/30 transition-all duration-300 animate-slide-up",
                      hoveredRow === index && "bg-accent/20"
                    )}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center">
                      {renderCell(feature.basic)}
                    </td>
                    <td className="p-6 text-center">
                      {renderCell(feature.premium)}
                    </td>
                    <td className="p-6 text-center bg-primary/5">
                      {renderCell(feature.family)}
                    </td>
                    <td className="p-6 text-center">
                      {renderCell(feature.business)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderCell = (value: boolean | string) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-6 h-6 text-primary mx-auto" />
    ) : (
      <X className="w-6 h-6 text-muted-foreground/50 mx-auto" />
    );
  }
  return <span className="text-foreground/90">{value}</span>;
};
