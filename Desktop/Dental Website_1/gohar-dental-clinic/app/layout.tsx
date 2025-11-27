import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gohardental.com'),
  title: {
    default: 'Gohar Dental Clinic | Premier Dental & Aesthetic Services in Lahore',
    template: '%s | Gohar Dental Clinic'
  },
  description: 'Gohar Dental Clinic offers exceptional dental and aesthetic services in Lahore. Open 24 hours with 4.6-star rating. Expert dental care including cosmetic dentistry, orthodontics, and more.',
  keywords: ['dental clinic Lahore', 'Gohar Dental', 'cosmetic dentistry', 'dental services Pakistan', 'teeth whitening Lahore', 'dental implants', 'orthodontics', '24 hour dentist', 'aesthetic dentistry', 'Sultan Pura dental'],
  authors: [{ name: 'Gohar Dental Clinic' }],
  creator: 'Gohar Dental Clinic',
  publisher: 'Gohar Dental Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://gohardental.com',
    title: 'Gohar Dental Clinic | Premier Dental & Aesthetic Services in Lahore',
    description: 'Expert dental care available 24/7. Rated 4.6 stars. Offering comprehensive dental and aesthetic services in Lahore, Pakistan.',
    siteName: 'Gohar Dental Clinic',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Gohar Dental Clinic - Premier Dental Care'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gohar Dental Clinic | Premier Dental & Aesthetic Services',
    description: 'Expert dental care available 24/7 in Lahore. Rated 4.6 stars.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
