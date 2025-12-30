"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, MessageCircle, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  // State untuk menyimpan data status server dari API
  const [serverStatus, setServerStatus] = useState({
    online: false,
    players: 0,
    loading: true
  })

  // Fetch data
  const fetchStatus = async () => {
    try {
      const response = await fetch("http://157.66.54.50:3001/api/status")
      const data = await response.json()
      
      setServerStatus({
        online: data.status === "online",
        players: data.players || 0,
        loading: false
      })
    } catch (error) {
      console.error("Gagal mengambil status server:", error)
      setServerStatus({ online: false, players: 0, loading: false })
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchStatus()
    const interval = setInterval(fetchStatus, 1500)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openShop = () => {
    window.open("https://shop.garudaps.com/", "_blank") 
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/banner.jpg" 
          alt="GarudaPS Background" 
          fill 
          className="object-cover opacity-50 blur-[2px]" 
          priority 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_85%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
      </div>

      {/* --- TOP LIGHT SOURCE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${serverStatus.online ? 'bg-green-400' : 'bg-red-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${serverStatus.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest">
              {serverStatus.loading ? (
                "Checking Server..."
              ) : (
                <>
                  Server {serverStatus.online ? "Online" : "Offline"} 
                  <span className="mx-2 text-white/20">|</span> 
                  {serverStatus.players} Players Online
                </>
              )}
            </span>
          </div>
        </motion.div>


        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-[320px] md:w-162.5 h-45 md:h-80 mb-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-600/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500/30 blur-2xl rounded-full animate-pulse pointer-events-none" />
          
          <Image
            src="/images/logo/GARUDAPS2026.png"
            alt="GarudaPS Logo"
            fill
            className="object-contain drop-shadow-[0_0_35px_rgba(255,92,0,0.7)]"
            priority
          />
        </motion.div>


        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.9] drop-shadow-2xl tracking-tight">
            BUILD YOUR <span className="animate-gradient-text filter drop-shadow-[0_0_20px_rgba(234,88,12,0.5)]">EMPIRE.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto drop-shadow-md font-medium">
            Join the ultimate Growtopia Private Server experience. 
            Custom items, balanced economy, and a legendary community waiting for you.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-2">
            
            <Button
              size="lg"
              onClick={() => scrollToSection("tutorial")}
              className="h-14 px-10 rounded-full bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-lg shadow-[0_0_50px_rgba(234,88,12,0.5)] border border-orange-400/50 transition-transform hover:scale-105 hover:shadow-[0_0_70px_rgba(234,88,12,0.7)]"
            >
              <Play className="mr-2 h-6 w-6 fill-white" /> PLAY NOW
            </Button>

            <Button
              size="lg"
              onClick={openShop}
              className="h-14 px-10 rounded-full bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30 backdrop-blur-md font-bold text-lg shadow-[0_0_20px_rgba(255,215,0,0.1)] transition-all hover:border-[#FFD700]/60"
            >
              <ShoppingCart className="mr-2 h-6 w-6" /> SHOP
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("community")}
              className="h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/10 backdrop-blur-md font-bold text-lg transition-all hover:border-white/30"
            >
              <MessageCircle className="mr-2 h-6 w-6" /> Discord
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}