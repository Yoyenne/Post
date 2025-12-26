import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  },
  {
    name: "王先生",
    role: "科技博主",
    content: "从技术角度来看，树莓派 5B 的边缘计算能力令人印象深刻。实时响应速度极快，完全没有感知延迟，这才是真正的 AI 落地应用。",
    avatar: "王",
    image: techSavvy
  }
];

export default function Beneficiaries() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="pt-24 pb-12 bg-white relative z-10"> {/* Reduced top/bottom padding for compactness */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">谁从中受益？</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-8">
            {beneficiaries.map((item, index) => (
              <div className="flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_40%] pl-8 min-w-0" key={index}>
                <Card className="h-[600px] bg-white border border-slate-100/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.1)] transition-all duration-500 rounded-[2.5rem] overflow-hidden group backdrop-blur-xl relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10 pointer-events-none" />
                   
                   <div className="flex flex-col h-full">
                      {/* Image - Top Half */}
                      <div className="relative h-[60%] overflow-hidden">
                         <img 
                           src={item.image} 
                           alt={item.name}
                           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                         <div className="absolute bottom-8 left-8 text-white z-20">
                           <p className="font-bold text-2xl mb-1">{item.name}</p>
                           <p className="text-blue-300 font-medium">{item.role}</p>
                         </div>
                      </div>
                      
                      {/* Content - Bottom Half */}
                      <CardContent className="flex-1 p-10 relative flex items-center bg-white/50 backdrop-blur-md">
                         {/* Quote Icon */}
                         <div className="absolute -top-8 right-10 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 text-white text-4xl font-serif z-20 group-hover:-translate-y-2 transition-transform duration-500">
                           "
                         </div>
                         
                         <p className="text-slate-600 text-lg leading-relaxed font-medium italic relative z-10">
                           {item.content}
                         </p>
                      </CardContent>
                   </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
