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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">为什么选择 Smart Cane？</h2>
          <p className="text-slate-500">看看我们与普通产品的区别。</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-3 p-6 border-b border-slate-100 bg-slate-50/50">
            <div className="text-slate-500 font-medium">功能特性</div>
            <div className="text-center font-bold text-blue-600 text-lg">Smart Cane</div>
            <div className="text-center text-slate-400">普通盲杖</div>
          </div>
          
          <div className="divide-y divide-slate-50">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 hover:bg-slate-50/50 transition-colors items-center">
                <div className="text-slate-700 font-medium">{row.feature}</div>
                
                {/* Us */}
                <div className="flex justify-center text-slate-800">
                  {typeof row.us === "boolean" ? (
                    row.us ? <div className="bg-blue-100 p-1.5 rounded-full"><Check className="w-5 h-5 text-blue-600" /></div> : <X className="w-5 h-5 text-slate-400" />
                  ) : (
                    <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">{row.us}</span>
                  )}
                </div>

                {/* Competitor */}
                <div className="flex justify-center text-slate-400">
                  {typeof row.competitor === "boolean" ? (
                    row.competitor ? <Check className="w-5 h-5 text-slate-400" /> : <X className="w-5 h-5 text-slate-300" />
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
