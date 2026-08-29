import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Blogs & Technical Guides | blogs.mgbuilds.in',
    template: '%s | blogs.mgbuilds.in',
  },
  description:
    'Minimal, direct, up-to-the-point technical guides, tutorials, and setup instructions.',
  metadataBase: new URL('https://blogs.mgbuilds.in'),
  authors: [{ name: 'Monojit Goswami', url: 'https://mgbuilds.in' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blogs.mgbuilds.in',
    siteName: 'blogs by MG',
    title: 'Blogs & Technical Guides | blogs.mgbuilds.in',
    description:
      'Minimal, direct, up-to-the-point technical guides, tutorials, and setup instructions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'blogs by MG | blogs.mgbuilds.in',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs & Technical Guides | blogs.mgbuilds.in',
    description:
      'Minimal, direct, up-to-the-point technical guides, tutorials, and setup instructions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="app-wrapper">{children}</div>
      </body>
    </html>
  );
}
