"use client";

import { ReactNode } from "react";
import { CheckCircle, Upload, Sparkles, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: StepProps[] = [
  {
    number: "1",
    title: "Submit Your Footage",
    description:
      "Upload your raw recordings through our secure portal. We handle the rest from here.",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    number: "2",
    title: "Your Content, Reinvented",
    description:
      "Our expert editors craft custom-styled, branded edits optimized for maximum retention.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    number: "3",
    title: "Maximize Your Reach",
    description:
      "Receive platform-optimized content with proven strategies to boost views and engagement.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-16 md:py-24 container mx-auto px-6"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        Our <span className="text-primary">Process</span>
      </h2>

      <div className="space-y-8">
        {steps.map((s, i) => (
          <div
            key={i}
            className="relative bg-secondary/30 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 md:p-10 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            {/* Number badge */}
            <div className="absolute -left-3 top-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              {s.number}
            </div>

            {/* Icon */}
            <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {s.icon}
            </div>

            {/* Title + Description */}
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
