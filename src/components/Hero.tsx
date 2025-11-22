"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import CountUp from "react-countup";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

// Floating Component
const Floating = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const depth = 0.03;
      x.set((e.clientX - window.innerWidth / 2) * depth);
      y.set((e.clientY - window.innerHeight / 2) * depth);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center font-helvetica overflow-hidden">

      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-10" />
      <div className="absolute inset-0 grid-bg opacity-15 -z-10" />

      {/* FLOATING LAYER */}
      <div className="absolute inset-0 pointer-events-none z-[99999]">

        {/* Glow 1 */}
        <Floating>
          <div className="absolute top-[20%] right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl opacity-70" />
        </Floating>

        {/* Glow 2 */}
        <Floating>
          <div className="absolute bottom-[20%] left-20 w-40 h-40 rounded-full bg-primary-light/10 blur-3xl opacity-70" />
        </Floating>

        {/* Instagram icon – MOVED LOWER */}
        <Floating>
          <a
            href="https://www.instagram.com/manthan.palkar9"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto absolute right-8 top-[32%] glass-card p-4 rounded-xl neon-glow hover:scale-110 transition-transform"
          >
            <Instagram className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          </a>
        </Floating>

        {/* YouTube icon – MATCHED WITH IG */}
        <Floating>
          <a
            href="https://youtube.com/@manthanxpalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto absolute right-8 top-[42%] glass-card p-4 rounded-xl neon-glow hover:scale-110 transition-transform"
          >
            <Youtube className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          </a>
        </Floating>

        {/* Total Views – MOVED DOWN */}
        <Floating>
          <div className="pointer-events-auto absolute left-25 top-[100%] glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
            <div className="text-sm text-primary/80 mb-1">Total Views</div>
            <CountUp
              start={0}
              end={10}
              duration={5}
              suffix="M+"
              className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
            />
          </div>
        </Floating>


        {/* Total Likes – MOVED DOWN AND INWARD */}
        <Floating>
          <div className="pointer-events-auto absolute left-35 bottom-[100%] glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
            <div className="text-sm text-primary/80 mb-1">Total Likes</div>
            <CountUp
              start={0}
              end={100}
              duration={2}
              suffix="k+"
              className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
            />
          </div>
        </Floating>


      </div>


      {/* MAIN CONTENT */}
      <div className="relative z-50 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Transform Your Content Into
            <span className="block text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Viral Masterpieces
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium video editing that converts views into loyal audiences.
            We craft high-retention short-form content for top creators worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">

            <Button asChild variant="neon" size="xl">
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
              onClick={() =>
                document.getElementById("showcase")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
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
