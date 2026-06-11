import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CaseStudy } from "@/components/CaseStudy";
import { Features } from "@/components/Features";
import { SetupSteps } from "@/components/SetupSteps";
import { DarkConversionBand } from "@/components/DarkConversionBand";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      <Hero />
      <CaseStudy />
      <Features />
      <SetupSteps />
      <DarkConversionBand />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
