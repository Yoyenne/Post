import { motion } from "framer-motion";
import { Shield, MapPin, Bell } from "lucide-react";
import lidarImage from "@assets/generated_images/close_up_of_smart_cane_lidar_sensor_in_use_outdoors.png";
import voiceImage from "@assets/generated_images/person_using_voice_navigation_with_headphones.png";
import hapticImage from "@assets/generated_images/smart_cane_handle_glowing_red_for_warning.png";

type FeatureItem = 
  | { type: "image"; image: string; alt: string; colSpan: string }
  | { type: "text"; icon: React.ElementType; title: string; description: string; bg: string; colSpan: string };

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
    bg: "bg-slate-50",
    colSpan: "col-span-1"
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
    bg: "bg-slate-50",
    colSpan: "col-span-1"
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
    bg: "bg-slate-50",
    colSpan: "col-span-1"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">核心功能</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6" />
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
              className={`rounded-3xl overflow-hidden h-64 md:h-80 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group ${item.colSpan}`}
            >
              {item.type === "image" ? (
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className={`w-full h-full p-8 flex flex-col justify-center items-center text-center ${item.bg} group-hover:bg-white transition-colors duration-300`}>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
