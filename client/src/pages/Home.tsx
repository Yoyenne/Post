import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
