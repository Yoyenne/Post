import { HelpCircle, MessageCircle, PenTool, Search } from "lucide-react";

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
  {
    icon: Search,
    q: "夜间使用安全吗？",
    a: "配备智能感光 LED 警示灯，在昏暗时自动亮起。",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: PenTool,
    q: "如何更新固件？",
    a: "连接 App 后会自动静默更新，确保最新体验。",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: MessageCircle,
    q: "有颜色选择吗？",
    a: "目前提供极昼白和深空灰两种经典配色。",
    color: "bg-indigo-100 text-indigo-600"
  }
];

export default function FAQ() {
  return (
    <section className="pt-12 pb-24 bg-white relative overflow-hidden"> {/* Reduced top padding */}
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
        {/* Waterfall / Marquee Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden mask-gradient-y group">
             {/* Column 1 - Downwards */}
             <div className="flex flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused]">
                {[...faqData.slice(0, 3), ...faqData.slice(0, 3), ...faqData.slice(0, 3)].map((item, i) => (
                   <FAQCard key={`c1-${i}`} item={item} />
                ))}
             </div>

             {/* Column 2 - Upwards */}
             <div className="flex flex-col gap-6 animate-marquee-vertical-reverse group-hover:[animation-play-state:paused] hidden md:flex">
                {[...faqData.slice(3, 6), ...faqData.slice(3, 6), ...faqData.slice(3, 6)].map((item, i) => (
                   <FAQCard key={`c2-${i}`} item={item} />
                ))}
             </div>

             {/* Column 3 - Downwards */}
             <div className="flex flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused] hidden lg:flex">
                {[...faqData.slice(6, 9), ...faqData.slice(6, 9), ...faqData.slice(6, 9)].map((item, i) => (
                   <FAQCard key={`c3-${i}`} item={item} />
                ))}
             </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes marquee-vertical-reverse {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 30s linear infinite;
        }
        .animate-marquee-vertical-reverse {
          animation: marquee-vertical-reverse 35s linear infinite;
        }
        .mask-gradient-y {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}

function FAQCard({ item }: { item: any }) {
  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-md hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 cursor-default">
       <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
            <item.icon className="w-5 h-5" />
       </div>
       <h3 className="text-lg font-bold text-slate-800 mb-2 transition-colors hover:text-blue-600">
         {item.q}
       </h3>
       <p className="text-slate-500 leading-relaxed text-sm">
         {item.a}
       </p>
    </div>
  );
}
