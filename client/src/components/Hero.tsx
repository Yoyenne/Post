import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import sleekCaneImage from "@assets/generated_images/sleek_white_smart_cane_isolated_on_white_background.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Harmonious Blue/White Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-50/60 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        {/* Main Title Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 mb-[-120px] lg:mb-[-180px] pointer-events-none"
        >
          <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight text-slate-800 drop-shadow-sm">
            智能盲杖 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              重塑视界
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 font-medium max-w-xl mx-auto">
            通过 AI 避障与语音导航，为您带来前所未有的独立出行体验
          </p>
        </motion.div>

        {/* Hero Image Layered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 w-full max-w-4xl mx-auto mt-24"
        >
          {/* Blend Mask at bottom to merge with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8FAFC] to-transparent z-20" />
          
          <img 
            src={sleekCaneImage} 
            alt="Smart Cane Product" 
            className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply" 
            style={{ maxHeight: "70vh" }}
          />
        </motion.div>

        {/* Interactive Elements floating above bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-20 z-30 flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 hover:scale-105 transition-transform">
              立即体验 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg border-white bg-white/60 hover:bg-white text-slate-700 backdrop-blur-md shadow-sm">
              了解更多
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
