import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Brain, 
  Clock, 
  Lock, 
  Users, 
  Baby, 
  Briefcase, 
  Heart 
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Plattformsoberoende",
    description: "Fungerar sömlöst på iOS, Android, Windows och Mac",
  },
  {
    icon: Brain,
    title: "AI-beteendeidentifiering",
    description: "Smarta algoritmer lär dina vanor och föreslår optimala offline‑tider",
  },
  {
    icon: Clock,
    title: "Offlinezoner",
    description: "Schemalägg automatiska skärmfriperioder för fokus och välmående",
  },
  {
    icon: Lock,
    title: "Mjuk & Hård blockering",
    description: "Flexibel blockering från milda påminnelser till strikt upprätthållande",
  },
];

const audiences = [
  { icon: Baby, title: "Barn", description: "Sunda digitala vanor från dag ett" },
  { icon: Heart, title: "Vuxna", description: "Återta din tid och fokus" },
  { icon: Users, title: "Familjer", description: "Samordnad skärmtidshantering" },
  { icon: Briefcase, title: "Företag", description: "Öka produktivitet och välmående" },
];

const Home = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-cta");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            ZeroScreen
          </h1>
          <p className="text-2xl md:text-4xl font-semibold mb-4">
            Ta kontroll över din skärmtid
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Den ultimata AI-drivna lösningen för individer, familjer och företag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/priser">
              <Button size="lg" className="bg-gradient-neon text-background hover:shadow-glow-primary text-lg px-8 py-6">
                Se priser
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
              onClick={scrollToPricing}
              >
              Bli betatestare
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-neon bg-clip-text text-transparent">
            Kraftfulla funktioner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group backdrop-blur-xl bg-gradient-card border border-glass-border rounded-2xl p-8 hover:scale-105 hover:shadow-glow-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design/UX Section */}
      <section className="relative px-4 py-32 bg-card/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-neon bg-clip-text text-transparent">
            Vackert designad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Upplev ett minimalistiskt, modernt gränssnitt som gör hantering av skärmtid enkel. 
            Följ statistik, ställ in scheman och få intelligenta aviseringar—alltsammans i en snygg och intuitiv instrumentpanel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="animate-float backdrop-blur-xl bg-gradient-card border border-glass-border rounded-2xl p-8">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Stats</h3>
              <p className="text-muted-foreground">Visualize your digital habits</p>
            </div>
            <div className="animate-float backdrop-blur-xl bg-gradient-card border border-glass-border rounded-2xl p-8" style={{ animationDelay: "0.5s" }}>
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
              <p className="text-muted-foreground">Gentle reminders at the right time</p>
            </div>
            <div className="animate-float backdrop-blur-xl bg-gradient-card border border-glass-border rounded-2xl p-8" style={{ animationDelay: "1s" }}>
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
              <p className="text-muted-foreground">Achieve your wellness targets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-neon bg-clip-text text-transparent">
            Utformat för alla
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className="backdrop-blur-xl bg-gradient-card border border-glass-border rounded-2xl p-8 text-center hover:shadow-glow-secondary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <audience.icon className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing-cta" className="relative px-4 py-32 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Redo att förändra ditt digitala liv?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Gå med tusentals användare som tar kontroll över sin skärmtid
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-neon text-background hover:shadow-glow-featured text-lg px-12 py-8 animate-glow-pulse"
          >
            Bli betatestare
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
                ZeroScreen
              </h3>
              <p className="text-muted-foreground">
                Ta kontroll över ditt digitala välmående
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/priser" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-muted-foreground">support@zeroscreen.com</p>
              <p className="text-muted-foreground">Follow us @zeroscreen</p>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border/50 pt-8">
            © 2025 ZeroScreen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
