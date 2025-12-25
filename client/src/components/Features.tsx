import { motion } from "framer-motion";
import { Shield, MapPin, Bell } from "lucide-react";
import lidarImage from "@assets/generated_images/lidar_sensor_abstract_visualization.png";
import voiceImage from "@assets/generated_images/voice_navigation_audio_waves.png";
import hapticImage from "@assets/generated_images/haptic_feedback_warning_visualization.png";

const features = [
  {
    icon: Shield,
    title: "智能避障",
    description: "先进的 LiDAR 传感器可瞬间识别路径中的障碍物。",
    image: lidarImage,
    accent: "bg-amber-500"
  },
  {
    icon: MapPin,
    title: "语音导航",
    description: "全程语音指引，助您轻松抵达目的地。",
    image: voiceImage,
    accent: "bg-blue-500"
  },
  {
    icon: Bell,
    title: "危险预警",
    description: "遇到危险区域时，通过触觉反馈及时提醒。",
    image: hapticImage,
    accent: "bg-red-500"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">核心功能</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            精密传感器结合人工智能，只为给您提供更安全、更自信的行走体验。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full flex flex-col">
                
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                   <img 
                     src={feature.image} 
                     alt={feature.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/10 group-hover:to-blue-900/20 transition-colors" />
                   
                   {/* Floating Icon */}
                   <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-slate-800" />
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col relative">
                   {/* Color accent line */}
                   <div className={`absolute top-0 left-8 right-8 h-1 rounded-full ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                   
                   <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                     {feature.title}
                   </h3>
                   <p className="text-slate-500 leading-relaxed text-lg">
                     {feature.description}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
