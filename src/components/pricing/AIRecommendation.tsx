import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

type UserType = "parent" | "adult" | "business" | null;
type DeviceCount = "1" | "2-5" | "5+" | null;

export const AIRecommendation = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [deviceCount, setDeviceCount] = useState<DeviceCount>(null);

  const getRecommendation = () => {
    if (!userType || !deviceCount) return null;

    if (userType === "business") return "Business";
    if (userType === "parent" || deviceCount === "5+") return "Family Bundle";
    if (deviceCount === "2-5") return "Premium";
    return "Basic";
  };

  const recommendation = getRecommendation();

  return (
    <section className="relative px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-card border border-primary/50 rounded-2xl p-8 shadow-glow-featured">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              AI-förslag för plan
            </h2>
          </div>

          <p className="text-muted-foreground mb-8">
            Svara på några snabba frågor så föreslår vår AI den bästa planen för dig.
          </p>

          {/* Question 1: User Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Vad beskriver dig bäst?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "parent" as UserType, label: "Förälder" },
                { value: "adult" as UserType, label: "Vuxen" },
                { value: "business" as UserType, label: "Företag" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setUserType(option.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all duration-300",
                    userType === option.value
                      ? "border-primary bg-primary/20 shadow-glow-primary"
                      : "border-glass-border bg-glass-bg hover:border-primary/50"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Device Count */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Hur många enheter behöver du hantera?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "1" as DeviceCount, label: "1 enhet" },
                { value: "2-5" as DeviceCount, label: "2-5 enheter" },
                { value: "5+" as DeviceCount, label: "5+ enheter" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDeviceCount(option.value)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all duration-300",
                    deviceCount === option.value
                      ? "border-secondary bg-secondary/20 shadow-glow-secondary"
                      : "border-glass-border bg-glass-bg hover:border-secondary/50"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Recommendation Result */}
          {recommendation && (
            <div className="p-6 rounded-xl bg-gradient-neon/10 border border-primary/50 animate-slide-up">
              <p className="text-sm text-muted-foreground mb-2">Vi rekommenderar:</p>
              <h3 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
                {recommendation}
              </h3>
                <p className="text-muted-foreground mb-6">
                Denna plan passar dina behov baserat på dina svar.
              </p>
              <Button className="w-full bg-gradient-neon text-background hover:shadow-glow-primary">
                Välj {recommendation}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
