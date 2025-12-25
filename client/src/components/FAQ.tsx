import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FAQ() {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            常见问题解答
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            我们整理了关于 Smart Cane 的常见疑问，帮助您更好地了解这款产品。
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {/* Item 1 */}
            <AccordionItem value="item-1" className="border-none bg-[#F3F4F6] rounded-2xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300">
              <AccordionTrigger className="text-slate-800 hover:no-underline text-lg font-medium [&[data-state=open]]:text-blue-600">
                <span className="flex-1 text-left">智能手杖主要由什么材料制成？</span>
                {/* Custom icon handling if needed, but default Chevron is fine. Let's try to mimic the Plus icon if possible via CSS or custom trigger but standard is okay for now. */}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base leading-relaxed pt-2 pb-4">
                Smart Cane 主体采用航空级碳纤维，不仅重量轻（仅 350g），而且极具韧性。握把部分采用亲肤的低敏硅胶，确保长时间握持的舒适度。
              </AccordionContent>
            </AccordionItem>

            {/* Item 2 */}
            <AccordionItem value="item-2" className="border-none bg-[#F3F4F6] rounded-2xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300">
              <AccordionTrigger className="text-slate-800 hover:no-underline text-lg font-medium [&[data-state=open]]:text-blue-600">
                <span className="flex-1 text-left">它与普通化学电池有何不同？</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base leading-relaxed pt-2 pb-4">
                我们使用的是新一代固态锂电池，比普通锂电池更安全、寿命更长，且完全不含汞、镉等有害重金属，更加环保。
              </AccordionContent>
            </AccordionItem>

            {/* Item 3 */}
            <AccordionItem value="item-3" className="border-none bg-[#F3F4F6] rounded-2xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300">
              <AccordionTrigger className="text-slate-800 hover:no-underline text-lg font-medium [&[data-state=open]]:text-blue-600">
                <span className="flex-1 text-left">使用这款手杖有哪些主要好处？</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base leading-relaxed pt-2 pb-4">
                它能显著提升您的独立出行能力。主动避障减少碰撞风险，语音导航解决迷路焦虑，紧急联络功能则为您的安全提供最后一道防线。
              </AccordionContent>
            </AccordionItem>

            {/* Item 4 */}
            <AccordionItem value="item-4" className="border-none bg-[#F3F4F6] rounded-2xl px-6 py-2 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300">
              <AccordionTrigger className="text-slate-800 hover:no-underline text-lg font-medium [&[data-state=open]]:text-blue-600">
                <span className="flex-1 text-left">适合所有类型的视力障碍者吗？</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base leading-relaxed pt-2 pb-4">
                是的，无论是全盲还是低视力人群，Smart Cane 都能提供相应的辅助模式。您可以通过 App 自定义震动反馈的强度和语音提示的频率。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
