import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServerProvider } from "@/context/ServerContext";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", 
  adjustFontFallback: false 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.garudaps.com"),
  title: {
    default: "GarudaPS | #1 Growtopia Private Server Indonesia",
    template: "%s | GarudaPS",
  },
  description: "Join GarudaPS, the ultimate Growtopia Private Server experience. Free BGL, stable economy, and custom features. Play now on Windows, Android, and iOS!",
  keywords: [
    "growtopia", "growtopia private server", "gtps", "garudaps", "garuda ps", 
    "growtopia ps", "private server growtopia", "gt private server", 
    "growtopia indonesia", "growtopia custom server", "free growtopia server", 
    "growtopia alternative", "gtps indonesia", "growtopia community", 
    "growtopia custom features", "garuda private server", "gtps community"
  ],
  openGraph: {
    title: "GarudaPS - The Ultimate Private Server",
    description: "Start your adventure at GarudaPS with Free BGLs and custom items!",
    url: "https://www.garudaps.com",
    siteName: "GarudaPS",
    images: [{ url: "/images/banner.jpg", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
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
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1a1a1a] text-slate-100 antialiased overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200`}>
        <ServerProvider>
          {children}
        </ServerProvider>
      </body>
    </html>
  );
}