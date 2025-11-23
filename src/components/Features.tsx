import { BarChart3, Sparkles, LineChart } from "lucide-react";

export default function Features() {
  const features = [
    {
      tag: "GROWTH",
      title: "Grow within Months",
      desc: "Increase your viewership and engagement within a predictable timeframe.",
      icon: <BarChart3 className="w-7 h-7 text-primary" />,
    },
    {
      tag: "DESIGN",
      title: "Custom Designs",
      desc: "Every asset is crafted from scratch to match your exact brand style.",
      icon: <Sparkles className="w-7 h-7 text-primary" />,
    },
    {
      tag: "STRATEGY",
      title: "Proven Growth Methods",
      desc: "Strategies tested on real creators to guarantee consistent growth.",
      icon: <LineChart className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">We’re the Best at What We Do</h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative p-6 md:p-10 rounded-3xl glass-card border border-primary/20"
            >
              {/* TAG */}
              <div className="text-xs tracking-widest bg-primary/10 px-4 py-1 rounded-full inline-block border border-primary/20 mb-6">
                {feature.tag}
              </div>

              {/* ICON FIXED */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-lg border border-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.3)] flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-3 md:text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
