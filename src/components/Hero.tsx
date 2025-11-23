"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Heart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import CountUp from "react-countup";
import { motion, useMotionValue } from "framer-motion";

/* ----------------------------------------------------
   SYNCWAVE TEXT ANIMATION
---------------------------------------------------- */
const wordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ----------------------------------------------------
   SOCIAL SVGs (mobile-safe)
---------------------------------------------------- */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69A4.83 4.83 0 0 1 15.82 2V2h-3.45v13.67a2.89 2.89 0 1 1-3.77-2.9v-3.37a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.79c-.35-.03-.68-.1-1-.1z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 6 4.39 10.96 10.13 11.85v-8.39H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.5 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z" />
  </svg>
);

/* ----------------------------------------------------
   FLOATING ELEMENTS (desktop only)
---------------------------------------------------- */
const Floating = ({ children, depth = 0.03, className = "", style = {} }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) * depth);
      y.set((e.clientY - window.innerHeight / 2) * depth);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [depth]);

  return (
    <motion.div
      className={className}
      style={{ x, y, position: "absolute", ...style }}
      animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const ScribbleArrow = ({ className = "" }) => (
  <svg
    className={`absolute ${className}`}
    width="80"
    height="60"
    viewBox="0 0 80 60"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M5 50 Q20 40, 35 30 T65 10" />
    <path d="M65 10 L60 5 L65 10 L60 15" />
  </svg>
);

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
    <ScribbleArrow className="top-1/2 left-full translate-x-2" />
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

/* DESKTOP FLOATING + MOBILE ICONS */
const FloatingSocialCluster = () => (
  <>
    <Floating depth={0.025} className="hidden md:flex top-[10%] right-[5%] z-30">
      <motion.div className="glass-card px-6 py-4 rounded-full flex gap-4 border border-primary/40">
        <Instagram className="w-6 h-6 text-primary" />
        <Youtube className="w-6 h-6 text-primary" />
        <TikTokIcon className="w-6 h-6 text-primary" />
        <FacebookIcon className="w-6 h-6 text-primary" />
      </motion.div>
    </Floating>

    {/* Always visible on mobile */}
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
   BLOBS
---------------------------------------------------- */
const FloatingBlob = ({ top, left, width, height, delay = 0 }) => (
  <Floating depth={0.02} className="absolute" style={{ top, left, width, height }}>
    <motion.div
      className="rounded-full bg-primary/10 blur-3xl opacity-30 w-full h-full"
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 8 + delay, repeat: Infinity }}
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
      <div className="absolute inset-0 bg-cover bg-center opacity-30 -z-10" style={{ backgroundImage: `url(${heroImage})` }} />
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

      {/* CONTENT */}
      <div className="relative z-50 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">

         

          {/* SUBTITLE */}
          <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Premium video editing that converts views into loyal audiences.
            We craft high-retention short-form content for top creators worldwide.
          </p>

          {/* CTA */}
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
