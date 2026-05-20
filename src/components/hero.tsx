import Image from "next/image";
import { ArrowRight } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#121211] px-6 pb-32 pt-24 text-white md:pb-48 md:pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/planhat-clone/images/hero.webp"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121211]/60 via-[#121211]/40 to-[#121211]" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
          The Agentic Customer Platform
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
          Deploy AI with confidence<br />across the customer lifecycle
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          Planhat provides B2B enterprises with forward-deployed software and services
          that deliver lifelong revenue growth.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-[#121211] transition-opacity hover:opacity-90"
          >
            Request a Demo
          </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-white/60">
          <span>Trusted by leading companies worldwide</span>
          <a href="#" className="inline-flex items-center gap-1 font-medium text-white underline underline-offset-4">
            Discover our impact
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
