export function PlatformCapabilities() {
  const items = [
    {
      title: "Context",
      desc: "Planhat constructs a comprehensive living model of your customers and commercial operations spanning traditional CRM data, rich time series data, SOPs and external telemetry.",
    },
    {
      title: "Training",
      desc: "Train AI agents on your unique processes, playbooks, and historical data to ensure they operate with your specific organizational knowledge.",
    },
    {
      title: "Collaboration",
      desc: "Bring humans and AI together in shared workflows, with clear handoffs, approvals, and escalation paths built into every process.",
    },
    {
      title: "Execution",
      desc: "Automate complex multi-step processes across the customer lifecycle with agents that execute consistently and at scale.",
    },
    {
      title: "Agents",
      desc: "Deploy specialized AI agents for specific domains — from health scoring to renewal management — each governed by your policies.",
    },
    {
      title: "Input",
      desc: "Ingest data from any source — CRM, support tickets, product usage, financial systems — to create a unified view of every customer.",
    },
  ];

  const apps = [
    { title: "Customer Success", desc: "Deploy Planhat as a CSP" },
    { title: "Sales & GTM", desc: "Sales CRM Software" },
    { title: "Professional Services", desc: "Professional Services Software" },
    { title: "Custom build", desc: "Configure to your needs" },
  ];

  const capCards = [
    {
      title: "Dynamically score health",
      desc: "Use analytics along with input from humans and AI to deploy adaptable scoring that gauges whether customers are truly thriving or failing.",
    },
    {
      title: "Capture every touchpoint",
      desc: "Planhat automatically gathers transcripts, emails, tickets and every other interaction—allowing you to focus on execution, not admin.",
    },
    {
      title: "Sync seamlessly with Sales",
      desc: "Use Planhat together with all major CRMs to ensure you get the full picture and move in sync with your entire organization.",
    },
  ];

  return (
    <section className="border-t border-black/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#575551]">Platform</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">Deploy with confidence</h2>
          <p className="mt-4 text-[#575551]">
            Planhat is architected to equip agents and humans with everything they need to execute with clarity and control.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <button
              key={item.title}
              className="group rounded-2xl border border-black/10 p-5 text-left transition-all hover:border-black/20"
            >
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-1 text-xs text-[#575551] line-clamp-2">{item.desc}</p>
            </button>
          ))}
        </div>

        <div className="mb-12 rounded-3xl bg-[#f5f5f5] p-8 md:p-12">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#575551]">Applications</span>
          <p className="mt-2 text-2xl font-serif md:text-3xl">One platform, built to power your reality</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {apps.map((app) => (
              <a key={app.title} href="#" className="rounded-2xl border border-black/10 bg-white p-6 transition-all hover:border-black/20">
                <h3 className="font-medium">{app.title}</h3>
                <p className="mt-1 text-sm text-[#575551]">{app.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {capCards.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-black/10 p-8">
              <h3 className="text-lg font-medium">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#575551]">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
