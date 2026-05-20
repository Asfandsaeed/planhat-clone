export function CTASection() {
  return (
    <section className="border-t border-black/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <a href="#" className="group rounded-2xl border border-black/10 p-8 transition-all hover:border-black/20">
            <h3 className="font-serif text-2xl">Careers</h3>
            <p className="mt-2 text-sm text-[#575551]">
              Join the Mission — Planhat is hiring for 100+ high-impact roles in 2026.
            </p>
          </a>
          <a href="#" className="group rounded-2xl border border-black/10 p-8 transition-all hover:border-black/20">
            <h3 className="font-serif text-2xl">MCP Server</h3>
            <p className="mt-2 text-sm text-[#575551]">
              Planhat + Anthropic — Harness Planhat&apos;s full capabilities in natural language with Claude Code.
            </p>
          </a>
          <div className="rounded-2xl border border-black/10 p-8">
            <h3 className="font-serif text-2xl">Solve your commercial challenges</h3>
            <p className="mt-2 text-sm text-[#575551]">
              Speak to a Deployment Specialist. Book a call to learn how Planhat can automate and augment your commercial operations.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
