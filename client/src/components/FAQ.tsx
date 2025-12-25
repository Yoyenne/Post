import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-white/10 rounded-2xl px-6 bg-slate-900/50 backdrop-blur-sm data-[state=open]:bg-slate-900 transition-colors">
            <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline text-lg font-medium py-6">
              How accurate is the obstacle detection?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base pb-6">
              Our LiDAR sensors can detect objects as small as 2cm from up to 5 meters away, providing industry-leading accuracy in various lighting conditions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/10 rounded-2xl px-6 bg-slate-900/50 backdrop-blur-sm data-[state=open]:bg-slate-900 transition-colors">
            <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline text-lg font-medium py-6">
              Is the device water-resistant?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base pb-6">
              Yes, the Smart Cane is rated IP67, meaning it can withstand rain, splashes, and brief submersion in water.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/10 rounded-2xl px-6 bg-slate-900/50 backdrop-blur-sm data-[state=open]:bg-slate-900 transition-colors">
            <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline text-lg font-medium py-6">
              Does it require a smartphone to work?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base pb-6">
              The Smart Cane functions independently for basic obstacle detection. However, advanced features like GPS navigation and emergency contacts require pairing with our free mobile app.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-white/10 rounded-2xl px-6 bg-slate-900/50 backdrop-blur-sm data-[state=open]:bg-slate-900 transition-colors">
            <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline text-lg font-medium py-6">
              What is the warranty period?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base pb-6">
              We offer a comprehensive 2-year warranty covering all manufacturing defects and sensor malfunctions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
