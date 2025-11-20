import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 font-helvetica">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight md:tracking-[-0.06em]">F</span>
          </div>

          <span className="text-xl font-bold tracking-tight md:tracking-[-0.06em]">
            FictionEdits <span className="text-primary">Media</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tight md:tracking-[-0.06em]"
          >
            About
          </a>

          <a
            href="#showcase"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tight md:tracking-[-0.06em]"
          >
            Showcase
          </a>

          <a
            href="#process"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tight md:tracking-[-0.06em]"
          >
            Process
          </a>

          <a
            href="#faq"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-tight md:tracking-[-0.06em]"
          >
            FAQ
          </a>
        </div>

        {/* CTA Button */}
        <Button
          variant="neon"
          size="lg"
          asChild
          className="tracking-tight md:tracking-[-0.06em] font-helvetica"
        >
          <a
            href="https://calendly.com/manthanpalkar9/let-s-work"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </Button>

      </div>
    </nav>
  );
};

export default Navbar;
