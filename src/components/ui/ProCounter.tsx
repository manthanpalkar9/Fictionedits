"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// PRO counter with glow, scale pop, fade-in, and odometer motion
export const ProCounter = ({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);

  const spring = useSpring(count, {
    duration,
    stiffness: 60,
    damping: 12,
  });

  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  // Scale pop animation (0.85 → 1.15 → 1)
  const scale = useTransform(spring, (v) => {
    if (v === 0) return 0.85;
    if (v < to * 0.3) return 1.15;
    return 1;
  });

  // Glow pulse animation
  const glow = useTransform(spring, (v) => {
    const intensity = Math.min(v / to, 1);
    return `0 0 ${20 * intensity}px rgba(147, 51, 234, ${intensity})`;
  });

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [isInView, count, to]);

  return (
  <motion.span
    ref={ref}
    style={{
      display: "inline-block",
      filter: glow,
      scale,
    }}
    className="text-glow"
  >
    {rounded && typeof rounded.get === "function" ? rounded.get() : 0}
    {suffix}
  </motion.span>
)};
