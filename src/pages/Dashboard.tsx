import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Smartphone, 
  Clock, 
  Trophy, 
  Settings,
  Plus,
  Play,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

type Section = "overview" | "devices" | "schedules" | "rewards" | "settings";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<Section>("overview");

  const navItems = [
    { id: "overview" as Section, label: "Översikt", icon: LayoutDashboard },
    { id: "devices" as Section, label: "Enheter", icon: Smartphone },
    { id: "schedules" as Section, label: "Offline-scheman", icon: Clock },
    { id: "rewards" as Section, label: "Belöningar", icon: Trophy },
    { id: "settings" as Section, label: "Kontoinställningar", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <Navigation />

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border/50 min-h-screen backdrop-blur-xl bg-background/50 p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Dashboard
            </h2>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                  activeSection === item.id
                    ? "bg-primary/20 text-primary shadow-glow-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeSection === "overview" && <OverviewSection />}
          {activeSection === "devices" && <DevicesSection />}
          {activeSection === "schedules" && <SchedulesSection />}
          {activeSection === "rewards" && <RewardsSection />}
          {activeSection === "settings" && <SettingsSection />}
        </main>
      </div>
    </div>
  );
};

const OverviewSection = () => (
  <div className="space-y-6 animate-slide-up">
    <h1 className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
      Välkommen tillbaka!
    </h1>
    
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6 hover:shadow-glow-primary transition-all">
  <h3 className="text-sm text-muted-foreground mb-2">Dagens skärmtid</h3>
  <p className="text-4xl font-bold text-primary">2h 34m</p>
  <p className="text-sm text-green-500 mt-2">↓ 23% sedan igår</p>
      </Card>
      <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6 hover:shadow-glow-secondary transition-all">
  <h3 className="text-sm text-muted-foreground mb-2">Veckomålets framsteg</h3>
  <p className="text-4xl font-bold text-secondary">67%</p>
  <p className="text-sm text-muted-foreground mt-2">14h / 21h mål</p>
      </Card>
      <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6 hover:shadow-glow-primary transition-all">
  <h3 className="text-sm text-muted-foreground mb-2">Offline-streak</h3>
  <p className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">5 dagar</p>
  <p className="text-sm text-muted-foreground mt-2">Fortsätt så! 🔥</p>
      </Card>
    </div>

    {/* Chart Placeholder */}
    <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6">
  <h2 className="text-2xl font-bold mb-6">Skärmtid den här veckan</h2>
      <div className="h-64 flex items-end justify-between gap-2">
        {[65, 45, 80, 35, 50, 40, 30].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-gradient-neon rounded-t-lg transition-all hover:opacity-80"
              style={{ height: `${height}%` }}
            />
            <span className="text-xs text-muted-foreground">
              {["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"][i]}
            </span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const DevicesSection = () => (
  <div className="space-y-6 animate-slide-up">
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
        Mina enheter
      </h1>
      <Button className="bg-gradient-neon text-background hover:shadow-glow-primary">
        <Plus className="w-4 h-4 mr-2" />
        Lägg till enhet
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
        { name: "iPhone 13", status: "Aktiv", lock: "Mjuk blockering" },
        { name: "MacBook Pro", status: "Aktiv", lock: "Hård blockering" },
        { name: "iPad Air", status: "Offline", lock: "Ingen" },
      ].map((device, i) => (
        <Card key={i} className="backdrop-blur-xl bg-gradient-card border-glass-border p-6 hover:shadow-glow-primary transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">{device.name}</h3>
              <p className="text-sm text-muted-foreground">{device.status}</p>
            </div>
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Lås-läge:</span>
              <span className={cn(
              "text-sm font-semibold",
              device.lock === "Hard Lock" ? "text-destructive" : "text-primary"
            )}>
              {device.lock}
            </span>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const SchedulesSection = () => (
  <div className="space-y-6 animate-slide-up">
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
        Offline Schedules
      </h1>
      <Button className="bg-gradient-neon text-background hover:shadow-glow-primary">
        <Plus className="w-4 h-4 mr-2" />
        Create Schedule
      </Button>
    </div>

    <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6">
      <h3 className="text-xl font-bold mb-4">Active Schedules</h3>
      <div className="space-y-4">
        {[
          { name: "Morning Focus", time: "6:00 AM - 9:00 AM", days: "Mon-Fri" },
          { name: "Family Time", time: "6:00 PM - 9:00 PM", days: "Daily" },
          { name: "Sleep Mode", time: "10:00 PM - 6:00 AM", days: "Daily" },
        ].map((schedule, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-all">
            <div>
              <h4 className="font-semibold">{schedule.name}</h4>
              <p className="text-sm text-muted-foreground">{schedule.time} • {schedule.days}</p>
            </div>
            <Button variant="outline" size="sm" className="border-primary/50">
              Edit
            </Button>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const RewardsSection = () => (
  <div className="space-y-6 animate-slide-up">
    <h1 className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
      Rewards & Achievements
    </h1>

    <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold mb-2">1,250 Points</h2>
        <p className="text-muted-foreground">Keep going to unlock more rewards!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "🌟", name: "First Day", unlocked: true },
          { icon: "🔥", name: "5 Day Streak", unlocked: true },
          { icon: "💎", name: "10 Day Streak", unlocked: false },
          { icon: "👑", name: "30 Day Streak", unlocked: false },
        ].map((badge, i) => (
          <div
            key={i}
            className={cn(
              "p-4 rounded-xl text-center transition-all",
              badge.unlocked
                ? "bg-gradient-neon/20 border-2 border-primary shadow-glow-primary"
                : "bg-background/30 border border-border/50 opacity-50"
            )}
          >
            <div className="text-4xl mb-2">{badge.icon}</div>
            <p className="text-sm font-medium">{badge.name}</p>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const SettingsSection = () => (
  <div className="space-y-6 animate-slide-up">
    <h1 className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent">
      Account Settings
    </h1>

    <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6">
      <h3 className="text-xl font-bold mb-6">Profile Information</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground">Email</label>
          <p className="text-foreground">user@example.com</p>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Plan</label>
          <p className="text-foreground">Family Bundle</p>
        </div>
        <Button className="bg-gradient-neon text-background hover:shadow-glow-primary">
          Edit Profile
        </Button>
      </div>
    </Card>

    <Card className="backdrop-blur-xl bg-gradient-card border-glass-border p-6">
      <h3 className="text-xl font-bold mb-4">Export Data</h3>
      <p className="text-muted-foreground mb-4">Download your screen time statistics and history</p>
      <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
        <Download className="w-4 h-4 mr-2" />
        Export Statistics
      </Button>
    </Card>
  </div>
);

export default Dashboard;
