import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
  toast.success(isLogin ? "Välkommen tillbaka!" : "Konto skapat!" );
      setLoading(false);
      // In a real app, redirect to dashboard
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <Navigation />

      <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md animate-slide-up">
          <div className="backdrop-blur-xl bg-gradient-card border border-glass-border rounded-2xl p-8 shadow-glow-primary">
            <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-neon bg-clip-text text-transparent">
              {isLogin ? "Logga in till ZeroScreen" : "Skapa ditt konto"}
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              {isLogin ? "Välkommen tillbaka!" : "Påbörja din resa till digital frihet"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  E-post
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Lösenord
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {isLogin && (
                <div className="text-right">
                    <button
                    type="button"
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Glömt lösenord?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-neon text-background hover:shadow-glow-primary transition-all"
                size="lg"
              >
                {loading ? "Läser in..." : isLogin ? "Logga in" : "Registrera"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin ? "Har du inget konto? " : "Har du redan ett konto? "}
                <span className="text-primary font-semibold">
                  {isLogin ? "Registrera" : "Logga in"}
                </span>
              </button>
            </div>

            <div className="mt-6 text-center">
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-6 p-4 backdrop-blur-xl bg-secondary/10 border border-secondary/30 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">
              🚀 This is a demo. Connect <span className="text-primary font-semibold">Lovable Cloud</span> for real authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
