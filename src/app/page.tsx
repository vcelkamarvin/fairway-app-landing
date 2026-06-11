import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DarkConversionBand } from "@/components/DarkConversionBand";
import { CaseStudy } from "@/components/CaseStudy";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { SetupSteps } from "@/components/SetupSteps";
import { Features } from "@/components/Features";
import { AppScreenShowcase } from "@/components/AppScreenShowcase";
import { RevenueEngine } from "@/components/RevenueEngine";
import { Pricing } from "@/components/Pricing";
import { Configurator } from "@/components/Configurator";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      <Hero />
      <DarkConversionBand />
      <CaseStudy />
      <VideoTestimonials />
      <SetupSteps />
      <Features />
      <AppScreenShowcase />
      <RevenueEngine />
      <Pricing />
      <Configurator />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
