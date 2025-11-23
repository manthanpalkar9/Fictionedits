"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const videos = [
  {
    src: "/showcase1.mp4",
    label: "TradeByManish",
    views: "120K+",
  },
  {
    src: "/showcase2.mp4",
    label: "Dr Harsh Kanwar",
    views: "30K+",
  },
  {
    src: "/showcase3.mp4",
    label: "Mom’s Recipe",
    views: "30K+",
  },
  {
    src: "/showcase4.mp4",
    label: "TradeByManish",
    views: "121K+",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative py-16 md:py-24 container mx-auto px-6"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        Real Work.{" "}
        <span className="text-primary glow">Real Results.</span>
      </h2>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm md:text-base">
        A sneak peek into the high-retention edits we’ve crafted for top
        creators and brands.
      </p>

      {/* Video Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {videos.map((v, i) => (
          <div
            key={i}
            className="bg-secondary/30 border border-primary/20 rounded-xl p-2 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <video
              src={v.src}
              className="rounded-lg w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            />

            <div className="mt-2 text-center">
              <p className="text-sm font-medium">{v.label}</p>
              <p className="text-xs text-primary">{v.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
