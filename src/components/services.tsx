export function Services() {
  const cards = [
    {
      title: "Forward-deployed teams",
      description:
        "AI Deployment Program — Real-world commercial outcomes delivered at unprecedented speeds.",
      href: "#",
    },
    {
      title: "Process Automation Value Framework",
      description:
        "A system of processes architected to deliver commercial outcomes.",
      href: "#",
    },
    {
      title: "Planhat for Service-Intensive Software",
      description:
        "Continuously unlock the value your customers need. Planhat is a system of action that empowers you to define and track customer objectives, identify value opportunities, run collaborative cross-functional workflows, and report on ROI.",
      href: "#",
    },
  ];

  const industries = [
    "Service-Intensive Software",
    "Security",
    "IT Services",
    "Healthcare & Life Sciences",
    "Connected Businesses",
    "Business Services",
  ];

  return (
    <section className="border-t border-border/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-2xl border border-border/40 p-8 transition-all hover:border-border"
            >
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-text">
                {card.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sm font-medium text-muted-text">Industries</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-border/40 px-4 py-1.5 text-sm transition-colors hover:border-border"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
