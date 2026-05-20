import { Shield } from "@/components/icons";

const features = [
  {
    icon: Shield,
    title: "Assemble your GTM under one roof",
    description:
      "Arm your go-to-market agents, teams and tools with rich context that turns post-sale truth into pre-sales intelligence.",
  },
  {
    icon: Shield,
    title: "Deploy agents with confidence",
    description:
      "Delegate processes to tightly governed agents which execute with greater speed and precision than humanly possible.",
  },
  {
    icon: Shield,
    title: "Stay in-the-loop",
    description:
      "Give your team the capability to leverage, supervise and enhance agentic outputs at scale.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Drive real-world outcomes by automating commercial processes
          </h2>
          <p className="mt-4 text-muted-text">
            A comprehensive platform that empowers artificial and human
            intelligence to collaborate seamlessly across the entire customer
            lifecycle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/40 p-8 transition-all hover:border-border"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
