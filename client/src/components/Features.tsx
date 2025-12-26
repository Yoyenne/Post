import { motion } from "framer-motion";
import { Shield, MapPin, Bell } from "lucide-react";
import lidarImage from "@assets/generated_images/close_up_of_smart_cane_lidar_sensor_in_use_outdoors.png";
import voiceImage from "@assets/generated_images/person_using_voice_navigation_with_headphones.png";
import hapticImage from "@assets/generated_images/smart_cane_handle_glowing_red_for_warning.png";

type FeatureItem = 
  | { type: "image"; image: string; alt: string; colSpan: string }
  | { type: "text"; icon: React.ElementType; title: string; description: string; bg: string; colSpan: string; accentColor: string };

const features: FeatureItem[] = [
  {
    type: "image",
    image: lidarImage,
    alt: "LiDAR 避障演示",
    colSpan: "col-span-1"
  },
  {
    type: "text",
    icon: Shield,
    title: "智能避障",
    description: "我们的 LiDAR 传感器每秒扫描数千次，可精准识别 5 米范围内的障碍物，无论是悬空的招牌还是地面的台阶，都能瞬间捕捉。",
    bg: "bg-teal-50",
    colSpan: "col-span-1",
    accentColor: "text-teal-600"
  },
  {
    type: "image",
    image: voiceImage,
    alt: "语音导航演示",
    colSpan: "col-span-1"
  },
  {
    type: "text",
    icon: MapPin,
    title: "语音导航",
    description: "无需分心看手机，通过骨传导耳机获得清晰的逐向导航指令。支持实时路况播报，让您对前方的每一步都了然于胸。",
    bg: "bg-blue-50",
    colSpan: "col-span-1",
    accentColor: "text-blue-600"
  },
  {
    type: "image",
    image: hapticImage,
    alt: "危险预警演示",
    colSpan: "col-span-1"
  },
  {
    type: "text",
    icon: Bell,
    title: "危险预警",
    description: "当检测到路口、施工区域或快速移动的车辆时，手柄会通过不同频率的震动及时提醒，为您构建一道隐形的安全屏障。",
    bg: "bg-orange-50",
    colSpan: "col-span-1",
    accentColor: "text-orange-600"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements to break monotony */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">核心功能</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            看得见的安全感，听得见的指引。
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-[2rem] overflow-hidden h-64 md:h-80 shadow-sm border border-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${item.colSpan}`}
            >
              {item.type === "image" ? (
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                </div>
              ) : (
                <div className={`w-full h-full p-8 flex flex-col justify-center items-center text-center ${item.bg} relative overflow-hidden`}>
                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className={`w-7 h-7 ${item.accentColor}`} />
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-slate-500 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Separator Transition to FAQ (White) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
         <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
         </svg>
      </div>
    </section>
  );
}
