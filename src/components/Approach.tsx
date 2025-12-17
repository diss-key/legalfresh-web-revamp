import { Check } from "lucide-react";

const approaches = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a thorough understanding of your matter, reviewing all relevant documentation and discussing your specific requirements.",
  },
  {
    number: "02",
    title: "Strategic Assessment",
    description: "Our team conducts a detailed analysis to identify the most effective approach, considering all jurisdictional requirements and precedents.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description: "Throughout the process, we maintain open communication, providing regular updates and transparent fee estimates.",
  },
  {
    number: "04",
    title: "Efficient Resolution",
    description: "We focus on achieving the best possible outcome efficiently, leveraging our expertise to navigate complex costing matters.",
  },
];

const values = [
  "More than 20 years of legal costs consulting experience",
  "An efficient, resolution-focused mindset",
  "Pragmatic, balanced advice",
  "High standard of professional ethics",
  "Commitment to client satisfaction",
  "Transparent and competitive fee structures",
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">
            Our Approach
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            How We <span className="text-accent">Work</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our process is designed to deliver efficient, high-quality outcomes 
            while keeping you informed every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {approaches.map((approach, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < approaches.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
              )}
              
              <div className="text-accent font-heading text-5xl font-bold mb-4 opacity-30">
                {approach.number}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {approach.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-navy-light/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
            What We Provide
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/80">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
