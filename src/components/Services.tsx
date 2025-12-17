import { FileText, Calculator, ClipboardCheck, Gavel, Briefcase, MessageSquare, Scale, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Short Form Costs Assessments",
    description: "Efficient assessments for straightforward matters, providing quick and cost-effective resolutions.",
  },
  {
    icon: FileText,
    title: "Itemised Costs Statements",
    description: "Detailed, comprehensive costs statements prepared with precision and attention to every billable item.",
  },
  {
    icon: ClipboardCheck,
    title: "Expert Reports",
    description: "Authoritative expert reports for litigation matters, prepared to the highest professional standards.",
  },
  {
    icon: Gavel,
    title: "Court-Appointed Costs Assessments",
    description: "Independent assessments as a court-appointed costs assessor across multiple jurisdictions.",
  },
  {
    icon: Briefcase,
    title: "Practice Management & Compliance",
    description: "Strategic advice on practice management and regulatory compliance for legal practices.",
  },
  {
    icon: MessageSquare,
    title: "Costs Mediations",
    description: "Facilitating resolution through skilled mediation in costs disputes between parties.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Costing Advice",
    description: "General strategic advice on costing matters to optimise your firm's billing practices.",
  },
  {
    icon: Scale,
    title: "Bills of Costs",
    description: "Professionally drafted bills of costs for party/party and solicitor/client matters.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Comprehensive Legal
            <br />
            <span className="gold-underline">Costs Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of legal costs consulting services, tailored to meet 
            the specific needs of law firms and their clients across Australia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
