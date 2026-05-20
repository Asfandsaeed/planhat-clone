import { ArrowRight } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
            The Agentic Customer Platform
          </h1>
          <p className="mt-6 text-lg text-muted-text md:text-xl">
            Deploy AI with confidence across the customer lifecycle
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-text/80 md:text-base">
            Planhat provides B2B enterprises with forward-deployed software and
            services that deliver lifelong revenue growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Request a Demo
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-text">
          <span>Trusted by leading companies worldwide</span>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Discover our impact
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-flex animate-pulse items-center gap-2 text-sm font-medium text-muted-text"
          >
            discover
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
