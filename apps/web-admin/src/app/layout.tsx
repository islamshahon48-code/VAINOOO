import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import AutoSchedulerRunner from '@/components/AutoSchedulerRunner';
import AppUpdateModal from '@/components/AppUpdateModal';
import AndroidBackHandler from '@/components/AndroidBackHandler';
import NotificationPermissionModal from '@/components/NotificationPermissionModal';

export const viewport: Viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ffrivalstourbd.shop'),
  title: {
    default: 'FF RIVAL TOUR BD - বাংলাদেশ ফ্রি ফায়ার টুর্নামেন্ট ও কাস্টম রুম প্ল্যাটফর্ম',
    template: '%s | FF RIVAL TOUR BD',
  },
  description:
    'FF RIVAL TOUR BD - বাংলাদেশের সেরা ফ্রি ফায়ার টুর্নামেন্ট ও এস্পোর্টস প্ল্যাটফর্ম। প্রতিদিন Classic Battle Royale, Clash Squad 4v4 এবং 1v1 Lone Wolf কাস্টম ম্যাচে অংশ নিন। ১০০% অ্যান্টি-চিট প্রোটেকশন ও বিকাশ-নগদে তাৎক্ষণিক উইনিং প্রাইজ উইথড্র।',
  keywords: [
    'ffrivalstourbd.shop',
    'FF RIVAL TOUR BD',
    'FF Rivals Tour',
    'Free Fire Tournament Bangladesh',
    'free fire tournament bd',
    'ফ্রি ফায়ার টুর্নামেন্ট বাংলাদেশ',
    'ফ্রি ফায়ার কাস্টম রুম',
    'ff custom room bd',
    'ff clash squad tournament',
    'free fire 1v1 tournament bd',
    'free fire bkash payment tournament',
    'free fire nagad deposit tournament',
    'free fire daily custom match bangladesh',
    'ff tournament app bd',
    'free fire esports arena bangladesh',
  ],
  authors: [{ name: 'FF RIVAL TOUR BD Esports' }],
  creator: 'FF RIVAL TOUR BD',
  publisher: 'FF RIVAL TOUR BD',
  applicationName: 'FF RIVAL TOUR BD',
  category: 'esports / gaming',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://ffrivalstourbd.shop',
    languages: {
      'bn-BD': 'https://ffrivalstourbd.shop',
      'en-US': 'https://ffrivalstourbd.shop',
    },
  },
  openGraph: {
    title: 'FF RIVAL TOUR BD - বাংলাদেশ সেরা ফ্রি ফায়ার টুর্নামেন্ট প্ল্যাটফর্ম',
    description:
      'প্রতিদিন ফ্রি ফায়ার কাস্টম টুর্নামেন্টে জয়েন করে টাকা জিতুন। ইনস্ট্যান্ট বিকাশ ও নগদ উইথড্র। Join Free Fire BR, CS 4v4, and 1v1 custom tournaments on FF RIVAL TOUR BD.',
    url: 'https://ffrivalstourbd.shop',
    siteName: 'FF RIVAL TOUR BD',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'FF RIVAL TOUR BD - Bangladesh Free Fire Esports',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FF RIVAL TOUR BD - Free Fire Esports Tournament Bangladesh',
    description:
      'Join daily Free Fire Battle Royale, Clash Squad, and 1v1 custom tournaments on FF RIVAL TOUR BD. Instant bKash and Nagad payouts.',
    images: ['/logo.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://ffrivalstourbd.shop/#website',
        url: 'https://ffrivalstourbd.shop',
        name: 'FF RIVAL TOUR BD',
        description: 'Bangladesh Premier Free Fire Esports Tournament Arena',
        inLanguage: 'bn-BD',
        publisher: {
          '@id': 'https://ffrivalstourbd.shop/#organization',
        },
      },
      {
        '@type': 'SportsOrganization',
        '@id': 'https://ffrivalstourbd.shop/#organization',
        name: 'FF RIVAL TOUR BD',
        url: 'https://ffrivalstourbd.shop',
        logo: 'https://ffrivalstourbd.shop/logo.png',
        description: 'Professional Free Fire custom match tournaments platform with automated anti-cheat and instant bKash/Nagad cash payouts in Bangladesh.',
        sameAs: ['https://t.me/ffrivalstourbdofficial'],
        sport: 'Esports (Free Fire)',
      },
      {
        '@type': 'WebApplication',
        name: 'FF RIVAL TOUR BD Mobile App',
        applicationCategory: 'GameApplication',
        operatingSystem: 'Android, Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BDT',
        },
      },
    ],
  };

  return (
    <html lang="bn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var CURRENT_VERSION = '5.2.0';
                  var storedVer = localStorage.getItem('ff_app_build_version');

                  // Register production Service Worker for Push Notifications
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js').catch(function() {});
                  }

                  // Clean up stale CacheStorage on major version bump
                  if (storedVer !== CURRENT_VERSION && 'caches' in window) {
                    caches.keys().then(function(keys) {
                      for (var j = 0; j < keys.length; j++) {
                        if (keys[j] !== 'ff-rivals-speed-v5-2-0') {
                          caches.delete(keys[j]);
                        }
                      }
                    });
                    localStorage.setItem('ff_app_build_version', CURRENT_VERSION);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-red-500 selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            <AndroidBackHandler />
            <AutoSchedulerRunner />
            <Navbar />
            <div className="min-h-[calc(100vh-160px)]">{children}</div>
            <AppUpdateModal />
            <NotificationPermissionModal />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
