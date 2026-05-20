import Image from "next/image";

const logos = [
  "/planhat-clone/images/logo-1.png",
  "/planhat-clone/images/logo-2.png",
  "/planhat-clone/images/logo-3.png",
];

const awards = [
  { src: "/planhat-clone/images/award-1.png", label: "G2 Leader" },
  { src: "/planhat-clone/images/award-2.png", label: "Gartner" },
  { src: "/planhat-clone/images/award-3.png", label: "IDC" },
  { src: "/planhat-clone/images/award-4.png", label: "G2 Momentum" },
];

export function TrustBar() {
  return (
    <section className="border-t border-black/10 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.15em] text-[#575551]">
          Recognized as a world-leader by
        </p>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
          {logos.map((src, i) => (
            <div key={i} className="relative h-8 w-28">
              <Image src={src} alt="" fill className="object-contain opacity-60" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {awards.map((award, i) => (
            <div key={i} className="relative h-16 w-full">
              <Image src={award.src} alt={award.label} fill className="object-contain" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[#575551]">
          880+ reviews — G2 Momentum Grid and Leader in 9 Categories.
        </p>
      </div>
    </section>
  );
}
