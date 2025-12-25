import { motion } from "framer-motion";
import { ArrowRight, Shield, Leaf, Zap, Droplets } from "lucide-react";
import generatedImage from "@assets/generated_images/futuristic_3d_glass_abstract_shape_placeholder.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FDFBF7] pt-20">
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
          
          {/* Left: Typography & Main CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
                Smart <br />
                <span className="italic font-serif font-light text-blue-600">Cane</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-md leading-relaxed">
                将人工智能转化为您的第二双眼睛。我们通过科技创新，为您创造可持续的独立未来，同时减少出行障碍。
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex items-center gap-4"
            >
              <Button className="rounded-full h-14 px-8 text-white bg-slate-900 hover:bg-slate-800 text-base">
                查看产品
              </Button>
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 cursor-pointer hover:bg-orange-200 transition-colors">
                 <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>
          </div>

          {/* Center: Main Product Image */}
          <div className="lg:col-span-4 relative flex items-center justify-center z-10">
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-full aspect-[3/4]"
             >
                {/* Abstract shape or product cutout would go here */}
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
                <img 
                  src={generatedImage} 
                  alt="Smart Cane Product" 
                  className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                />
             </motion.div>
          </div>

          {/* Right: Feature List */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-12 pl-8 lg:border-l border-slate-200/60">
             {[
               { icon: Shield, title: "智能避障", sub: "LiDAR 全向感知" },
               { icon: Zap, title: "超长续航", sub: "7 天无忧使用" },
               { icon: Leaf, title: "环保材质", sub: "碳纤维轻量化" },
               { icon: Droplets, title: "IP67 防水", sub: "全天候防护" }
             ].map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                 className="group flex items-center justify-between border-b border-slate-100 pb-4 cursor-pointer"
               >
                 <div>
                   <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                   <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
                 </div>
                 <item.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
