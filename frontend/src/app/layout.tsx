import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: { default: 'S.M. Yarns — Premium Yarn Supplier | Surat, India', template: '%s | S.M. Yarns' },
  description: 'S.M. Yarns is a trusted supplier of high-quality yarns — polyester, spandex, nylon, blended yarns — serving textile manufacturers across India since 2017. 1200+ shades, pan-India delivery.',
  keywords: ['yarn supplier India', 'polyester yarn', 'dyed yarn', 'spandex yarn', 'textile yarn Surat', 'PV yarn', 'PC yarn', 'nylon yarn', 'S.M. Yarns', 'yarn manufacturer', 'hosiery yarn', 'weaving yarn'],
  authors: [{ name: 'S.M. Yarns' }],
  openGraph: {
    type: 'website', locale: 'en_IN', url: 'https://smyarns.com', siteName: 'S.M. Yarns',
    title: 'S.M. Yarns — Premium Yarn Supplier',
    description: 'Your trusted source for high-quality yarns and reliable textile solutions. 15000+ tons supplied, 1200+ shades, pan-India delivery.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'S.M. Yarns' }],
  },
  twitter: { card: 'summary_large_image', title: 'S.M. Yarns — Premium Yarn Supplier', description: 'Your trusted source for high-quality yarns and reliable textile solutions.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'S.M. Yarns',
  description: 'Trusted supplier of high-quality yarns serving textile manufacturers across India since 2017.',
  url: 'https://smyarns.com',
  logo: 'https://smyarns.com/images/logo.png',
  foundingDate: '2017',
  address: { '@type': 'PostalAddress', addressLocality: 'Surat', addressRegion: 'Gujarat', addressCountry: 'IN' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+91-98XXX-XXXXX', contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Gujarati'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#B91C1C" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
