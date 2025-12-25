import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
             S
           </div>
           <span className="text-xl font-bold text-white tracking-tight">Smart Cane</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium text-sm">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">How it Works</a>
          <a href="#" className="hover:text-white transition-colors">Reviews</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-slate-400 text-sm cursor-pointer hover:text-white transition-colors">Log In</span>
          <Button className="rounded-xl bg-white text-slate-950 hover:bg-slate-200 font-semibold">
            Pre-order Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
