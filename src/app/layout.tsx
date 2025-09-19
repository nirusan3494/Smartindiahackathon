import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vision X Telemedicine - Rural Healthcare Access',
  description: 'Connecting patients in Nabha and 173 surrounding villages with quality healthcare through telemedicine. Features video consultations, digital health records, medicine availability tracking, and AI symptom checker optimized for rural connectivity.',
  keywords: 'telemedicine, rural healthcare, Nabha, Punjab, video consultation, digital health records, medicine availability, AI symptom checker',
  authors: [{ name: 'Vision X Telemedicine Team' }],
  openGraph: {
    title: 'Vision X Telemedicine - Rural Healthcare Access',
    description: 'Quality healthcare for rural communities through technology',
    type: 'website',
    locale: 'en_US',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#dc2626" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}