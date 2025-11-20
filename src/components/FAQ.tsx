import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly does FictionEdits Media do?",
      answer:
        "We specialize in transforming raw video footage into high-retention, platform-optimized short-form content. Our team handles everything from editing and color grading to custom graphics and trend-aligned styling, ensuring your content performs at its peak.",
    },
    {
      question: "What platforms do you support?",
      answer:
        "We create content optimized for all major platforms including Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels. Each platform has unique requirements, and we tailor our edits accordingly to maximize performance.",
    },
    {
      question: "How many videos can I get per month?",
      answer:
        "Our packages range from 8 to 60+ videos per month, depending on your needs and growth goals. We offer flexible plans for creators at every stage, from emerging talents to established influencers.",
    },
    {
      question: "What is the typical turnaround time?",
      answer:
        "Most projects are delivered within 24–48 hours. For urgent requests, we offer priority processing with same-day delivery available on select plans.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Absolutely! We include unlimited revisions on all packages to ensure you're 100% satisfied with the final product. Your success is our priority.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-32 relative overflow-hidden font-helvetica"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-4 tracking-tight md:tracking-[-0.06em]">
              FAQ
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight md:tracking-[-0.06em] mb-6 leading-tight">
              Got{" "}
              <span className="text-glow bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground tracking-tight md:tracking-[-0.06em]">
              Everything you need to know about working with us.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0 tracking-tight md:tracking-[-0.06em]"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold tracking-tight md:tracking-[-0.06em]">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 tracking-tight md:tracking-[-0.06em]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
