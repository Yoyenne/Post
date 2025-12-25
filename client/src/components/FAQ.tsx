import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    q: "避障检测有多精准？",
    a: "我们的 LiDAR 传感器可以在各种光照条件下（包括全黑环境），精准探测 5 米范围内小至 2 厘米的障碍物，误报率极低。"
  },
  {
    q: "设备防水吗？",
    a: "是的，Smart Cane 达到 IP67 防水防尘等级，意味着它可以抵御雨水、泼溅，甚至短时间的浸泡。"
  },
  {
    q: "需要连接手机使用吗？",
    a: "基础功能可独立运行。但高级功能如 GPS 导航需要蓝牙连接手机 App。"
  },
  {
    q: "保修期是多久？",
    a: "我们提供为期 2 年的全面保修服务，覆盖所有制造缺陷和传感器故障。"
  },
  {
    q: "电池续航如何？",
    a: "充满一次电可持续使用长达 7 天。支持 Type-C 快速充电。"
  },
  {
    q: "有多重？",
    a: "整机重量仅为 350g，采用航空级碳纤维材质。"
  },
  {
    q: "夜间使用安全吗？",
    a: "配备智能感光 LED 警示灯，在昏暗时自动亮起。"
  },
  {
    q: "如何更新固件？",
    a: "连接 App 后会自动静默更新，确保最新体验。"
  },
  {
    q: "有颜色选择吗？",
    a: "目前提供极昼白和深空灰两种经典配色。"
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 mb-16 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          常见问题解答
        </h2>
        <p className="text-slate-500 text-lg">还有疑问？我们随时为您解答。</p>
      </div>

      <div className="container mx-auto px-4">
        {/* Masonry Layout using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {faqData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300 group cursor-default">
                 <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                   {item.q}
                 </h3>
                 <p className="text-slate-500 leading-relaxed">
                   {item.a}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
