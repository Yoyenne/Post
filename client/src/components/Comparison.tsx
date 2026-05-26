import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "LiDAR 避障技术", us: true, competitor: false },
  { feature: "智能语音导航", us: true, competitor: true },
  { feature: "24/7 紧急救援", us: true, competitor: false },
  { feature: "续航能力", us: "7 天", competitor: "2 天" },
  { feature: "重量", us: "350g", competitor: "600g" },
  { feature: "防水等级", us: "IP67", competitor: "IP54" },
];

export default function Comparison() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-5xl">为什么选择云杖启明？</h2>
          <p className="text-slate-500">看看我们与普通盲杖之间的体验差异。</p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-100">
          <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50/50 p-6">
            <div className="font-medium text-slate-500">功能特性</div>
            <div className="text-center text-lg font-bold text-blue-600">云杖启明</div>
            <div className="text-center text-slate-400">普通盲杖</div>
          </div>

          <div className="divide-y divide-slate-50">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 items-center p-6 transition-colors hover:bg-slate-50/50">
                <div className="font-medium text-slate-700">{row.feature}</div>

                <div className="flex justify-center text-slate-800">
                  {typeof row.us === "boolean" ? (
                    row.us ? (
                      <div className="rounded-full bg-blue-100 p-1.5">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                    ) : (
                      <X className="h-5 w-5 text-slate-400" />
                    )
                  ) : (
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                      {row.us}
                    </span>
                  )}
                </div>

                <div className="flex justify-center text-slate-400">
                  {typeof row.competitor === "boolean" ? (
                    row.competitor ? (
                      <Check className="h-5 w-5 text-slate-400" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300" />
                    )
                  ) : (
                    <span className="text-sm">{row.competitor}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
