import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/transparent_background_white_smart_cane_product_shot.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Dynamic Background Shapes - Stronger Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-sky-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="text-left space-y-8 pl-4 lg:pl-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 font-semibold text-sm mb-6 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                温暖同行的科技
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight">
                智能盲杖 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  重塑视界
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 font-medium max-w-lg mt-6 leading-relaxed">
                通过 AI 避障与语音导航，为您带来前所未有的独立出行体验。每一次出行，都是一次自信的探索。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row gap-4"
            >
              <Button size="default" className="rounded-2xl h-12 px-6 text-base bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200 hover:-translate-y-1 transition-all duration-300">
                立即体验 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" size="default" className="rounded-2xl h-12 px-6 text-base text-slate-700 hover:bg-white/50 hover:text-blue-700 border-2 border-transparent hover:border-blue-100 transition-all duration-300">
                了解更多
              </Button>
            </motion.div>
          </div>

          {/* Right: Product Image - Clean & Isolated */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center lg:justify-end"
          >
             {/* Removed background shape for pure isolation */}
             
             <img 
               src={heroImage} 
               alt="Smart Cane Product" 
               className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
               style={{ mixBlendMode: 'normal' }} 
             />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
