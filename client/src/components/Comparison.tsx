import { Check, X, Minus } from "lucide-react";

const comparisonData = [
  { feature: "LiDAR Obstacle Detection", us: true, competitor: false },
  { feature: "Voice Navigation", us: true, competitor: true },
  { feature: "24/7 Emergency Support", us: true, competitor: false },
  { feature: "Battery Life", us: "7 Days", competitor: "2 Days" },
  { feature: "Weight", us: "350g", competitor: "600g" },
  { feature: "Water Resistance", us: "IP67", competitor: "IP54" },
];

export default function Comparison() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Smart Cane?</h2>
          <p className="text-slate-400">See how we stack up against the competition.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-slate-900/60">
            <div className="text-slate-400 font-medium">Feature</div>
            <div className="text-center font-bold text-blue-400 text-lg">Smart Cane</div>
            <div className="text-center text-slate-500">Generic Cane</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                <div className="text-slate-200 font-medium">{row.feature}</div>
                
                {/* Us */}
                <div className="flex justify-center text-white">
                  {typeof row.us === "boolean" ? (
                    row.us ? <div className="bg-blue-500/20 p-1 rounded-full"><Check className="w-5 h-5 text-blue-400" /></div> : <X className="w-5 h-5 text-slate-600" />
                  ) : (
                    <span className="font-bold text-blue-400">{row.us}</span>
                  )}
                </div>

                {/* Competitor */}
                <div className="flex justify-center text-slate-500">
                  {typeof row.competitor === "boolean" ? (
                    row.competitor ? <Check className="w-5 h-5 text-slate-500" /> : <X className="w-5 h-5 text-slate-600" />
                  ) : (
                    <span>{row.competitor}</span>
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
