import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-32 bg-slate-950 text-white relative z-10 overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="text-4xl md:text-6xl font-bold leading-tight"
             >
               让科技<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                 拥有温度
               </span>
             </motion.h2>

             <motion.p 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-lg text-slate-400 leading-relaxed"
             >
               我们不仅仅是在制造一个工具，更是在构建一个无障碍的未来。通过将顶尖的 AI 视觉算法与即时反馈系统相结合，我们致力于消除视障人士出行中的每一个不确定性，让每一次迈步都充满安全感。
             </motion.p>

             <motion.ul 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="space-y-4 pt-4"
             >
               {[
                 "超低延迟边缘计算架构",
                 "军工级耐用性与防水设计",
                 "持续进化的 OTA 固件更新"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-300">
                   <CheckCircle2 className="w-6 h-6 text-blue-500" />
                   <span className="text-lg">{item}</span>
                 </li>
               ))}
             </motion.ul>
          </div>

          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl"
             >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                
                <h3 className="text-2xl font-bold mb-6">我们的使命</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  "赋能每一位视障朋友，重获独立探索世界的自由与尊严。"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-xl">
                    S
                  </div>
                  <div>
                    <div className="font-bold">Smart Cane Team</div>
                    <div className="text-sm text-slate-500">Since 2024</div>
                  </div>
                </div>
             </motion.div>
             
             {/* Decorative grid behind */}
             <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
          </div>

        </div>
      </div>
      
       {/* Transition to Light Section */}
       <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden translate-y-[1px]">
         <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
       </div>
    </section>
  );
}
