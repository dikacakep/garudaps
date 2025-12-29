import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingGhosts from "@/components/effects/FloatingGhosts";

export const metadata = {
  title: "GarudaPS – Growtopia Private Server",
  description: "Garuda Private Server official website",
  
  icons: {
    icon: "/images/logo/GARUDAPS2026.png", 
    apple: "/images/logo/GARUDAPS2026.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-slate-100">
        <FloatingGhosts />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}