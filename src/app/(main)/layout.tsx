"use client"; 

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WelcomeScreen from "@/components/common/WelcomeScreen";

const FloatingGhosts = dynamic(() => import("@/components/effects/FloatingGhosts"), { 
  ssr: false 
});

const FloatingButtons = dynamic(() => import("@/components/effects/FloatingButtons"), { 
  ssr: false 
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WelcomeScreen />
      
      <FloatingGhosts />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>

      <FloatingButtons />
    </>
  );
}