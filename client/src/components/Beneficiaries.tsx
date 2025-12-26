import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import asianWoman from "@assets/generated_images/asian_woman_using_smart_cane_in_city.png";
import elderlyMan from "@assets/generated_images/smiling_elderly_man_in_park.png";
import techSavvy from "@assets/generated_images/tech_savvy_person_with_smart_device.png";

const beneficiaries = [
  {
    name: "陈女士",
    role: "视障用户",
    content: "障碍物检测功能彻底改变了我的生活。现在在繁忙的街道上行走，我感到前所未有的自信。特别是它能识别出我以前常撞到的悬空招牌。",
    avatar: "陈",
    image: asianWoman
  },
  {
    name: "张先生",
    role: "无障碍倡导者",
    content: "终于有一款辅助设备看起来像是现代科技产品，而不是医疗器械了。它的设计非常人性化，握感舒适，而且在公共场合使用也很体面。",
    avatar: "张",
    image: elderlyMan
  },
  {
    name: "李小姐",
    role: "早期体验官",
    content: "语音导航非常精准，感觉就像有一位向导在身边。而且手感非常轻盈，长时间使用也不会觉得累。电池续航也完全不用担心。",
    avatar: "李",
    image: techSavvy
  }
];

export default function Beneficiaries() {
  return (
    <section className="py-32 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">谁从中受益？</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {beneficiaries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-[2rem] overflow-hidden group">
                <div className="relative h-[280px] overflow-hidden">
                   <img 
                     src={item.image} 
                     alt={item.name}
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                   <div className="absolute bottom-6 left-6 text-white">
                     <p className="font-bold text-lg">{item.name}</p>
                     <p className="text-blue-200 text-sm">{item.role}</p>
                   </div>
                </div>
                
                <CardContent className="p-8 relative">
                   {/* Quote Icon */}
                   <div className="absolute -top-6 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white text-2xl font-serif">
                     "
                   </div>
                   
                   <p className="text-slate-600 text-lg leading-relaxed pt-2">
                     {item.content}
                   </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
