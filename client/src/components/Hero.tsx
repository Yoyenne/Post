import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import generatedImage from "@assets/generated_images/futuristic_3d_glass_abstract_shape_placeholder.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Warm Background */}
      <div className="absolute inset-0 z-0 bg-warm-gradient">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-slate-100/40 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
              温暖同行的科技
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-800 mb-6">
              智能手杖 <br />
              <span className="text-blue-600">
                重塑视界。
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              通过 AI 避障、语音导航和实时危险预警，为您带来前所未有的独立出行体验。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="default" className="rounded-2xl px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200">
              立即体验 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="default" className="rounded-2xl px-6 border-slate-200 bg-white/50 hover:bg-white text-slate-700 backdrop-blur-sm">
              了解规格
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Product Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Softer, lighter glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] blur-3xl transform group-hover:scale-105 transition-transform duration-700 opacity-60" />
          
          <div className="relative z-10 rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-lg shadow-2xl shadow-blue-900/5 p-8 aspect-square flex items-center justify-center overflow-hidden">
             {/* Placeholder UI */}
             <div className="absolute inset-0 border-[1px] border-dashed border-blue-200/50 rounded-[2.5rem] m-4 pointer-events-none" />
             
             <img 
               src={generatedImage} 
               alt="Product Hero Image" 
               className="w-full h-full object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply opacity-90"
             />
             
             <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-xs font-mono text-blue-600 shadow-sm">
                智能渲染_v1.0
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
