import Image from 'next/image';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const imgs: string[] = [
    'https://components.mywebsitebuilder.com/sitebuilder/smalltile.png',
    'https://components.mywebsitebuilder.com/sitebuilder/mediumtile.png',
    'https://components.mywebsitebuilder.com/sitebuilder/widetile.png',
    'https://components.mywebsitebuilder.com/sitebuilder/largetile.png'
  ];

  return (
    <footer className="border-t border-gray-100 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image src={encodeURI('https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon.png')} alt="HOME" width={48} height={48} unoptimized />
            </div>
            <div className="font-semibold">HOME</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {(Array.isArray(imgs) ? imgs : []).map((u) => (
            <div key={u} className="w-16 h-12 image-mask">
              <Image src={encodeURI(u)} alt="tile" width={160} height={120} unoptimized />
            </div>
          ))}
        </div>

        <div className="text-sm text-muted">
          <div>HOME</div>
        </div>
      </div>
    </footer>
  );
}
