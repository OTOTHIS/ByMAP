import '@/styles/global.css';

import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/Header/Header';
import Footer from '@/shared/Footer/Footer';

import Loading from './loading';
import { CartProvider } from '@/context/cartContext';
import { UserProvider } from '@/context/userContext';

export const metadata: Metadata = {
  title: 'ByMAP',
  icons: [
    {
      rel: 'bymap',
      url: 'assets/images/logobymap.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/images/logobymap.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/images/logobymap.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
      <UserProvider>
      <CartProvider>
      {/* <Component {...pageProps} /> */}
    
        <Header />
        <Suspense fallback={<Loading />}>{children}
        <SpeedInsights />
        </Suspense>
        <Footer />
        </CartProvider>
        

        </UserProvider>
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
