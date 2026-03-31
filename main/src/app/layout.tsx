import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smyarns.in'),
  title: { default: 'S.M. Yarns — Premium Yarn Supplier | Ludhiana, India', template: '%s | S.M. Yarns' },
  description: 'S.M. Yarns is a trusted supplier of high-quality yarns — polyester, spandex, nylon, blended yarns — serving textile manufacturers across India since 2017. 1200+ shades, pan-India delivery.',
  keywords: ['yarn supplier India', 'polyester yarn', 'dyed yarn', 'spandex yarn', 'textile yarn', 'PV yarn', 'PC yarn', 'nylon yarn', 'S.M. Yarns', 'yarn manufacturer', 'hosiery yarn', 'weaving yarn'],
  authors: [{ name: 'S.M. Yarns' }],
  openGraph: {
    type: 'website', locale: 'en_IN', url: 'https://www.smyarns.in', siteName: 'S.M. Yarns',
    title: 'S.M. Yarns — Premium Yarn Supplier',
    description: 'Your trusted source for high-quality yarns and reliable textile solutions. 15000+ tons supplied, 1200+ shades, pan-India delivery.',
    images: [{ url: '/web-app-manifest-512x512.png', width: 512, height: 512, alt: 'S.M. Yarns' }],
  },
  twitter: { card: 'summary_large_image', title: 'S.M. Yarns — Premium Yarn Supplier', description: 'Your trusted source for high-quality yarns and reliable textile solutions.', images: ['/web-app-manifest-512x512.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S.M. Yarns',
  description: 'Trusted supplier of high-quality yarns serving textile manufacturers across India since 2017.',
  url: 'https://www.smyarns.in',
  logo: 'https://www.smyarns.in/images/logo.png',
  foundingDate: '2017',
  address: { '@type': 'PostalAddress', addressLocality: 'Ludhiana', addressRegion: 'Punjab', addressCountry: 'IN' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+91 98725 46700', contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Gujarati'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#B91C1C" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Google Analytics - Placed in head for Site Ownership Verification */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M9H0CQ7YMW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M9H0CQ7YMW');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
