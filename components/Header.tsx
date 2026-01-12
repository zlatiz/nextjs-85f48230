import Image from 'next/image';
import type { ReactElement } from 'react';

export default function Header(): ReactElement {
  const logo = 'https://components.mywebsitebuilder.com/sitebuilder/favicon.ico';
  const safeLogo = encodeURI(logo);
  return (
    <header className="sticky top-0 z-50 header-glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <Image src={safeLogo} alt="HOME" width={40} height={40} unoptimized />
          </div>
          <div className="text-lg font-semibold">HOME</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <span className="text-muted">HOME</span>
        </nav>
      </div>
    </header>
  );
}
