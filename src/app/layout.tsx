import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'MUMMAS BITE | Made with a Mother\'s Love',
  description: 'Simple ingredients. Honest nourishment. Dry fruit bars made with a mother\'s care.',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://mummasbite.com'),
  openGraph: {
    title: 'MUMMAS BITE | Made with a Mother\'s Love',
    description: 'Simple ingredients. Honest nourishment.',
    url: 'https://mummasbite.com',
    siteName: 'MUMMAS BITE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUMMAS BITE',
    description: 'Made with a mother\'s love.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1B4D2E" />
      </head>
      <body className="bg-mummas-off-white text-mummas-text">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
