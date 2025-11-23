"use client";

import { BarChart3, Brush, Target } from "lucide-react";

const features = [
  {
    tag: "GROWTH",
    title: "Grow within Months",
    description:
      "Increase your viewership and engagement within a predictable timeframe.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    tag: "DESIGN",
    title: "Custom Designs",
    description:
      "Every asset is crafted from scratch to match your exact brand style.",
    icon: <Brush className="w-6 h-6 text-primary" />,
  },
  {
    tag: "STRATEGY",
    title: "Proven Growth Methods",
    description:
      "Strategies tested on real creators to guarantee consistent growth.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-16 md:py-24 container mx-auto px-6"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        We're the Best at{" "}
        <span className="text-primary glow">What We Do</span>
      </h2>

      <div className="grid gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative bg-secondary/30 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 md:p-10 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
          >
            {/* Tag */}
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary block"></span>
              {f.tag}
            </div>

            {/* Icon */}
            <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {f.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
