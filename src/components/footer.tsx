const footerColumns = [
  {
    title: "About",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Data", href: "#" },
      { label: "Intelligence", href: "#" },
      { label: "Collaboration", href: "#" },
      { label: "Action", href: "#" },
      { label: "Governance", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales CRM Software", href: "#" },
      { label: "Customer Success Platform", href: "#" },
      { label: "Professional Services Software", href: "#" },
      { label: "Customer Success RFP Template", href: "#" },
      { label: "AI Deployment", href: "#" },
      { label: "Cisco 360", href: "#" },
      { label: "Processes", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "#" },
      { label: "Editorial", href: "#" },
      { label: "Events", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Developers", href: "#" },
    ],
  },
  {
    title: "Customers",
    links: [
      { label: "Our Impact", href: "#" },
      { label: "Planhat for Enterprise", href: "#" },
      { label: "Planhat for Scale Ups", href: "#" },
      { label: "Planhat for Start Ups", href: "#" },
      { label: "Planhat for SaaS", href: "#" },
      { label: "Planhat for IT", href: "#" },
      { label: "Planhat for Security", href: "#" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "What Is Customer Success?", href: "#" },
      { label: "Customer Success Software", href: "#" },
      { label: "Customer Health Score", href: "#" },
      { label: "Customer Success Playbooks", href: "#" },
      { label: "Customer Success metrics", href: "#" },
      { label: "AI in Customer Success", href: "#" },
      { label: "Lifecycle Management", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 pb-8 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-text">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-text transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-xs text-muted-text">
            &copy; 2026 Planhat inc.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-text">
            <a href="#" className="hover:text-foreground">
              Status
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Brand Guidelines
            </a>
            <a
              href="https://www.linkedin.com/company/planhat"
              className="hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
