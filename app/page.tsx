import Image from 'next/image';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import type { ReactElement } from 'react';

const IMAGES: string[] = [
  'https://components.mywebsitebuilder.com/sitebuilder/favicon.ico',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon.png',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-57x57.png',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-60x60.png',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-72x72.png',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-114x114.png',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-120x120.png',
  'https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-152x152.png',
  'https://components.mywebsitebuilder.com/sitebuilder/smalltile.png',
  'https://components.mywebsitebuilder.com/sitebuilder/mediumtile.png',
  'https://components.mywebsitebuilder.com/sitebuilder/widetile.png',
  'https://components.mywebsitebuilder.com/sitebuilder/largetile.png',
  'https://storage.googleapis.com/wzsitethumbnails/site-53070579/800x500.jpg'
];

export default function Page(): ReactElement {
  return (
    <div>
      <section className="relative overflow-hidden hero-gradient-mesh">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass p-6 inline-block rounded-xl">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">HOME</h2>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HOME
            </h1>
            <p className="text-muted text-sm md:text-base">
              summary
            </p>
            <div className="flex items-center gap-4">
              <Button label="HOME" />
            </div>
          </div>

          <div className="relative image-mask shadow-glow">
            {/* hero image from source */}
            <Image
              src={encodeURI('https://storage.googleapis.com/wzsitethumbnails/site-53070579/800x500.jpg')}
              alt="HOME"
              width={1200}
              height={750}
              className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h3 className="text-lg font-semibold mb-6">HOME</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(Array.isArray(IMAGES) ? IMAGES : []).map((src) => (
            <Card key={src} title={''}>
              <div className="image-mask">
                <Image src={encodeURI(src)} alt="HOME image" width={800} height={500} className="object-cover w-full h-48" unoptimized />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
