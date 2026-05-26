export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-6 text-2xl font-bold text-slate-800">云杖启明</h3>
            <p className="max-w-sm leading-relaxed text-slate-500">
              通过科技赋能独立生活，让更安心、更清晰的出行体验从每一步开始。
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">产品</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="transition-colors hover:text-blue-600">功能特色</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-600">技术规格</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-600">价格方案</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">公司</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="transition-colors hover:text-blue-600">关于我们</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-600">联系方式</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-600">隐私政策</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end border-t border-slate-200 pt-8 text-sm text-slate-400 md:flex-row">
          <span>Designed with Replit</span>
        </div>
      </div>
    </footer>
  );
}
