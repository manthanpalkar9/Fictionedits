import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden font-helvetica">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">

          {/* Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight md:tracking-[-0.06em]">
              Ready to Take Your Content to the{" "}
              <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Next Level?
              </span>
            </h2>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto tracking-tight md:tracking-[-0.06em]">
              Book a free discovery call with our team and discover how we can transform your content strategy.
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              variant="neon"
              size="xl"
              className="group tracking-tight md:tracking-[-0.06em]"
            >
              <a
                href="https://calendly.com/manthanpalkar9/let-s-work"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Here
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">

            <div className="text-center tracking-tight md:tracking-[-0.06em]">
              <CountUp
                start={0}
                end={50}
                duration={5}
                suffix="+"
                className="text-3xl font-bold text-glow mb-2"
              />
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>

            <div className="text-center tracking-tight md:tracking-[-0.06em]">
              <CountUp
                start={0}
                end={500}
                duration={2}
                suffix="+"
                className="text-3xl font-bold text-glow mb-2"
              />
              <div className="text-sm text-muted-foreground">Videos Created</div>
            </div>

            <div className="text-center tracking-tight md:tracking-[-0.06em]">
              <CountUp
                start={0}
                end={10}
                duration={2}
                suffix="M+"
                className="text-3xl font-bold text-glow mb-2"
              />
              <div className="text-sm text-muted-foreground">Views Generated</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
