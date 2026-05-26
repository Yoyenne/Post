import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-slate-50 py-32 text-slate-900">
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-[120px]" />

      <div className="container relative z-20 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative space-y-8">
            <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-white/40 blur-3xl" />

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-tight text-[#1E293B] md:text-6xl"
            >
              让科技
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                更有温度
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-medium leading-relaxed text-slate-700"
            >
              我们不仅是在打造一款智能出行工具，更是在构建一个更友好、更安心的无障碍未来。
              通过将 AI 视觉能力、实时反馈和稳定硬件结合在一起，云杖启明致力于让每一次出行都更从容。
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              {[
                "超低延迟边缘计算架构",
                "IP67 级防水防尘设计",
                "持续进化的 OTA 固件更新",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2.5rem] border border-white/40 bg-white/60 p-10 shadow-2xl transition-shadow duration-500 hover:shadow-blue-200/50"
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 animate-pulse rounded-full bg-blue-500 opacity-20 blur-2xl" />

              <h3 className="mb-6 text-2xl font-bold text-[#1E293B]">我们的使命</h3>
              <p className="mb-6 font-medium leading-relaxed text-slate-600">
                "赋能每一位视障朋友，重新获得独立探索世界的自由与尊严。"
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white shadow-lg">
                  云
                </div>
                <div>
                  <div className="font-bold text-[#1E293B]">云杖启明团队</div>
                  <div className="text-sm text-slate-500">Since 2024</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-24 w-full translate-y-[1px] overflow-hidden">
        <svg viewBox="0 0 1440 320" className="h-full w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
