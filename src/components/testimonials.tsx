import { Star } from "@/components/icons";

const testimonials = [
  {
    quote:
      "We have grown from an install base of 40 clients to just north of 280 clients that are managed digitally.",
    author: "William Pinho",
    title: "Director of Digital Customer Success Strategy",
    rating: 5,
    hasVideo: true,
  },
  {
    quote: "A perfect fit for our company and how we want to support our clients",
    author: "Casey",
    title: "VP Strategic Initiatives",
    rating: 5,
  },
  {
    quote: "Amazing CSP for agile teams",
    author: "Mélanie",
    title: "Global Customer Success Director",
    rating: 5,
  },
  {
    quote:
      "Unlocked levels of data visibility and automation I didn't think were possible in our environment.",
    author: "Japhet",
    title: "Senior Director of Customer Success Automation",
    rating: 5,
  },
  {
    quote: "Great system and customer service",
    author: "Luciano",
    title: "Director of Customer Success",
    rating: 5,
  },
  {
    quote:
      "Great tool for getting a 360 view of accounts in one place and making them actionable",
    author: "Petrina",
    title: "Director of Customer Success Operations",
    rating: 5,
  },
  {
    quote: "Success for your customer success team",
    author: "Brenda",
    title: "Customer Success",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Trusted by industry leaders
          </h2>
          <p className="mt-4 text-muted-text">
            880+ reviews on G2 — recognized as a global leader.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author + t.title}
              className="flex flex-col rounded-2xl border border-border/40 p-6"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-foreground" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-text">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-text">{t.title}</p>
                </div>
                {t.hasVideo && (
                  <button className="rounded-full border border-border/40 px-4 py-1.5 text-xs font-medium transition-colors hover:bg-muted">
                    Watch
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
