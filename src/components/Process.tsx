import { Video, Wand2, TrendingUp, Upload } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Submit Your Footage",
      desc: "Upload your raw recordings through our secure portal. We handle the rest from there.",
      icon: <Upload className="w-7 h-7 text-primary" />,
    },
    {
      number: "2",
      title: "Your Content, Reinvented",
      desc: "Our expert editors craft custom-styled, branded edits optimized for maximum retention.",
      icon: <Wand2 className="w-7 h-7 text-primary" />,
    },
    {
      number: "3",
      title: "Maximize Your Reach",
      desc: "Receive platform-optimized content with proven strategies to boost views and engagement.",
      icon: <TrendingUp className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Powerful Results</h2>

        <div className="mt-16 space-y-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 md:p-10 rounded-3xl glass-card border border-primary/20"
            >
              {/* Step Number Bubble */}
              <div className="absolute -left-4 -top-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg text-xl">
                {step.number}
              </div>

              {/* ICON FIXED FOR MOBILE */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-lg border border-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.3)] flex items-center justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-3 md:text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
