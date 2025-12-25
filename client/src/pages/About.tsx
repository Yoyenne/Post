import { motion } from "framer-motion";
import { ArrowRight, Heart, Eye, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/warm_sunlight_street_scene_with_smart_cane.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans selection:bg-sky-100">
      <Navbar />
      
      <main className="pt-20">
        {/* Section 1: Hero - Hope & Light */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src={heroImage} 
               alt="Warm sunlight street" 
               className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-[#F8FAFC]" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-sky-600 font-medium mb-6 shadow-sm">
                科技公益项目
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight drop-shadow-sm">
                科技，让视障<br className="hidden md:block" />不再是障碍
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                用有温度的技术，为每一位视障朋友点亮前行的路。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Origin Story */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50/50 skew-x-12 transform translate-x-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-4">
                   <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">初心：不忍视而不见</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-loose">
                  <p>
                    项目的起点，源于一次街头的偶遇。我们看到盲道被乱停的车辆占据，看到视障者在繁忙的十字路口无助徘徊，听到导盲犬被拒绝进入公共场所的无奈。
                  </p>
                  <p>
                    在这个万物互联的时代，科技不应只是锦上添花，更应是雪中送炭。我们决定，用我们最擅长的技术，为他们做点什么。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[2rem] border border-sky-100 shadow-xl shadow-sky-100/50 p-8 md:p-12"
              >
                 <div className="grid gap-8">
                    <div className="space-y-2">
                       <h3 className="text-5xl font-bold text-sky-500">2.85亿</h3>
                       <p className="text-slate-500 font-medium">全球视力受损人群</p>
                    </div>
                    <div className="h-px w-full bg-slate-100" />
                    <div className="space-y-2">
                       <h3 className="text-5xl font-bold text-sky-500">85%</h3>
                       <p className="text-slate-500 font-medium">出行面临安全隐患</p>
                    </div>
                    <div className="h-px w-full bg-slate-100" />
                    <div className="space-y-2">
                       <h3 className="text-5xl font-bold text-sky-500">1/10</h3>
                       <p className="text-slate-500 font-medium">拥有独立出行能力</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Tech Warmth */}
        <section className="py-32 bg-[#F8FAFC] relative">
          <div className="container mx-auto px-4 text-center">
             <motion.div
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={fadeIn}
               className="mb-16"
             >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">不仅仅是避障</h2>
               <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                 它不是冰冷的机器，而是一个有温度的感知者。每一次震动反馈，都是对安全的守护。
               </p>
             </motion.div>

             <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center">
                {/* Visual Metaphor for Sensors */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[600px] h-[600px] border border-sky-200/30 rounded-full animate-[ping_3s_ease-in-out_infinite] opacity-20" />
                   <div className="w-[500px] h-[500px] border border-sky-300/30 rounded-full animate-[ping_3s_ease-in-out_infinite_1s] opacity-30" />
                   <div className="w-[400px] h-[400px] border border-sky-400/30 rounded-full animate-[ping_3s_ease-in-out_infinite_2s] opacity-40" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10 w-full">
                   {[
                     { icon: Eye, title: "环境感知", desc: "毫秒级路况分析" },
                     { icon: Globe, title: "实时互联", desc: "连接城市大数据" },
                     { icon: Heart, title: "情感陪伴", desc: "语音助手时刻在线" }
                   ].map((item, idx) => (
                     <motion.div
                       key={idx}
                       whileHover={{ y: -10 }}
                       className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg shadow-sky-100/30 flex flex-col items-center gap-4 group"
                     >
                        <div className="w-16 h-16 bg-gradient-to-tr from-sky-50 to-white rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                           <item.icon className="w-8 h-8 text-sky-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                        <p className="text-slate-500">{item.desc}</p>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Section 4: Vision */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-sky-50 to-white rounded-[3rem] p-12 md:p-24 text-center border border-sky-100 shadow-2xl shadow-sky-100/50 relative overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                 
                 <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 tracking-tight">
                     为全球 <span className="text-sky-500">1700 万</span><br />
                     视障者重塑出行自由
                   </h2>
                   <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
                     这不仅仅是一个比赛项目，更是我们对“科技向善”最诚挚的承诺。我们相信，每个人都值得自由地探索这个美好的世界。
                   </p>
                   <button className="bg-sky-500 hover:bg-sky-600 text-white text-lg font-medium px-10 py-4 rounded-full shadow-lg shadow-sky-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto">
                      加入我们的愿景 <ArrowRight className="w-5 h-5" />
                   </button>
                 </div>
              </motion.div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
