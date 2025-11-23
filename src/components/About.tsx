"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ProCounter = ({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) => {
  const [value, setValue] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Detect when card enters viewport (reliable)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
          }
        });
      },
      {
        threshold: 0.5, // must be halfway visible
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Counter logic — only runs when "start" becomes true
  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500; // 1.5 sec
    const stepTime = 16; // 60 fps approx
    const totalSteps = duration / stepTime;
    const increment = to / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        current = to;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, to]);

  return (
    <div ref={ref}>
      <span className="text-glow text-5xl font-bold">
        {value}
        {suffix}
      </span>
    </div>
  );
};



const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden font-helvetica"
    >
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            Introducing FictionEdits Media
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            We Turn Raw Recordings Into{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Exceptional Content
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            In today's creator economy, content quality defines success.
            We specialize in transforming raw footage into high-retention content.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">

            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-glow mb-2 flex justify-center">
                <ProCounter to={25} suffix="+" />
              </div>
              <div className="text-muted-foreground">Clients Served</div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-glow mb-2 flex justify-center">
                <ProCounter to={200} suffix="+" />
              </div>
              <div className="text-muted-foreground">Videos Edited</div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-glow mb-2 flex justify-center">
                <ProCounter to={5} suffix="M+" />
              </div>
              <div className="text-muted-foreground">Total Views Generated</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
