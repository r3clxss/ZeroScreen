export const PricingHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Light sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-[slide-in-right_8s_ease-in-out_infinite]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-slide-up">
          Välj din väg till digital frihet
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
          ZeroScreen fungerar för individer, familjer och företag — välj paketet som passar dig.
        </p>
      </div>
    </section>
  );
};
