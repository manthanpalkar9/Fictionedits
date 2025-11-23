"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Heart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import CountUp from "react-countup";
import { motion, useMotionValue } from "framer-motion";

// ----------------------------------------------------
// SYNCWAVE-STYLE TEXT ANIMATION VARIANTS
// ----------------------------------------------------
const wordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ----------------------------------------------------
// SOCIAL ICONS
// ----------------------------------------------------
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ----------------------------------------------------
// FLOATING COMPONENT (DESKTOP ONLY)
// ----------------------------------------------------
const Floating = ({
  children,
  depth = 0.03,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) * depth);
      y.set((e.clientY - window.innerHeight / 2) * depth);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [depth, x, y]);

  return (
    <motion.div
      className={className}
      style={{ x, y, position: "absolute", ...style }}
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

// ----------------------------------------------------
// SCRIBBLE ARROW
// ----------------------------------------------------
const ScribbleArrow = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute ${className}`}
    width="80"
    height="60"
    viewBox="0 0 80 60"
    fill="none"
    stroke="white"
    strokeWidth="2"
    opacity="0.6"
  >
    <path d="M5 50 Q20 40, 35 30 T65 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M65 10 L60 5 L65 10 L60 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ----------------------------------------------------
// DESKTOP FLOATING CARDS
// ----------------------------------------------------
const FloatingStatCard = () => (
  <Floating depth={0.025} className="pointer-events-auto top-[10%] left-[5%] hidden md:block z-30">
    <motion.div
      className="glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)] relative"
      style={{ rotate: -12 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="text-xs text-primary/80 font-medium">Total Likes</div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>

      <div className="flex items-center gap-3">
        <CountUp
          start={0}
          end={63}
          duration={3}
          className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]"
        />
        <span className="text-2xl font-bold text-primary">,000</span>
      </div>

      <Heart className="absolute -top-2 -right-2 w-8 h-8 text-primary opacity-70" fill="currentColor" />
    </motion.div>
    <ScribbleArrow className="top-1/2 left-full translate-x-2 -translate-y-1/2" />
  </Floating>
);

const FloatingBarChart = () => {
  const bars = [40, 60, 50, 75, 85, 95];

  return (
    <Floating depth={0.025} className="hidden md:block pointer-events-auto top-[70%] left-[7%] z-30">
      <motion.div className="glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-xs text-primary/80 font-medium">Last 6 Months</div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>

        <div className="flex items-end gap-2 h-24">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                style={{ height: `${h}%` }}
              />
              <div className="text-[8px] text-muted-foreground">M{i + 1}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-[8px] text-muted-foreground mt-2">
          <span>Day counts</span>
          <span>250+</span>
        </div>
      </motion.div>
    </Floating>
  );
};

const FloatingSocialCluster = () => (
  <Floating depth={0.025} className="hidden md:block pointer-events-auto top-[10%] right-[5%] z-30">
    <motion.div
      className="glass-card px-6 py-4 rounded-full border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-4"
      style={{ rotate: 8 }}
    >
      <Instagram className="w-6 h-6 text-primary" />
      <Youtube className="w-6 h-6 text-primary" />
      <TikTokIcon className="w-6 h-6 text-primary" />
      <FacebookIcon className="w-6 h-6 text-primary" />
    </motion.div>
  </Floating>
);

const FloatingViewsPanel = () => {
  const views = ["+1000", "+2.4K", "+900", "+101K", "+500K"];

  return (
    <Floating depth={0.025} className="hidden md:block pointer-events-auto top-[45%] right-[5%] z-30">
      <motion.div className="glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)] min-w-[200px]">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-xs text-primary/80 font-medium">Total Views</div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>

        <div className="text-[10px] text-muted-foreground mb-3">Last 7 Days</div>

        <div className="space-y-2">
          {views.map((v, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-muted-foreground">Day {i + 1}</span>
              <span className="text-primary font-semibold">{v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Floating>
  );
};

// ----------------------------------------------------
// FLOATING BACKGROUND BLOBS
// ----------------------------------------------------
const FloatingBlob = ({
  top,
  left,
  width,
  height,
  delay = 0,
}: {
  top: string;
  left: string;
  width: string;
  height: string;
  delay?: number;
}) => (
  <Floating depth={0.02} className="absolute" style={{ top, left, width, height }}>
    <motion.div
      className="rounded-full bg-primary/10 blur-3xl opacity-30 w-full h-full"
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  </Floating>
);

// ----------------------------------------------------
// HERO MAIN SECTION
// ----------------------------------------------------
const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden min-h-screen">

      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-10" />
      <div className="absolute inset-0 grid-bg opacity-15 -z-10" />

      {/* Organic Blobs */}
      <FloatingBlob top="10%" left="20%" width="300px" height="300px" />
      <FloatingBlob top="60%" left="70%" width="400px" height="400px" delay={2} />
      <FloatingBlob top="30%" left="50%" width="250px" height="250px" delay={4} />
      <FloatingBlob top="80%" left="10%" width="350px" height="350px" delay={1} />

      {/* Desktop floating UI */}
      <FloatingStatCard />
      <FloatingBarChart />
      <FloatingSocialCluster />
      <FloatingViewsPanel />

      {/* Main content */}
      <div className="relative z-50 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* SYNCWAVE ANIMATED TITLE */}
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
          >
            {["Transform", "Your", "Content", "Into"].map((word, i) => (
  <motion.span
    key={i}
    variants={wordItem}
    className="inline-block mr-2"
  >
    {word}
  </motion.span>
))}

<motion.span
  variants={wordItem}
  className="block text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
>
  Viral Masterpieces
</motion.span>


          {/* Subtitle */}
          <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium video editing that converts views into loyal audiences.
            We craft high-retention short-form content for top creators worldwide.
          </p>

          {/* MOBILE MICRO-STATS */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
            <div className="glass-card p-3 rounded-xl flex flex-col items-start">
              <span className="text-[10px] text-primary/80">Total Likes</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-semibold text-foreground">63K</span>
                <span className="text-xs text-primary">+</span>
              </div>
              <span className="text-[11px] text-muted-foreground mt-1">Last 30 days</span>
            </div>

            <div className="glass-card p-3 rounded-xl flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-primary/80">Channel Growth</span>
                <span className="text-[11px] text-primary font-medium">+124%</span>
              </div>

              <div className="mt-2 flex items-end gap-[3px] h-10">
                {[20, 45, 35, 60, 75, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
                <span>Last 6m</span>
                <span>Views</span>
              </div>
            </div>
          </div>

          {/* CTAS */}
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
