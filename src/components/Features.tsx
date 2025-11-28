"use client";

import {
  Zap,
  Palette,
  TrendingUp,
  Target,
  Clock,
  RefreshCw,
  BarChart3,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

// Clean motion components (NO JSX PARSING ERRORS)
const MotionDiv = motion.div;
const MotionSpan = motion.span;

/* ======================
   FEATURE DATA
====================== */
const highlightFeatures = [
  {
    icon: Zap,
    title: "Grow within Months",
    desc: "Increase your viewership and engagement within a predictable timeframe.",
    tag: "Growth",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Every asset is crafted from scratch to match your exact brand style.",
    tag: "Design",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Methods",
    desc: "Strategies tested on real creators to guarantee consistent growth.",
    tag: "Strategy",
  },
];

const regularFeatures = [
  { icon: MessageCircle, label: "24/7 Support" },
  { icon: RefreshCw, label: "Fast Revisions" },
  { icon: Clock, label: "Flexible Timings" },
  { icon: BarChart3, label: "Trend Reports" },
  { icon: Target, label: "Retention Focused" },
];

/* ======================
   ANIMATION VARIANTS
====================== */

const containerVariants: any = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const chipVariants: any = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.06,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

/* ======================
   COMPONENT
====================== */

const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="pointer-events-none absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      {/* Wrap entire section in MotionDiv */}
      <MotionDiv
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
            We're the Best at{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlightFeatures.map((feature, i) => (
            <MotionDiv
              key={feature.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-3xl border border-white/10
              bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_55%),linear-gradient(to_bottom,_rgba(15,15,20,0.85),_rgba(5,5,10,0.95))]
              shadow-[0_0_30px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500"
            >
              {/* Glow border hover */}
              <div className="absolute inset-0 rounded-3xl border border-primary/0 hover:border-primary/70 hover:shadow-[0_0_45px_rgba(168,85,247,0.9)] transition-all duration-500" />

              {/* Glow blob */}
              <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-primary/40 blur-3xl opacity-70 animate-pulse" />

              {/* Unique Graphics for each card */}
              {feature.tag === "Growth" && (
                <div className="absolute inset-x-0 top-16 px-8 pointer-events-none">
                  <div className="flex items-end gap-1.5 h-16 opacity-40">
                    {[4, 7, 10, 8, 12, 15, 18].map((h, idx) => (
                      <motion.div
                        key={idx}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/20 to-primary/80 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        style={{ height: `${h * 4}px` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 4}px` }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </div>

                  <svg className="absolute bottom-0 left-8 right-8 h-16 opacity-30" viewBox="0 0 200 60">
                    <path
                      d="M 0 50 Q 30 45, 60 35 T 120 15 T 180 5"
                      stroke="url(#gradient-growth)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient-growth" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(271, 91%, 65%)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(271, 95%, 76%)" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}

              {feature.tag === "Design" && (
                <div className="absolute inset-x-0 top-16 px-8 pointer-events-none">
                  <div className="absolute right-12 top-0 w-20 h-20 opacity-30">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border-2 border-primary/30" />
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-primary/80" />
                    <div className="absolute top-6 left-1 w-2 h-2 rounded-full bg-primary/60" />
                    <div className="absolute bottom-2 right-1 w-2.5 h-2.5 rounded-full bg-primary/70" />
                  </div>

                  <div className="absolute left-8 top-4 space-y-3 opacity-25">
                    <motion.div
                      className="w-16 h-1.5 rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 0.4 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    />
                    <motion.div
                      className="w-20 h-1.5 rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent ml-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 0.3 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    />
                    <motion.div
                      className="w-14 h-1.5 rounded-full bg-gradient-to-r from-transparent via-primary/70 to-transparent ml-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 0.35 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    />
                  </div>

                  <div className="absolute bottom-2 right-16 space-y-2 opacity-20">
                    <div className="w-8 h-8 border-2 border-primary/40 rounded-lg rotate-12" />
                    <div className="w-6 h-6 border-2 border-primary/30 rounded-full ml-2" />
                  </div>
                </div>
              )}

              {feature.tag === "Strategy" && (
                <div className="absolute inset-x-0 top-16 px-8 pointer-events-none">
                  <svg className="w-full h-16 opacity-40" viewBox="0 0 200 60">
                    <path
                      d="M 10 50 L 40 35 L 70 25 L 100 18 L 130 12 L 160 8 L 190 5"
                      stroke="url(#gradient-strategy)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                    />

                    {[{ x: 40, y: 35 }, { x: 100, y: 18 }, { x: 160, y: 8 }].map(
                      (point, idx) => (
                        <motion.circle
                          key={idx}
                          cx={point.x}
                          cy={point.y}
                          r="4"
                          fill="hsl(271, 91%, 65%)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.8 }}
                          transition={{ delay: idx * 0.2 + 0.3, duration: 0.4 }}
                        />
                      )
                    )}

                    <path
                      d="M 10 50 L 190 5"
                      stroke="hsl(271, 91%, 65%)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.2"
                    />

                    <defs>
                      <linearGradient id="gradient-strategy" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(271, 91%, 65%)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="hsl(271, 95%, 76%)" stopOpacity="1" />
                      </linearGradient>

                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3, 0 6"
                          fill="hsl(271, 91%, 65%)"
                          opacity="0.8"
                        />
                      </marker>
                    </defs>
                  </svg>

                  <div className="absolute bottom-0 left-8 right-8 flex justify-between text-[8px] text-primary/50 opacity-60">
                    <span>Start</span>
                    <span>Execute</span>
                    <span>Scale</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative px-7 pt-7 pb-8 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] uppercase tracking-wide text-muted-foreground">
                    <MotionSpan
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
                    />
                    {feature.tag}
                  </div>

                  {/* FIXED ICON VISIBLE ON MOBILE */}
                  <div
                    className="relative z-[5] w-11 h-11 flex items-center justify-center rounded-2xl 
     bg-black/40 md:bg-black/70 
     border border-primary/40 
     backdrop-blur-sm"
                  >
                    <feature.icon
                      className="w-5 h-5 
    text-white md:text-primary 
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
                    />
                  </div>

                </div>

                <div className="mt-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Chips */}
        <MotionDiv
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {regularFeatures.map((item, i) => (
            <MotionDiv
              key={item.label}
              custom={i}
              variants={chipVariants}
              whileHover={{ y: -3, scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/5 border border-white/10 backdrop-blur text-sm text-muted-foreground 
              shadow-[0_0_18px_rgba(0,0,0,0.7)]"
            >
              <item.icon className="w-4 h-4 text-primary" />
              {item.label}
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Features;
