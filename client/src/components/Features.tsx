import { motion } from "framer-motion";
import { Shield, MapPin, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import lidarImage from "@assets/generated_images/lidar_sensor_abstract_visualization.png";
import voiceImage from "@assets/generated_images/voice_navigation_audio_waves.png";
import hapticImage from "@assets/generated_images/haptic_feedback_warning_visualization.png";

const features = [
  {
    icon: Shield,
    title: "智能避障",
    description: "先进的 LiDAR 传感器可瞬间识别路径中的障碍物。",
    color: "text-amber-500",
    bg: "bg-amber-50",
    image: lidarImage
  },
  {
    icon: MapPin,
    title: "语音导航",
    description: "全程语音指引，助您轻松抵达目的地。",
    color: "text-blue-500",
    bg: "bg-blue-50",
    image: voiceImage
  },
  {
    icon: Bell,
    title: "危险预警",
    description: "遇到危险区域时，通过触觉反馈及时提醒。",
    color: "text-red-500",
    bg: "bg-red-50",
    image: hapticImage
  }
];

export default function Features() {
  return (
    <section className="py-24 relative z-10 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">核心功能</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            精密传感器结合人工智能，只为给您提供更安全、更自信的行走体验。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-white border-none shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 rounded-3xl overflow-hidden group">
                <div className="h-48 overflow-hidden relative bg-slate-100">
                   <img 
                     src={feature.image} 
                     alt={feature.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-90"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>
                
                <CardHeader className="pt-8">
                  <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-slate-500 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
