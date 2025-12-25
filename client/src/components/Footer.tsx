import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-950 font-bold text-xl">S</span>
             </div>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
             </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-slate-400 font-medium mb-6">Social Media</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-slate-400 font-medium mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-sm text-slate-300">+86 123 4567 8900</li>
              <li className="text-sm text-slate-300">hello@smartcane.com</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-slate-400 font-medium mb-6">Address</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              123 Tech Park, Innovation Way,<br />
              Shenzhen, China
            </p>
          </div>
        </div>

        {/* Big Text Bottom */}
        <div className="border-t border-white/10 pt-10 mt-10">
           <h1 className="text-[10vw] leading-none font-bold text-white/10 select-none text-center md:text-left tracking-tighter">
              Smart Cane
           </h1>
           <div className="flex justify-between items-center mt-4 text-xs text-slate-500 uppercase tracking-widest">
              <span>© 2025 Smart Cane Inc.</span>
              <span>Replit Prototype</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
