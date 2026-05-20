const stats = [
  {
    value: "34%",
    label: "More customers per CSM",
    href: "#",
    source: "firstup",
  },
  {
    value: "+300",
    label: "Hours saved annually per person",
    href: "#",
    source: "globaldata",
  },
  {
    value: "900%",
    label: "Seat expansion",
    href: "#",
    source: "continu",
  },
  {
    value: "21%",
    label: "Less Churn",
    href: "#",
    source: "macrobond",
  },
];

export function Stats() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Don&apos;t buy hypotheticals. Buy outcomes.
          </h2>
          <p className="mt-4 text-muted-text">
            Planhat dispatches forward-deployed teams that work shoulder-to-shoulder
            with you to deliver real-world outcomes.
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <button className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background">
            Operational efficiency
          </button>
          <button className="rounded-full px-6 py-2 text-sm font-medium text-muted-text transition-colors hover:text-foreground">
            Revenue impact
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              className="group rounded-2xl border border-border/40 p-8 transition-all hover:border-border"
            >
              <div className="font-serif text-5xl md:text-6xl">{stat.value}</div>
              <p className="mt-2 text-sm text-muted-text">{stat.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
