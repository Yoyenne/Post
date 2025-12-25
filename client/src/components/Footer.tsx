import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Smart Cane</h3>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              通过先进科技赋能独立生活。未来的无障碍出行，由此开始。
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">产品</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">功能特性</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">技术规格</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">价格方案</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">公司</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">联系方式</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">隐私政策</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2025 Smart Cane Inc. 保留所有权利。</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Designed with Replit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
