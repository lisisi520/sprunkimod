import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/header/navbar";
import { GoogleAnalytics } from '@next/third-parties/google'
import { dir } from 'i18next'
import { languages } from '@/app/i18n/settings'
import Footer from "@/app/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sprunki Mod Music Game: Unleash Your Rhythm and Passion!",
  description: "Sprunki Incredibox: A fan-made mod inspired by Incredibox. Create fresh beats, craft unique music, and access exclusive content at sprunkimod.app.",
  keywords: 'sprunki mod maker,sprunki johnny mod, johnny sprunki mod, sprunkimod, sprunki creator mod,my sprunki mod,sprunki mod maker app, super sprunki brasil,sprunki mod game, sprunki maker mod,sprunki jobs mod,sprunki music game',
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png"
  },
  author: 'Kevin',
  verification: {
    google: 'hZoXpkz7Ux2I05eKhLVerDV28XQSEuj-GeIjpWiOs8A',
  },
  alternates: {
    canonical: 'https://sprunkimod.app', // 根据需要修改
  },
  robots: {
    index: true,
    follow: true,
  },
  og: {
    title: 'Sprunki Mod Music Game: Unleash Your Rhythm and Passion!',
    description: 'Sprunki Mod Game - Sprunki Incredibox is a fan-made modification inspired by the original Incredibox game. Combine fresh beats, craft unique music, and access exclusive content online at sprunkimod.app',
    url: 'https://sprunkimod.app',
    type: 'website',
    image: 'https://sprunkimod.app/logo.svg',
  },
  twitter: {
    title: 'Sprunki Mod Music Game: Unleash Your Rhythm and Passion!',
    description: 'Sprunki Mod Game - Sprunki Incredibox is a fan-made modification inspired by the original Incredibox game. Combine fresh beats, craft unique music, and access exclusive content online at sprunkimod.app',
    url: 'https://sprunkimod.app',
    type: 'website',
    image: 'https://sprunkimod.app/logo.svg',
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


export default async function RootLayout({ children, params }) {
  const { lng  } = await params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar lng={lng}/>
        {children}
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-9EJBMTR01C"/>
    </html>
  );
}
