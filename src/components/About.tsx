import { Scale, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Specialist Legal Costs
              <br />
              <span className="gold-underline">Consulting</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                [Your Firm] Costs is a specialist legal costs consulting firm based in 
                Australia. Our principal costs lawyer possesses extensive experience in 
                legal practice, both as a solicitor and a court-appointed legal costs 
                consultant across multiple jurisdictions.
              </p>
              <p>
                We were established to provide specialised costing services to the 
                Australian legal market, bringing decades of expertise in legal costing. 
                Our key services include assessments, costs statements, bills of costs, 
                and written submissions—regularly provided in state and federal jurisdictions.
              </p>
              <p>
                Our reputation is built on integrity, common sense, and a balanced 
                approach to legal costs consulting. We are committed to providing 
                efficient, resolution-focused, pragmatic, and ethically sound advice 
                to all our clients.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid gap-6">
            <div className="bg-secondary/50 rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <Scale className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Extensive Experience
              </h3>
              <p className="text-muted-foreground">
                More than 20 years of legal costs consulting experience across 
                Queensland and New South Wales jurisdictions.
              </p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Resolution-Focused
              </h3>
              <p className="text-muted-foreground">
                An efficient, resolution-focused mindset that delivers pragmatic 
                outcomes for our clients.
              </p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Ethical Approach
              </h3>
              <p className="text-muted-foreground">
                Pragmatic, balanced advice grounded in integrity and professional 
                ethics at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
