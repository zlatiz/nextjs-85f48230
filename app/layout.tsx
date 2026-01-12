import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOME'
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="1024" />
        <meta name="viewport" content="width=1024" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content="https://storage.googleapis.com/wzsitethumbnails/site-53070579/800x500.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="500" />
        <link rel="shortcut icon" href="https://components.mywebsitebuilder.com/sitebuilder/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://components.mywebsitebuilder.com/sitebuilder/apple-touch-icon-152x152.png" />
        <meta name="msapplication-square70x70logo" content="https://components.mywebsitebuilder.com/sitebuilder/smalltile.png" />
        <meta name="msapplication-square144x144logo" content="https://components.mywebsitebuilder.com/sitebuilder/mstile-144x144.png" />
        <meta name="msapplication-square150x150logo" content="https://components.mywebsitebuilder.com/sitebuilder/mediumtile.png" />
        <meta name="msapplication-wide310x150logo" content="https://components.mywebsitebuilder.com/sitebuilder/widetile.png" />
        <meta name="msapplication-square310x310logo" content="https://components.mywebsitebuilder.com/sitebuilder/largetile.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`body { font-family: 'Plus Jakarta Sans', Manrope, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }`}</style>
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
