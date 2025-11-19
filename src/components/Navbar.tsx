import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="text-xl font-heading font-bold tracking-tight">
            FictionEdits <span className="text-primary">Media</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Showcase
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>

        <Button variant="neon" size="lg" asChild>
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
