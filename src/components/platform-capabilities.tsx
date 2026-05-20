const applications = [
  {
    title: "Customer Success",
    href: "#",
    description: "Deploy Planhat as a CSP",
  },
  {
    title: "Sales & GTM",
    href: "#",
    description: "CRM capabilities",
  },
  {
    title: "Professional Services",
    href: "#",
    description: "PSA capabilities",
  },
  {
    title: "Custom build",
    href: "#",
    description: "Configure to your needs",
  },
];

const capabilities = [
  {
    title: "Dynamically score health",
    description:
      "Use analytics along with input from humans and AI to deploy adaptable scoring that gauges whether customers are truly thriving or failing.",
  },
  {
    title: "Capture every touchpoint",
    description:
      "Planhat automatically gathers transcripts, emails, tickets and every other interaction—allowing you to focus on execution, not admin.",
  },
  {
    title: "Sync seamlessly with Sales",
    description:
      "Use Planhat together with all major CRMs to ensure you get the full picture and move in sync with your entire organization.",
  },
];

const tabs = ["Context", "Training", "Collaboration", "Execution", "Agents", "Input"];

export function PlatformCapabilities() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-text">
            Platform
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Deploy with confidence
          </h2>
          <p className="mt-4 text-muted-text">
            Planhat is architected to equip agents and humans with everything
            they need to execute with clarity and control.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="rounded-full border border-border/40 px-5 py-2 text-sm font-medium transition-colors hover:border-border hover:bg-muted"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-text">
            APPLICATIONS
          </span>
          <p className="mt-2 max-w-2xl text-sm text-muted-text">
            One platform, built to power your reality
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {applications.map((app) => (
              <a
                key={app.title}
                href={app.href}
                className="rounded-2xl border border-border/40 p-6 transition-all hover:border-border"
              >
                <h3 className="font-medium">{app.title}</h3>
                <p className="mt-1 text-sm text-muted-text">{app.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-border/40 p-8"
            >
              <h3 className="font-medium">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-text">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
