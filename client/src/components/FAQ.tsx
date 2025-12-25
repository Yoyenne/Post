import { HelpCircle, MessageCircle, PenTool, Search } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    icon: Search,
    q: "避障检测有多精准？",
    a: "LiDAR 传感器可在全黑环境下精准探测 5 米内 2cm 大小的障碍物。",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: PenTool,
    q: "设备防水吗？",
    a: "Smart Cane 达到 IP67 等级，可抵御雨水、泼溅及短时间浸泡。",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: MessageCircle,
    q: "需要手机吗？",
    a: "基础功能独立运行。GPS 导航需蓝牙连接手机 App。",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Search,
    q: "保修期是多久？",
    a: "2 年全面保修，覆盖所有制造缺陷和传感器故障。",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: PenTool,
    q: "电池续航如何？",
    a: "充满一次电可使用 7 天。支持 Type-C 快充。",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: MessageCircle,
    q: "有多重？",
    a: "仅 350g，航空级碳纤维材质，轻盈耐用。",
    color: "bg-indigo-100 text-indigo-600"
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Organic Curve Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 800" className="absolute top-0 w-full h-full opacity-30 text-slate-50 fill-current">
              <path d="M0,256L48,261.3C96,267,192,277,288,293.3C384,310,480,331,576,314.7C672,299,768,245,864,245.3C960,245,1056,299,1152,309.3C1248,320,1344,288,1392,272L1440,256V800H1392C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800H0V256Z"></path>
          </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            常见问题
            </h2>
            <p className="text-slate-500 text-lg">还有疑问？我们随时为您解答。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqData.map((item, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.q}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {item.a}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
