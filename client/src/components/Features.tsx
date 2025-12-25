import { motion } from "framer-motion";
import { Shield, MapPin, Bell, Activity, Wifi, Battery } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Obstacle Detection",
    description: "Advanced LiDAR sensors identify obstacles in your path instantly.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: MapPin,
    title: "Voice Navigation",
    description: "Turn-by-turn audio guidance to help you reach your destination.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Bell,
    title: "Danger Alerts",
    description: "Haptic feedback warns you of approaching danger zones.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Tracks steps, heart rate, and stability in real-time.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Wifi,
    title: "Always Connected",
    description: "Seamless 5G connectivity for emergency SOS calls.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "Up to 7 days of usage on a single rapid charge.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Engineered with precision sensors and AI to provide a safer, more confident walking experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-white/5 hover:bg-slate-800/80 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl group overflow-hidden">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl pointer-events-none transition-colors duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
