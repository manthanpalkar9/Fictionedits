import { Eye } from "lucide-react";
import video1 from "@/assets/videos/video1.mp4";
import video2 from "@/assets/videos/video2.mp4";
import video3 from "@/assets/videos/video3.mp4";
import video4 from "@/assets/videos/video4.mp4";

const Showcase = () => {
  const videos = [
    { name: "Tradebymanish", views: "120K+", src: video1 },
    { name: "Drharshkanwar", views: "30K+", src: video2 },
    { name: "Mom'srecipe", views: "30K+", src: video3 },
    { name: "Tradebymanish", views: "121K+", src: video4 },
  ];

  return (
    <section
      id="showcase"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-6">
            Content That{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Performs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real creators. See how our editing drives views
            and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 neon-glow">
                <div className="aspect-[9/16] relative overflow-hidden rounded-2xl">
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                <div className="p-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
