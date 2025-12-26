import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/dark_blue_abstract_technology_background.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90" />
      </div>

      {/* Tech Flow Animation Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Moving Gradient Orbs */}
         <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-blob" />
         <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
         
         {/* Abstract Data Lines - Simulated with CSS */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"></div>
         
         {/* Floating Particles/Data Points */}
         <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-[2px] animate-float opacity-40"></div>
         <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-indigo-400 rounded-full blur-[4px] animate-float animation-delay-1000 opacity-30"></div>
         <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] animate-float animation-delay-3000 opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-blue-200 font-medium text-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              下一代视觉辅助技术
            </div>
          </motion.div>

          <div className="relative inline-block">
             <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-125 opacity-30" />
             <motion.h1
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-10 text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-200 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
             >
               智能盲杖 <br className="md:hidden" />
               <span className="text-white drop-shadow-md">重塑视界</span>
             </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed relative"
          >
            <span className="absolute inset-0 bg-slate-950/30 blur-xl -z-10 rounded-full"></span>
            <span className="relative z-10">融合边缘计算与生成式 AI，为您重塑感官边界。<br className="hidden md:block" />每一次前行，都是科技赋予的自由。</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-white/10 hover:scale-105 transition-all duration-300">
              立即探索 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-base bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              观看演示视频
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Transition - Large Curve */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-48 overflow-hidden z-20">
         <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
         </svg>
      </div>
    </section>
  );
}
