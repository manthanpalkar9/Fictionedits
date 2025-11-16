import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-primary-light/10 blur-3xl animate-pulse delay-1000" />

      {/* Social icons floating */}
      <div className="absolute right-12 top-1/3 flex flex-col gap-6 animate-fade-in">
        <div className="glass-card p-3 rounded-xl neon-glow">
          <Instagram className="w-6 h-6 text-primary" />
        </div>
        <div className="glass-card p-3 rounded-xl neon-glow">
          <Youtube className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Animated metrics */}
      <div className="absolute left-12 top-1/4 glass-card p-4 rounded-xl animate-fade-in">
        <div className="text-sm text-muted-foreground mb-1">Total Views</div>
        <div className="text-2xl font-bold text-glow">50M+</div>
      </div>

      <div className="absolute left-24 bottom-1/3 glass-card p-4 rounded-xl animate-fade-in delay-500">
        <div className="text-sm text-muted-foreground mb-1">Total Likes</div>
        <div className="text-2xl font-bold text-glow">2M+</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-tight">
            Transform Your Content Into
            <span className="block text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Viral Masterpieces
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium video editing that converts views into loyal audiences. 
            We craft high-retention short-form content for the world's top creators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="neon" size="xl">
              Book a Call
            </Button>
            <Button variant="neonOutline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
