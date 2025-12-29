"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, MessageCircle, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openShop = () => {
    window.open("https://store.garudaps.com", "_blank") 
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/banner.jpg" 
          alt="GarudaPS Background" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/30" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container relative z-20 px-4 flex flex-col items-center pt-20">
        
        {/* LOGO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative w-80 h-48 md:w-[520px] md:h-[260px]">
            <Image
              src="/images/logo/GARUDAPS2026.png"
              alt="GarudaPS Logo"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(255,92,0,0.6)]"
              priority
            />
          </div>
        </motion.div>

        {/* SERVER STATUS BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex items-center gap-3 px-5 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>

          <p className="text-xs md:text-sm font-bold text-white tracking-wider uppercase">
            Server is UP <span className="text-white/20 mx-2">|</span> 
            <span className="text-orange-400">0</span> Players Online
          </p>
        </motion.div>

        {/* MAIN GLASS CARD */}
        <motion.div
          suppressHydrationWarning={true} 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-5xl w-full relative overflow-hidden rounded-[32px] p-8 md:p-12
          bg-white/5 
          backdrop-blur-md 
          border border-white/10
          shadow-2xl"
        >
          <div className="relative z-10">
            <p className="text-center text-white/90 text-lg md:text-2xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto tracking-wide">
              Join a stable{" "}
              <span className="text-orange-500 font-extrabold underline decoration-orange-500/50 decoration-2 underline-offset-4">
                Growtopia Private Server
              </span>{" "}
              packed with custom items, fun daily events, and a balanced economy. Build, compete, and connect in a safe,
              inclusive community.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
              
              {/* Button: Play Now (Primary) */}
              <Button
                size="lg"
                onClick={() => scrollToSection("tutorial")}
                className="relative group overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl px-8 h-14 md:h-16 text-lg md:text-xl font-black 
                shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-white/10
                hover:scale-105 active:scale-95 transition-all duration-300 w-full md:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0" />
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Play className="h-6 w-6 fill-white" />
                  PLAY NOW
                </div>
              </Button>


              {/* 4. TOMBOL SHOP NOW (Baru) */}
              <Button
                size="lg"
                onClick={openShop}
                className="relative group bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl px-8 h-14 md:h-16 text-lg md:text-xl font-bold 
                hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 shadow-lg w-full md:w-auto"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ShoppingCart className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                  Shop
                </div>
              </Button>


              {/* Button: Join Discord (Secondary) */}
              <Button
                size="lg"
                onClick={() => scrollToSection("community")}
                className="relative group bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl px-8 h-14 md:h-16 text-lg md:text-xl font-bold 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg w-full md:w-auto"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <MessageCircle className="h-6 w-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  Discord
                </div>
              </Button>

            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection("tutorial")}
        >
          <span className="text-xs font-bold text-white/60 uppercase tracking-[0.3em]">Scroll Down</span>
          <div className="flex flex-col -gap-2 text-orange-500/90">
            <ChevronDown className="w-8 h-8" />
            <ChevronDown className="w-8 h-8 -mt-5" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}