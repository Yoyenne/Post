import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            常见问题解答
            </h2>
            <p className="text-slate-500">还有疑问？我们随时为您解答。</p>
        </div>

        <div className="grid gap-6">
            <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-slate-100 shadow-sm rounded-2xl px-8 data-[state=open]:shadow-md data-[state=open]:border-blue-100 transition-all duration-300">
                <AccordionTrigger className="text-slate-800 hover:text-blue-600 hover:no-underline text-lg font-medium py-6 [&[data-state=open]]:text-blue-600">
                避障检测有多精准？
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-base pb-6 leading-relaxed">
                我们的 LiDAR 传感器可以在各种光照条件下（包括全黑环境），精准探测 5 米范围内小至 2 厘米的障碍物，误报率极低。
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-slate-100 shadow-sm rounded-2xl px-8 data-[state=open]:shadow-md data-[state=open]:border-blue-100 transition-all duration-300">
                <AccordionTrigger className="text-slate-800 hover:text-blue-600 hover:no-underline text-lg font-medium py-6 [&[data-state=open]]:text-blue-600">
                设备防水吗？
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-base pb-6 leading-relaxed">
                是的，Smart Cane 达到 IP67 防水防尘等级，意味着它可以抵御雨水、泼溅，甚至短时间的浸泡，完全满足日常户外使用需求。
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-slate-100 shadow-sm rounded-2xl px-8 data-[state=open]:shadow-md data-[state=open]:border-blue-100 transition-all duration-300">
                <AccordionTrigger className="text-slate-800 hover:text-blue-600 hover:no-underline text-lg font-medium py-6 [&[data-state=open]]:text-blue-600">
                需要连接手机使用吗？
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-base pb-6 leading-relaxed">
                基础的避障功能可以独立运行。但如果需要使用 GPS 导航、紧急联系人呼叫等高级功能，需要通过蓝牙连接我们的免费手机 App。
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white border border-slate-100 shadow-sm rounded-2xl px-8 data-[state=open]:shadow-md data-[state=open]:border-blue-100 transition-all duration-300">
                <AccordionTrigger className="text-slate-800 hover:text-blue-600 hover:no-underline text-lg font-medium py-6 [&[data-state=open]]:text-blue-600">
                保修期是多久？
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-base pb-6 leading-relaxed">
                我们提供为期 2 年的全面保修服务，覆盖所有制造缺陷和传感器故障。我们的售后团队将为您提供全程支持。
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
      </div>
    </section>
  );
}
