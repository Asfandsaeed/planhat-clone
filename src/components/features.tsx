export function Features() {
  const items = [
    {
      title: "Assemble your GTM under one roof",
      description:
        "Arm your go-to-market agents, teams and tools with rich context that turns post-sale truth into pre-sales intelligence.",
      icon: "01",
    },
    {
      title: "Deploy agents with confidence",
      description:
        "Delegate processes to tightly governed agents which execute with greater speed and precision than humanly possible.",
      icon: "02",
    },
    {
      title: "Stay in-the-loop",
      description:
        "Give your team the capability to leverage, supervise and enhance agentic outputs at scale.",
      icon: "03",
    },
  ];

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Drive real-world outcomes by<br />automating commercial processes
          </h2>
          <p className="mt-4 text-[#575551]">
            A comprehensive platform that empowers artificial and human intelligence to
            collaborate seamlessly across the entire customer lifecycle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group rounded-3xl border border-black/10 p-8 transition-all hover:border-black/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2f2f2] text-sm font-medium text-[#575551]">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#575551]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
