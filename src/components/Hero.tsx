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
      const depth = 0.03; // parallax intensity
      x.set((e.clientX - window.innerWidth / 2) * depth);
      y.set((e.clientY - window.innerHeight / 2) * depth);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      animate={{
        y: [0, -10, 0],
        x: [0, 6, 0],
      }}
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
    <section className="relative py-32 flex items-center justify-center font-helvetica">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* ---------------------- FLOATING CONTAINER (FIXED) ---------------------- */}
      <div className="absolute inset-0 pointer-events-none z-40">

        {/* Floating glow blob 1 */}
        <Floating>
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl opacity-80 translate-z-0" />
        </Floating>

        {/* Floating glow blob 2 */}
        <Floating>
          <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-primary-light/10 blur-3xl opacity-70 translate-z-0" />
        </Floating>

        {/* Floating Instagram icon */}
        <Floating>
          <a
            href="https://www.instagram.com/manthan.palkar9"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto absolute right-10 top-[45%] glass-card p-4 rounded-xl neon-glow hover:scale-110 transition-transform translate-z-0"
          >
            <Instagram className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          </a>
        </Floating>


        {/* Floating YouTube icon */}
        <Floating>
          <a
            href="https://youtube.com/@manthanxpalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto absolute right-10 top-[55%] glass-card p-4 rounded-xl neon-glow hover:scale-110 transition-transform translate-z-0"
          >
            <Youtube className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          </a>
        </Floating>


        {/* Floating "Total Views" */}
        {/* Floating "Total Views" */}
        <Floating>
          <div className="pointer-events-auto absolute left-10 top-[28%] glass-card p-5 rounded-xl translate-z-0 tracking-tight shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-primary/40">
            <div className="text-sm text-primary/80 mb-1">Total Views</div>

            <CountUp
              start={0}
              end={50}
              duration={2}
              suffix="M+"
              className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            />
          </div>
        </Floating>


        {/* Floating "Total Likes" */}
        {/* Floating "Total Likes" */}
        <Floating>
          <div className="pointer-events-auto absolute left-16 bottom-[28%] glass-card p-5 rounded-xl translate-z-0 tracking-tight shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-primary/40">
            <div className="text-sm text-primary/80 mb-1">Total Likes</div>

            <CountUp
              start={0}
              end={2}
              duration={2}
              suffix="M+"
              className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            />
          </div>
        </Floating>


      </div>
      {/* ---------------------- END FLOATING CONTAINER ---------------------- */}

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
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
            <Button
              asChild
              variant="neon"
              size="xl"
              className="tracking-tight md:tracking-[-0.06em] font-helvetica"
            >
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
