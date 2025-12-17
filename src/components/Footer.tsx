const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-2">
              <span className="text-accent">[Your Firm]</span> Costs
            </h3>
            <p className="text-primary-foreground/60 text-sm">
              Specialist Legal Costs Consulting
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#approach"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Our Approach
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} [Your Firm] Costs.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-xs text-center max-w-3xl mx-auto">
            The information provided on this website is for general informational 
            purposes only and does not constitute legal advice. Please contact us 
            directly to discuss your specific legal costing needs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
