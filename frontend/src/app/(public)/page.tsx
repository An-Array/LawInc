import Capabilities from "@/components/landing/capabilities";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import FinalCta from "@/components/landing/landing-cta";
import QuoteSection from "@/components/landing/quote-section";
import TrustStrip from "@/components/landing/trust-strip";
import PublicNav from "@/components/navigation/public-nav";

export default function HomePage() {
  return (
    <main>
      <PublicNav/>
      <Hero />
      <Capabilities />
      <QuoteSection />
      <TrustStrip/>
      <FinalCta />
      <Footer />
    </main>
  );
}