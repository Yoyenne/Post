import { motion } from "framer-motion";
import { Shield, Leaf, Smartphone } from "lucide-react";
import asianWoman from "@assets/generated_images/asian_woman_using_smart_cane_in_city.png";
import techSavvy from "@assets/generated_images/tech_savvy_person_with_smart_device.png";
import warmSunlight from "@assets/generated_images/warm_sunlight_street_scene_with_smart_cane.png";

export default function Features() {
  return (
    <section className="py-24 bg-[#EAE8E4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">我们是谁</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            将前沿科技融入日常出行，我们致力于为视障群体创造一个可持续、无障碍的未来，同时减少环境足迹。
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Item 1: Image Left */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 rounded-[2rem] overflow-hidden relative group"
          >
            <img src={asianWoman} alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </motion.div>

          {/* Item 2: Center Card (Light) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 bg-[#F5F5F0] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-sm"
          >
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
               <Leaf className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-bold text-slate-800">环保与可持续</h3>
             <p className="text-slate-500 text-sm leading-relaxed">
               采用可回收碳纤维与生物基塑料制造，减轻重量的同时减少对地球的负担。
             </p>
          </motion.div>

          {/* Item 3: Image Right (Round) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 rounded-full overflow-hidden border-4 border-white shadow-xl"
          >
            <img src={techSavvy} alt="Tech Detail" className="w-full h-full object-cover" />
          </motion.div>

          {/* Item 4: Card (Dark/Accent) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-xl"
          >
             <Shield className="w-8 h-8 text-blue-400" />
             <div>
               <h3 className="text-2xl font-bold mb-2">隐私安全</h3>
               <p className="text-slate-400 text-sm">
                 本地化数据处理，您的出行轨迹仅留存于您的设备之中。
               </p>
             </div>
          </motion.div>

          {/* Item 5: Center Image (Wide) */}
          <motion.div 
             whileHover={{ scale: 0.98 }}
             className="md:col-span-2 rounded-[2rem] overflow-hidden relative group"
          >
             <img src={warmSunlight} alt="Environment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium flex items-center gap-2">
                   <Smartphone className="w-5 h-5" /> 智能互联生态
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
