import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqData = [
  {
    q: "避障检测有多精准？",
    a: "我们的 LiDAR 传感器可以在各种光照条件下（包括全黑环境），精准探测 5 米范围内小至 2 厘米的障碍物，误报率极低。"
  },
  {
    q: "设备防水吗？",
    a: "是的，Smart Cane 达到 IP67 防水防尘等级，意味着它可以抵御雨水、泼溅，甚至短时间的浸泡，完全满足日常户外使用需求。"
  },
  {
    q: "需要连接手机使用吗？",
    a: "基础的避障功能可以独立运行。但如果需要使用 GPS 导航、紧急联系人呼叫等高级功能，需要通过蓝牙连接我们的免费手机 App。"
  },
  {
    q: "保修期是多久？",
    a: "我们提供为期 2 年的全面保修服务，覆盖所有制造缺陷和传感器故障。我们的售后团队将为您提供全程支持。"
  },
  {
    q: "电池续航如何？",
    a: "在正常使用情况下，充满一次电可持续使用长达 7 天。支持 Type-C 快速充电，30分钟即可充满 50%。"
  },
  {
    q: "有多重？",
    a: "整机重量仅为 350g，采用航空级碳纤维材质，长时间握持也不会感到疲劳。"
  },
  {
    q: "夜间使用安全吗？",
    a: "非常安全。手杖配备了智能感光 LED 警示灯，在光线昏暗时会自动亮起，提醒周围行人和车辆注意避让。"
  },
  {
    q: "如何更新固件？",
    a: "通过连接手机 App，固件会自动在后台静默更新，确保您始终拥有最新的功能和最优的算法体验。"
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          常见问题解答
        </h2>
        <p className="text-slate-500">还有疑问？我们随时为您解答。</p>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient-y h-[600px] group">
          {/* Vertical Marquee */}
          <div className="animate-marquee-vertical group-hover:[animation-play-state:paused] flex flex-col gap-6 w-full max-w-3xl mx-auto px-4">
             {/* Duplicate the data twice for seamless loop */}
             {[...faqData, ...faqData].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 cursor-default"
                >
                   <h3 className="text-lg font-bold text-slate-800 mb-2">{item.q}</h3>
                   <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40">
                      <p className="text-slate-500 pt-2 leading-relaxed">{item.a}</p>
                   </div>
                   {/* Fallback for non-hover state visual hint if needed, or keep it clean */}
                   <div className="text-blue-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      悬停查看详情
                   </div>
                </motion.div>
             ))}
          </div>
      </div>
      
      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 40s linear infinite;
        }
        .mask-gradient-y {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
