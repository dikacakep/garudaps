import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingGhosts from "@/components/effects/FloatingGhosts";
import WelcomeScreen from "@/components/common/WelcomeScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garudaps.com"),
  title: {
    default: "GarudaPS | #1 Growtopia Private Server Indonesia",
    template: "%s | GarudaPS",
  },
  description: "Join GarudaPS, the most advanced Growtopia Private Server. Free BGL start, stable economy, legendary items, and smooth cross-platform experience. Play now on Windows, Android, and iOS!",
  keywords: [
    "growtopia",
    "growtopia private server",
    "gtps",
    "garudaps",
    "garuda ps",
    "growtopia ps",
    "private server growtopia",
    "gt private server",
    "growtopia indonesia",
    "growtopia custom server",
    "free growtopia server",
    "growtopia alternative",
    "gtps indonesia",
    "growtopia community",
    "growtopia custom features",
    "garuda private server",
    "gtps community"
  ],
  authors: [{ name: "GarudaPS Team" }],
  creator: "GarudaPS Team",
  openGraph: {
    title: "GarudaPS - The Ultimate Private Server Realm",
    description: "Start your adventure at GarudaPS. Stable server, custom features, and thousands of players waiting for you!",
    url: "https://www.garudaps.com",
    siteName: "GarudaPS",
    images: [
      {
        url: "/images/logo/GARUDAPS2026.png",
        width: 1200,
        height: 630,
        alt: "GarudaPS Legendary Banner",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarudaPS | Best GT Private Server",
    description: "Experience smooth farming and exclusive legendary items with Free BGLs.",
    images: ["/images/logo/GARUDAPS2026.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1a1a1a] text-slate-100 antialiased`}>
        <WelcomeScreen />
        <FloatingGhosts />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}