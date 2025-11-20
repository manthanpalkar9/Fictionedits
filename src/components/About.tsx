const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden font-helvetica"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          {/* Tag */}
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4 tracking-tight md:tracking-[-0.06em]">
            Introducing FictionEdits Media
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight md:tracking-[-0.06em] leading-tight">
            We Turn Raw Recordings Into{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Exceptional Content
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto tracking-tight md:tracking-[-0.06em]">
            In today's creator economy, content quality defines success. We
            specialize in transforming raw footage into high-retention,
            platform-optimized short-form content that captures attention and
            drives engagement. Our editing style combines cutting-edge trends
            with proven retention strategies, ensuring your content stands out
            in crowded feeds.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { number: "50+", label: "Clients Served" },
              { number: "500+", label: "Videos Edited" },
              { number: "10M+", label: "Total Views Generated" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 tracking-tight md:tracking-[-0.06em]"
              >
                <div className="text-4xl md:text-5xl font-bold text-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
