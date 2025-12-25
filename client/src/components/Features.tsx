import { motion } from "framer-motion";
import { Shield, MapPin, Bell, Activity, Wifi, Battery } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "智能避障",
    description: "先进的 LiDAR 传感器可瞬间识别路径中的障碍物。",
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    icon: MapPin,
    title: "语音导航",
    description: "全程语音指引，助您轻松抵达目的地。",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    icon: Bell,
    title: "危险预警",
    description: "遇到危险区域时，通过触觉反馈及时提醒。",
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    icon: Activity,
    title: "健康监测",
    description: "实时追踪步数、心率及行走稳定性。",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    icon: Wifi,
    title: "时刻互联",
    description: "无缝 5G 连接，支持紧急 SOS 呼救。",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    icon: Battery,
    title: "超长续航",
    description: "单次快充即可支持长达 7 天的使用。",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative z-10 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">核心功能</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            精密传感器结合人工智能，只为给您提供更安全、更自信的行走体验。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 rounded-2xl group overflow-hidden">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
