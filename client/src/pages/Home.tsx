import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import Beneficiaries from "@/components/Beneficiaries";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutSection />
        <Beneficiaries />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
