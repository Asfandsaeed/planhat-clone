export function Stats() {
  const items = [
    { value: "34%", label: "More customers per CSM", href: "#" },
    { value: "+300", label: "Hours saved annually per person", href: "#" },
    { value: "900%", label: "Seat expansion", href: "#" },
    { value: "21%", label: "Less Churn", href: "#" },
  ];

  return (
    <section className="border-t border-black/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#575551]">Services</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Don&apos;t buy hypotheticals. Buy outcomes.
          </h2>
          <p className="mt-4 text-[#575551]">
            Planhat dispatches forward-deployed teams that work shoulder-to-shoulder with you to deliver real-world outcomes.
          </p>
        </div>
        <div className="mb-8 flex justify-center gap-3">
          <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white">
            Operational efficiency
          </button>
          <button className="rounded-full border border-black/10 px-6 py-2 text-sm font-medium text-[#575551] transition-colors hover:text-black">
            Revenue impact
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((item) => (
            <a key={item.label} href={item.href} className="group rounded-2xl border border-black/10 p-8 transition-all hover:border-black/20">
              <div className="font-serif text-5xl md:text-6xl">{item.value}</div>
              <p className="mt-2 text-sm text-[#575551]">{item.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
