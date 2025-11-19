import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Process />
      <Features />

      {/* BOOK CALL SECTION */}
      <BookCall />

      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
