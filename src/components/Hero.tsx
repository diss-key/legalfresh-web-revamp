import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-secondary opacity-80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Gold accent line */}
      <div className="absolute left-0 top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up opacity-0">
            Specialist Legal Costs Consulting
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-8 animate-fade-in-up opacity-0 animation-delay-100">
            Expert Legal Costs
            <br />
            <span className="text-accent">Solutions</span> for Your Practice
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            With over two decades of experience in legal costing across Queensland 
            and New South Wales, we provide efficient, resolution-focused services 
            that deliver results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Button
              variant="hero"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="heroOutline"
              onClick={() => scrollToSection("#services")}
            >
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-border/50 animate-fade-in-up opacity-0 animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="font-heading text-4xl font-semibold text-foreground">20+</p>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-semibold text-foreground">QLD & NSW</p>
                <p className="text-muted-foreground text-sm mt-1">Jurisdictions</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-semibold text-foreground">1000+</p>
                <p className="text-muted-foreground text-sm mt-1">Cases Handled</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
