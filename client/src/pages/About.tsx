import { motion } from "framer-motion";
import { ArrowRight, Heart, Eye, Globe, Cpu, Shield, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/dark_blue_abstract_technology_background.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main className="pt-20">
        {/* Section 1: Hero - Dark & Immersive */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src={heroBg} 
               alt="Technology Background" 
               className="w-full h-full object-cover opacity-40 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block py-2 px-6 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-blue-300 font-medium mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                科技公益项目
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-xl leading-tight">
                科技，让视障<br className="hidden md:block" />不再是障碍
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                用有温度的技术，为每一位视障朋友点亮前行的路。
              </p>
            </motion.div>
          </div>

          {/* Bottom Curve Transition */}
          <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden z-20">
             <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
             </svg>
          </div>
        </section>

        {/* Section 2: Origin Story - Light Background */}
        <section className="py-24 bg-white relative overflow-hidden text-slate-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-lg shadow-blue-100">
                   <Heart className="w-7 h-7" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">初心：<br/>不忍视而不见</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    项目的起点，源于一次街头的偶遇。我们看到盲道被乱停的车辆占据，看到视障者在繁忙的十字路口无助徘徊。
                  </p>
                  <p>
                    在这个万物互联的时代，科技不应只是锦上添花，更应是雪中送炭。我们决定利用 <span className="text-blue-600 font-bold">树莓派 5B</span> 的强大算力，为他们打造一双“智慧之眼”。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-blue-100 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] p-10 md:p-14 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                 
                 <div className="grid gap-10 relative z-10">
                    <div className="space-y-2 group">
                       <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-105 transition-transform duration-300 origin-left">2.85亿</h3>
                       <p className="text-slate-500 font-medium text-lg">全球视力受损人群</p>
                    </div>
                    <div className="h-px w-full bg-slate-100" />
                    <div className="space-y-2 group">
                       <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-105 transition-transform duration-300 origin-left">85%</h3>
                       <p className="text-slate-500 font-medium text-lg">出行面临安全隐患</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Tech Warmth - Dark Background Transition */}
        <section className="py-32 bg-slate-950 relative overflow-hidden text-white">
          {/* Top Curve */}
          <div className="absolute top-0 left-0 w-full h-24 overflow-hidden rotate-180 z-20 translate-y-[1px]">
             <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
             </svg>
          </div>

          <div className="container mx-auto px-4 text-center relative z-20 pt-16">
             <motion.div
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={fadeIn}
               className="mb-20"
             >
               <h2 className="text-4xl md:text-6xl font-bold mb-6">不仅仅是避障</h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                 它不是冰冷的机器，而是一个有温度的感知者。<br/>每一次震动反馈，都是对安全的守护。
               </p>
             </motion.div>

             <div className="grid md:grid-cols-3 gap-8 relative z-10 w-full max-w-6xl mx-auto">
                {[
                  { icon: Eye, title: "环境感知", desc: "基于 YOLO 的毫秒级路况分析" },
                  { icon: Globe, title: "实时互联", desc: "连接城市大数据与 GPS 围栏" },
                  { icon: Heart, title: "情感陪伴", desc: "大语言模型语音助手时刻在线" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center gap-6 group hover:bg-white/10 transition-all duration-300"
                  >
                     <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/10">
                        <item.icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                     </div>
                     <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                     <p className="text-slate-400 font-medium">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Section 4: Vision - Gradient Card */}
        <section className="py-24 bg-slate-950 pb-32">
           <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-2xl rounded-[3rem] p-12 md:p-24 text-center border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] relative overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                 <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
                 
                 <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                     为全球 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">1700 万</span><br />
                     视障者重塑出行自由
                   </h2>
                   <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                     这不仅仅是一个项目，更是我们对“科技向善”最诚挚的承诺。<br/>我们相信，每个人都值得自由地探索这个美好的世界。
                   </p>
                   <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30">
                      加入我们的愿景 <ArrowRight className="w-5 h-5 ml-2" />
                   </Button>
                 </div>
              </motion.div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
