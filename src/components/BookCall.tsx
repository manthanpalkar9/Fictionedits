const BOOKING_URL = "https://calendly.com/manthanpalkar9/30min";

const BookCall = () => {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4">
            Book a Strategy Call
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Let's Discuss Your{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Content Plan
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose a time that works best for you. On the call, we'll review your
            goals, niche, and editing style to build the perfect content system for you.
          </p>
        </div>

        {/* Embedded Calendar */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl shadow-lg overflow-hidden">
          <iframe
            src={BOOKING_URL}
            title="Manthan Palkar — Book a Call"
            className="w-full"
            style={{ minHeight: "700px" }}
            frameBorder="0"
            loading="lazy"
          />
        </div>

        {/* Fallback button */}
        <div className="text-center mt-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Open Calendar in New Tab
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
