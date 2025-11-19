import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">

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

      {/* Floating social icons (CLICKABLE NOW) */}
      <div className="absolute right-12 top-1/3 flex flex-col gap-6 animate-fade-in">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/manthan.palkar9"     // <-- Put your link here
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-3 rounded-xl neon-glow hover:scale-110 transition-transform"
        >
          <Instagram className="w-6 h-6 text-primary" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@manthanxpalkar"     // <-- Put your link here
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-3 rounded-xl neon-glow hover:scale-110 transition-transform"
        >
          <Youtube className="w-6 h-6 text-primary" />
        </a>

      </div>

      {/* Floating metrics */}
      <div className="absolute left-12 top-1/4 glass-card p-4 rounded-xl animate-fade-in">
        <div className="text-sm text-muted-foreground mb-1">Total Views</div>
        <div className="text-2xl font-bold text-glow">50M+</div>
      </div>

      <div className="absolute left-24 bottom-1/4 glass-card p-4 rounded-xl animate-fade-in delay-500">
        <div className="text-sm text-muted-foreground mb-1">Total Likes</div>
        <div className="text-2xl font-bold text-glow">2M+</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight">
            Transform Your Content Into
            <span className="block text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Viral Masterpieces
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium video editing that converts views into loyal audiences.
            We craft high-retention short-form content for top creators worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild variant="neon" size="xl">
              <a
                href="https://calendly.com/manthanpalkar/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>

            <Button
              variant="neonOutline"
              size="xl"
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
