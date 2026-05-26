import { HelpCircle, MessageCircle, PenTool, Search } from "lucide-react";

const faqData = [
  {
    icon: Search,
    q: "避障检测有多精准？",
    a: "LiDAR 传感器可在低光环境下精准探测 5 米内的障碍物，并给出及时反馈。",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: PenTool,
    q: "设备防水吗？",
    a: "云杖启明达到 IP67 等级，可抵御雨水、泼溅及短时间浸泡。",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    q: "需要连接手机吗？",
    a: "基础功能可独立运行；GPS 导航、定位共享等能力可通过手机 App 扩展使用。",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Search,
    q: "保修期是多久？",
    a: "提供 2 年整机保修服务，覆盖制造缺陷与核心传感器故障。",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: PenTool,
    q: "电池续航如何？",
    a: "充满一次电可使用约 7 天，并支持 Type-C 快充。",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    q: "重量是多少？",
    a: "整机约 350g，兼顾轻量化与日常耐用性。",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Search,
    q: "夜间使用安全吗？",
    a: "配备智能感光警示灯，可在昏暗环境中自动点亮，提升可见度。",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: PenTool,
    q: "固件如何更新？",
    a: "连接 App 后可进行 OTA 更新，持续获得新的功能和稳定性优化。",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    q: "有配色可选吗？",
    a: "目前提供极昼白与深空灰两种经典配色。",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24">
      <div className="container mx-auto mb-16 px-4 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <HelpCircle className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">常见问题解答</h2>
        <p className="text-lg text-slate-500">如果你还有疑问，我们也随时为你解答。</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="group grid h-[600px] grid-cols-1 gap-6 overflow-hidden mask-gradient-y md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused]">
            {[...faqData.slice(0, 3), ...faqData.slice(0, 3), ...faqData.slice(0, 3)].map((item, i) => (
              <FAQCard key={`c1-${i}`} item={item} />
            ))}
          </div>

          <div className="hidden flex-col gap-6 animate-marquee-vertical-reverse group-hover:[animation-play-state:paused] md:flex">
            {[...faqData.slice(3, 6), ...faqData.slice(3, 6), ...faqData.slice(3, 6)].map((item, i) => (
              <FAQCard key={`c2-${i}`} item={item} />
            ))}
          </div>

          <div className="hidden flex-col gap-6 animate-marquee-vertical group-hover:[animation-play-state:paused] lg:flex">
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

function FAQCard({ item }: { item: (typeof faqData)[number] }) {
  return (
    <div className="cursor-default rounded-[2rem] border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10">
      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}>
        <item.icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-800 transition-colors hover:text-blue-600">
        {item.q}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{item.a}</p>
    </div>
  );
}
