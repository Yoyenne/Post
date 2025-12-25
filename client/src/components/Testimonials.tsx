import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Visually Impaired User",
    content: "The obstacle detection is a game changer. I feel so much more confident walking alone in busy city streets.",
    avatar: "SC"
  },
  {
    name: "Marcus Johnson",
    role: "Accessibility Advocate",
    content: "Finally, a mobility aid that feels like a piece of modern technology rather than a medical device.",
    avatar: "MJ"
  },
  {
    name: "Elara Vance",
    role: "Early Adopter",
    content: "The voice navigation is incredibly accurate. It's like having a guide right next to me.",
    avatar: "EV"
  },
  {
    name: "David Kim",
    role: "Senior User",
    content: "Simple to use, lightweight, and the battery lasts forever. Highly recommended for seniors.",
    avatar: "DK"
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Who Benefits?
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((item, index) => (
              <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4" key={index}>
                <Card className="bg-slate-900 border-white/5 h-full rounded-2xl hover:bg-slate-800 transition-colors">
                  <CardContent className="p-8 flex flex-col gap-6">
                    <p className="text-slate-300 leading-relaxed italic">"{item.content}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar className="h-10 w-10 border border-blue-500/30">
                        <AvatarFallback className="bg-blue-900 text-blue-200">{item.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-slate-500 text-sm">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
