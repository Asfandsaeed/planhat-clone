import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { PlatformCapabilities } from "@/components/platform-capabilities";
import { Testimonials } from "@/components/testimonials";
import { Services } from "@/components/services";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <PlatformCapabilities />
        <Services />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
