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
  },
  {
    q: "支持哪些语言？",
    a: "目前支持中文、英语、日语和西班牙语的语音播报。"
  },
  {
    q: "可以试用吗？",
    a: "我们提供 30 天无理由退货服务，您可以放心在家试用。"
  },
  {
    q: "哪里可以维修？",
    a: "全国主要城市均设有授权服务中心，或可使用我们的快递寄修服务。"
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden mask-gradient-y group">
             {/* Column 1 - Downwards */}
             <div className="flex flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused]">
                {[...faqData.slice(0, 4), ...faqData.slice(0, 4)].map((item, i) => (
                   <FAQCard key={`c1-${i}`} item={item} />
                ))}
             </div>

             {/* Column 2 - Upwards (Slower) */}
             <div className="flex flex-col gap-6 animate-marquee-vertical-reverse group-hover:[animation-play-state:paused] hidden md:flex">
                {[...faqData.slice(4, 8), ...faqData.slice(4, 8)].map((item, i) => (
                   <FAQCard key={`c2-${i}`} item={item} />
                ))}
             </div>

             {/* Column 3 - Downwards */}
             <div className="flex flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused] hidden lg:flex">
                {[...faqData.slice(8, 12), ...faqData.slice(8, 12)].map((item, i) => (
                   <FAQCard key={`c3-${i}`} item={item} />
                ))}
             </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-vertical-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 40s linear infinite;
        }
        .animate-marquee-vertical-reverse {
          animation: marquee-vertical-reverse 45s linear infinite;
        }
        .mask-gradient-y {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}

function FAQCard({ item }: { item: { q: string, a: string } }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300 cursor-default">
       <h3 className="text-lg font-bold text-slate-800 mb-3 transition-colors hover:text-blue-600">
         {item.q}
       </h3>
       <p className="text-slate-500 leading-relaxed text-sm">
         {item.a}
       </p>
    </div>
  );
}
