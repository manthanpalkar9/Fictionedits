import { Upload, Wand2, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Upload,
      title: "Submit Your Footage",
      description: "Upload your raw recordings through our secure portal. We handle the rest from there.",
    },
    {
      icon: Wand2,
      title: "Your Content, Reinvented",
      description: "Our expert editors craft custom-styled, branded edits optimized for maximum retention.",
    },
    {
      icon: TrendingUp,
      title: "Maximize Your Reach",
      description: "Receive platform-optimized content with proven strategies to boost views and engagement.",
    },
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            How It Works
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
            Simple Process,{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
