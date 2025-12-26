import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import yoloImage from "@assets/generated_images/ai_computer_vision_visualization.png";
import voiceImage from "@assets/generated_images/ai_voice_assistant_visualization.png";
import gpsImage from "@assets/generated_images/geofencing_map_ui.png";

const features = [
  {
    title: "毫秒级边缘计算，实时预警障碍",
    description: "内置高性能树莓派 4B 与轻量化 YOLO 神经网络，通过视觉传感器实时捕捉 5 米内的动态目标。无论是低矮的台阶还是悬空的障碍物，识别准确率与响应速度均达到行业领先水平，为您提供无延迟的安全保障。",
    image: yoloImage,
    tag: "智慧感知"
  },
  {
    title: "不仅是导航，更是随行伴侣",
    description: "接入前沿大语言模型，支持自然语言多轮对话。您可以问它“附近哪有便利店？”或“前面是什么颜色的灯？”，它会以最人性化的口吻为您解答，如同贴心的朋友时刻相伴。",
    image: voiceImage,
    tag: "AI 语音助理"
  },
  {
    title: "隐形的守护，无障碍的边界",
    description: "监护人通过 App 实时掌握位置。当盲杖感应到进入监护人划定的“危险区”时，手柄将触发强烈震动警告，并同步推送预警信息至 App，构建全方位的安全闭环。",
    image: gpsImage,
    tag: "GPS 安全围栏"
  }
];

function FeatureCard({ item, index }: { item: typeof features[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center mb-32 last:mb-0`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/50 bg-white aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500">
           <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
           {/* Glass Overlay on Image */}
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-2">
          {item.tag}
        </div>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          {item.title}
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-32 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      
      {/* Transition to Dark Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden translate-y-[1px]">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
             <path fill="#020617" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
