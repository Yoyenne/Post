import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white shadow-lg shadow-blue-200">
            云
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">云杖启明</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="transition-colors hover:text-blue-600">首页</Link>
          <Link href="/about" className="transition-colors hover:text-blue-600">关于我们</Link>
          <a href="#" className="transition-colors hover:text-blue-600">联系我们</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden cursor-pointer text-sm font-medium text-slate-500 transition-colors hover:text-slate-800 md:block">
            登录
          </span>
          <Button className="rounded-xl bg-slate-900 font-semibold text-white shadow-lg shadow-slate-200 hover:bg-slate-800">
            立即预约
          </Button>
        </div>
      </div>
    </nav>
  );
}
