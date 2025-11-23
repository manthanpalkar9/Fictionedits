"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Heart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import CountUp from "react-countup";
import { motion, useMotionValue, Variants } from "framer-motion";

/* ----------------------------------------------------
   TEXT ANIMATION VARIANTS (STRICTLY TYPED)
---------------------------------------------------- */
const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ----------------------------------------------------
   MOBILE-SAFE SVG ICONS
---------------------------------------------------- */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.8 4.8 0 0 1-3.77-4.25h-3.45v13.67a2.9 2.9 0 1 1-3.77-2.9v-3.37a6.8 6.8 0 0 0-1-.05A6.33 6.33 0 1 0 15.86 15V8a8 8 0 0 0 4.73 1.5V6.79a4.5 4.5 0 0 1-1-.1z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.4 18.6 0 12 0S0 5.4 0 12.07c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.07z" />
  </svg>
);

/* ----------------------------------------------------
   FLOATING MOTION (DESKTOP ONLY)
---------------------------------------------------- */
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
    const move = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) * depth);
      y.set((e.clientY - window.innerHeight / 2) * depth);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className={className}
      style={{ x, y, position: "absolute", ...style }}
      animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ----------------------------------------------------
   SCRIBBLE ARROW
---------------------------------------------------- */
const ScribbleArrow = ({ className = "" }) => (
  <svg
    className={`absolute ${className}`}
    width="70"
    height="55"
    viewBox="0 0 70 55"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M5 50 Q20 40, 35 28 T65 10" />
    <path d="M65 10 L60 5 L65 10 L60 15" />
  </svg>
);

/* ----------------------------------------------------
   FLOATING CARDS (DESKTOP)
---------------------------------------------------- */
const FloatingStatCard = () => (
  <Floating depth={0.025} className="hidden md:block top-[10%] left-[5%] z-30">
    <motion.div className="glass-card p-5 rounded-xl border border-primary/40 relative">
      <div className="text-xs text-primary/80">Total Likes</div>

      <div className="flex items-center gap-2 mt-1">
        <CountUp start={0} end={63} duration={3} className="text-4xl font-bold" />
        <span className="text-primary text-2xl">,000</span>
      </div>

      <Heart className="absolute -top-2 -right-2 w-8 h-8 text-primary" fill="currentColor" />
    </motion.div>

    <ScribbleArrow className="top-1/2 left-full translate-x-2 -translate-y-1/2" />
  </Floating>
);

const FloatingBarChart = () => (
  <Floating depth={0.025} className="hidden md:block top-[70%] left-[7%] z-30">
    <motion.div className="glass-card p-5 rounded-xl border border-primary/40">
      <div className="text-xs text-primary/80 mb-2">Last 6 Months</div>

      <div className="flex items-end gap-2 h-24">
        {[40, 60, 50, 75, 85, 95].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary"
              style={{ height: `${h}%` }}
            />
            <span className="text-[8px]">M{i + 1}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </Floating>
);

const FloatingSocialCluster = () => (
  <>
    {/* DESKTOP FLOATING */}
    <Floating depth={0.025} className="hidden md:flex top-[10%] right-[5%] z-30">
      <motion.div className="glass-card px-6 py-4 rounded-full flex gap-4 border border-primary/40">
        <Instagram className="w-6 h-6 text-primary" />
        <Youtube className="w-6 h-6 text-primary" />
        <TikTokIcon className="w-6 h-6 text-primary" />
        <FacebookIcon className="w-6 h-6 text-primary" />
      </motion.div>
    </Floating>

    {/* ALWAYS visible on mobile */}
    <div className="md:hidden flex justify-center gap-6 mt-6">
      <Instagram className="w-6 h-6 text-primary" />
      <Youtube className="w-6 h-6 text-primary" />
      <TikTokIcon className="w-6 h-6 text-primary" />
      <FacebookIcon className="w-6 h-6 text-primary" />
    </div>
  </>
);

const FloatingViewsPanel = () => (
  <Floating depth={0.025} className="hidden md:block top-[45%] right-[5%] z-30">
    <motion.div className="glass-card p-5 rounded-xl border border-primary/40 min-w-[200px]">
      <div className="text-xs text-primary/80">Total Views</div>
      <div className="text-[10px] text-muted-foreground mb-3">Last 7 Days</div>

      {["+1000", "+2.4K", "+900", "+101K", "+500K"].map((v, i) => (
        <div key={i} className="flex justify-between text-sm">
          <span className="text-muted-foreground">Day {i + 1}</span>
          <span className="text-primary font-semibold">{v}</span>
        </div>
      ))}
    </motion.div>
  </Floating>
);

/* ----------------------------------------------------
   FLOATING BLOBS
---------------------------------------------------- */
const FloatingBlob = ({ top, left, width, height, delay = 0 }) => (
  <Floating depth={0.02} className="absolute" style={{ top, left, width, height }}>
    <motion.div
      className="rounded-full bg-primary/10 blur-3xl opacity-30 w-full h-full"
      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: "easeInOut" }}
    />
  </Floating>
);

/* ----------------------------------------------------
   HERO SECTION
---------------------------------------------------- */
const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 min-h-screen overflow-hidden flex items-center justify-center">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background -z-10" />
      <div className="absolute inset-0 grid-bg opacity-15 -z-10" />

      {/* BLOBS */}
      <FloatingBlob top="10%" left="20%" width="300px" height="300px" />
      <FloatingBlob top="60%" left="70%" width="400px" height="400px" delay={2} />
      <FloatingBlob top="30%" left="50%" width="250px" height="250px" delay={4} />
      <FloatingBlob top="80%" left="10%" width="350px" height="350px" delay={1} />

      {/* DESKTOP FLOATING UI */}
      <FloatingStatCard />
      <FloatingBarChart />
      <FloatingSocialCluster />
      <FloatingViewsPanel />

      {/* MAIN CONTENT */}
      <div className="relative z-50 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* ANIMATED TITLE */}
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
          >
            {["Transform", "Your", "Content", "Into"].map((word, i) => (
              <motion.span key={i} variants={wordItem} className="inline-block mr-2">
                {word}
              </motion.span>
            ))}

            <motion.span
              variants={wordItem}
              className="block text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
            >
              Viral Masterpieces
            </motion.span>
          </motion.h1>

          {/* SUBTITLE */}
          <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium video editing that converts views into loyal audiences.
            We craft high-retention short-form content for top creators worldwide.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild variant="neon" size="xl">
              <a href="https://calendly.com/manthanpalkar9/let-s-work" target="_blank">
                Book a Call
              </a>
            </Button>

            <Button
              variant="neonOutline"
              size="xl"
              onClick={() =>
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })
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
