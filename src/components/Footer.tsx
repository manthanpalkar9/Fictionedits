import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-lg font-heading font-bold tracking-tight">
              FictionEdits <span className="text-primary">Media</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#showcase" className="hover:text-foreground transition-colors">
              Showcase
            </a>
            <a href="#process" className="hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          {/* Social */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-xl hover:scale-110 transition-transform neon-glow"
          >
            <Instagram className="w-5 h-5 text-primary" />
          </a>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border/30">
          © 2024 FictionEdits Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
