import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Features } from "@/components/features";
import { PlatformCapabilities } from "@/components/platform-capabilities";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <PlatformCapabilities />
        <Stats />
        <Services />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
