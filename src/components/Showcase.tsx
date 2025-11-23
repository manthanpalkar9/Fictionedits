"use client";

import React from "react";
import { Eye } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

import video1 from "@/assets/videos/video1.mp4";
import video2 from "@/assets/videos/video2.mp4";
import video3 from "@/assets/videos/video3.mp4";
import video4 from "@/assets/videos/video4.mp4";

type VideoItem = {
  name: string;
  views: string;
  src: string;
};

type ShowcaseCardProps = {
  video: VideoItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const ShowcaseCard = ({ video, index, total, progress }: ShowcaseCardProps) => {
  const centerIndex = (total - 1) / 2;
  const offset = index - centerIndex;

  // Mobile-friendly horizontal compression - minimal on mobile, more on desktop
  const x = useTransform(progress, [0, 1], [offset * 15, offset * 5]);

  // slight upward float as cards compress - disabled on mobile
  const y = useTransform(progress, [0, 1], [20, 0]);

  // scale to tighten look - less aggressive on mobile
  const scale = useTransform(progress, [0, 1], [1, 0.96]);

  // opacity smoothing - ensure visible on mobile
  const opacity = useTransform(progress, [0, 1], [0.9, 1]);

  return (
    <motion.div 
      style={{ x, y, scale, opacity }} 
      className="group relative w-full"
      initial={{ opacity: 0.9 }}
    >
      <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 neon-glow w-full">
        <div className="aspect-[9/16] relative overflow-hidden rounded-2xl w-full min-h-[350px] sm:min-h-[400px] md:min-h-0">
          <video
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ display: 'block', visibility: 'visible' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="p-4 tracking-tight md:tracking-[-0.06em]">
          <h3 className="font-semibold text-foreground mb-2">
            {video.name}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium text-primary">
              {video.views} Views
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  // Scroll progress for only this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.2"], // smooth entry → exit
  });

  const videos: VideoItem[] = [
    { name: "Tradebymanish", views: "120K+", src: video1 },
    { name: "Drharshkanwar", views: "30K+", src: video2 },
    { name: "Mom'srecipe", views: "30K+", src: video3 },
    { name: "Tradebymanish", views: "121K+", src: video4 },
  ];

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20 font-helvetica"
    >
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            Our Work
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Content That{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Performs
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real creators. See how our editing drives views and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <ShowcaseCard
              key={index}
              video={video}
              index={index}
              total={videos.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
