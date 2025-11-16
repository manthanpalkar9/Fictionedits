import { 
  Zap, Palette, TrendingUp, Target, 
  Clock, RefreshCw, BarChart3, MessageCircle 
} from "lucide-react";

const Features = () => {
  const features = [
    { icon: Zap, label: "Growth in Months" },
    { icon: Palette, label: "Custom Designs" },
    { icon: TrendingUp, label: "Trend-Aligned Editing" },
    { icon: Target, label: "Proven Retention Methods" },
    { icon: MessageCircle, label: "24/7 Support" },
    { icon: RefreshCw, label: "Fast Revisions" },
    { icon: BarChart3, label: "Trend Reports" },
    { icon: Clock, label: "Growth Analysis" },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
            We're the Best at{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium leading-tight">{feature.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
