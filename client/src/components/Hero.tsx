import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Bell } from "lucide-react";
import generatedImage from "@assets/generated_images/futuristic_3d_glass_abstract_shape_placeholder.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Next Gen Mobility
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Smart Cane <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 glow-text">
                Vision Evolved.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience independence like never before with AI-powered obstacle detection, voice navigation, and real-time danger alerts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="rounded-2xl h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm">
              View Specs
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Product Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[3rem] blur-2xl transform group-hover:scale-105 transition-transform duration-700" />
          
          <div className="relative z-10 rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 aspect-square flex items-center justify-center overflow-hidden">
             {/* Placeholder UI */}
             <div className="absolute inset-0 border-[1px] border-dashed border-blue-500/30 rounded-[2.5rem] m-4 pointer-events-none" />
             
             <img 
               src={generatedImage} 
               alt="Product Hero Image" 
               className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-700 ease-in-out"
             />
             
             <div className="absolute bottom-8 right-8 bg-slate-950/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-blue-300">
                PRODUCT_HERO_RENDER_v1.0
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
