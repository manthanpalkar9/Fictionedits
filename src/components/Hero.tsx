"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Heart, ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import CountUp from "react-countup";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

// TikTok and Facebook Icon Components
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

// Enhanced Floating Component with parallax + bobbing
const Floating = ({ children, depth = 0.03, className = "", style = {} }: { 
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
      style={{ x, y, position: 'absolute', ...style }}
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

// Scribble Arrow Component
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
    <path
      d="M5 50 Q20 40, 35 30 T65 10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M65 10 L60 5 L65 10 L60 15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 1. TOP-LEFT: Floating Stat Card (Total Likes) - Rotated
const FloatingStatCard = () => (
  <Floating depth={0.025} className="pointer-events-auto top-[10%] left-[5%] md:scale-100 scale-50 z-30">
    <div className="relative">
      <motion.div
        className="glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)] relative"
        style={{ rotate: -12 }}
        whileHover={{ scale: 1.05, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
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
      {/* Scribble Arrow pointing to headline */}
      <ScribbleArrow className="top-1/2 left-full translate-x-2 -translate-y-1/2" />
    </div>
  </Floating>
);

// 2. MIDDLE-LEFT: Floating Bar Chart
const FloatingBarChart = () => {
  const bars = [
    { height: 40, label: "M1" },
    { height: 60, label: "M2" },
    { height: 50, label: "M3" },
    { height: 75, label: "M4" },
    { height: 85, label: "M5" },
    { height: 95, label: "M6" },
  ];

  return (
    <Floating depth={0.025} className="pointer-events-auto top-[70%] left-[7%] md:scale-100 scale-50 z-30">
      <div className="relative">
        <motion.div
          className="glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs text-primary/80 font-medium">Last 6 Months</div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-end gap-2 h-24">
            {bars.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                  style={{ height: `${bar.height}%` }}
                />
                <div className="text-[8px] text-muted-foreground">{bar.label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-muted-foreground mt-2">
            <span>Day counts</span>
            <span>250+</span>
          </div>
        </motion.div>
        {/* Scribble Arrow pointing upward */}
        <ScribbleArrow className="bottom-full left-1/2 -translate-x-1/2 -translate-y-2 rotate-180" />
      </div>
    </Floating>
  );
};

// 3. TOP-RIGHT: Floating Social Icon Cluster
const FloatingSocialCluster = () => (
  <Floating depth={0.025} className="pointer-events-auto top-[10%] right-[5%] md:scale-100 scale-50 z-30">
    <motion.div
      className="glass-card px-6 py-4 rounded-full border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-4"
      style={{ rotate: 8 }}
      whileHover={{ scale: 1.05, rotate: 6 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a
        href="https://www.instagram.com/manthan.palkar9"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
      >
        <Instagram className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
      </a>
      <a
        href="https://youtube.com/@manthanxpalkar"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
      >
        <Youtube className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
      >
        <TikTokIcon className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
      >
        <FacebookIcon className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
      </a>
    </motion.div>
  </Floating>
);

// 4. MIDDLE-RIGHT: Floating Views Panel
const FloatingViewsPanel = () => {
  const dailyViews = [
    { day: 1, views: "+1000" },
    { day: 2, views: "+2.4K" },
    { day: 3, views: "+900" },
    { day: 4, views: "+101K" },
    { day: 5, views: "+500K" },
  ];

  return (
    <Floating depth={0.025} className="pointer-events-auto top-[45%] right-[5%] md:scale-100 scale-50 z-30">
      <div className="relative">
        <motion.div
          className="glass-card p-5 rounded-xl border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.5)] min-w-[200px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs text-primary/80 font-medium">Total Views</div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
          <div className="text-[10px] text-muted-foreground mb-3">Last 7 days</div>
          <div className="space-y-2">
            {dailyViews.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Day {item.day}</span>
                <span className="text-primary font-semibold">{item.views}</span>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Scribble Arrow connecting to text */}
        <ScribbleArrow className="top-1/2 right-full -translate-x-2 -translate-y-1/2 scale-x-[-1]" />
      </div>
    </Floating>
  );
};

// 5. Floating Background Blobs
const FloatingBlob = ({ top, left, width, height, delay = 0 }: {
  top: string;
  left: string;
  width: string;
  height: string;
  delay?: number;
}) => (
  <Floating depth={0.02} className="absolute" style={{ top, left, width, height }}>
    <motion.div
      className="rounded-full bg-primary/10 blur-3xl opacity-30 w-full h-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  </Floating>
);

const Hero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center font-helvetica overflow-hidden min-h-screen">

      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-10" />
      <div className="absolute inset-0 grid-bg opacity-15 -z-10" />

      {/* Organic Background Blobs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingBlob top="10%" left="20%" width="300px" height="300px" delay={0} />
        <FloatingBlob top="60%" left="70%" width="400px" height="400px" delay={2} />
        <FloatingBlob top="30%" left="50%" width="250px" height="250px" delay={4} />
        <FloatingBlob top="80%" left="10%" width="350px" height="350px" delay={1} />
      </div>

      {/* FLOATING UI ELEMENTS LAYER (z-index 30-40) */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <FloatingStatCard />
        <FloatingBarChart />
        <FloatingSocialCluster />
        <FloatingViewsPanel />
      </div>

      {/* MAIN CONTENT (z-index 50 - above floating elements) */}
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