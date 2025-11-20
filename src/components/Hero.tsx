import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden font-helvetica">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating elements */}
      <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-primary-light/10 blur-3xl animate-pulse delay-1000" />

      {/* Floating social icons */}
      <div className="absolute right-6 md:right-12 top-1/3 flex flex-col gap-6 animate-fade-in">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/manthan.palkar9"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-3 rounded-xl neon-glow hover:scale-110 transition-transform"
        >
          <Instagram className="w-6 h-6 text-primary" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@manthanxpalkar"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-3 rounded-xl neon-glow hover:scale-110 transition-transform"
        >
          <Youtube className="w-6 h-6 text-primary" />
        </a>

      </div>

      {/* Metrics */}
      <div className="absolute left-6 md:left-12 top-1/4 glass-card p-4 rounded-xl animate-fade-in tracking-tight md:tracking-[-0.06em]">
        <div className="text-sm text-muted-foreground mb-1">Total Views</div>
        <CountUp
          start={0}
          end={50}
          duration={2}
          suffix="M+"
          className="text-2xl font-bold text-glow"
        />
      </div>

      <div className="absolute left-10 md:left-24 bottom-1/4 glass-card p-4 rounded-xl animate-fade-in delay-500 tracking-tight md:tracking-[-0.06em]">
        <div className="text-sm text-muted-foreground mb-1">Total Likes</div>
        <CountUp
          start={0}
          end={2}
          duration={2}
          suffix="M+"
          className="text-2xl font-bold text-glow"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight md:tracking-[-0.06em] font-helvetica">
            Transform Your Content Into
            <span className="block text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Viral Masterpieces
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed tracking-tight md:tracking-[-0.06em] font-helvetica">
            Premium video editing that converts views into loyal audiences.
            We craft high-retention short-form content for top creators worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild variant="neon" size="xl" className="tracking-tight md:tracking-[-0.06em] font-helvetica">
              <a
                href="https://calendly.com/manthanpalkar9/let-s-work"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>

            <Button
              variant="neonOutline"
              size="xl"
              className="tracking-tight md:tracking-[-0.06em] font-helvetica"
              onClick={() => {
                document.getElementById("showcase")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              View Our Work
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
