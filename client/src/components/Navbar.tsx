import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 h-20 shadow-sm">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-blue-200 shadow-lg">
             S
           </div>
           <span className="text-xl font-bold text-slate-800 tracking-tight">Smart Cane</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium text-sm">
          <a href="#" className="hover:text-blue-600 transition-colors">核心功能</a>
          <a href="#" className="hover:text-blue-600 transition-colors">工作原理</a>
          <a href="#" className="hover:text-blue-600 transition-colors">用户评价</a>
          <a href="#" className="hover:text-blue-600 transition-colors">常见问题</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-slate-500 text-sm cursor-pointer hover:text-slate-800 transition-colors font-medium">登录</span>
          <Button className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold shadow-lg shadow-slate-200">
            立即预订
          </Button>
        </div>
      </div>
    </nav>
  );
}
