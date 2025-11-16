import { Eye } from "lucide-react";

const Showcase = () => {
  const videos = [
    { name: "Tech Review Series", views: "500K+" },
    { name: "Fitness Journey", views: "350K+" },
    { name: "Gaming Highlights", views: "1.2M+" },
    { name: "Cooking Tutorial", views: "280K+" },
  ];

  return (
    <section id="showcase" className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
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
            Real results from real creators. See how our editing drives views and engagement.
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
                {/* Video mockup - vertical aspect ratio */}
                <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                  
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Video info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{video.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium text-primary">{video.views} Views</span>
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
