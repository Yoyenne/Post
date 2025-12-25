import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import asianWoman from "@assets/generated_images/asian_woman_using_smart_cane_in_city.png";
import elderlyMan from "@assets/generated_images/smiling_elderly_man_in_park.png";
import techSavvy from "@assets/generated_images/tech_savvy_person_with_smart_device.png";
import friendsWalking from "@assets/generated_images/group_of_friends_walking.png";

const testimonials = [
  {
    name: "陈女士",
    role: "视障用户",
    content: "障碍物检测功能彻底改变了我的生活。现在在繁忙的街道上行走，我感到前所未有的自信。",
    avatar: "陈",
    image: asianWoman
  },
  {
    name: "张先生",
    role: "无障碍倡导者",
    content: "终于有一款辅助设备看起来像是现代科技产品，而不是医疗器械了。设计非常人性化。",
    avatar: "张",
    image: elderlyMan
  },
  {
    name: "李小姐",
    role: "早期体验官",
    content: "语音导航非常精准，感觉就像有一位向导在身边。而且手感非常轻盈。",
    avatar: "李",
    image: techSavvy
  },
  {
    name: "王大爷",
    role: "老年用户",
    content: "简单易用，轻便，电池也特别耐用。强烈推荐给需要辅助的老年朋友。",
    avatar: "王",
    image: friendsWalking
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-12 text-center">
          谁从中受益？
        </h2>
        
        <div className="overflow-hidden py-8" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, index) => (
              <div className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] pl-6" key={index}>
                <Card className="bg-white border-none shadow-xl shadow-slate-200/50 h-full rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                       <img 
                         src={item.image} 
                         alt={item.name}
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    {/* Content Section */}
                    <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
                      <div className="absolute top-8 right-8 opacity-10 text-6xl font-serif text-blue-600 font-bold leading-none">
                        "
                      </div>
                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
                        "{item.content}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar className="h-12 w-12 border-2 border-blue-100 bg-blue-50">
                          <AvatarFallback className="text-blue-600 font-bold">{item.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-slate-900 font-bold text-lg">{item.name}</p>
                          <p className="text-blue-600 font-medium text-sm">{item.role}</p>
                        </div>
                      </div>
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
