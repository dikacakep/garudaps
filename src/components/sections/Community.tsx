"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Community() {
  const [activeTab, setActiveTab] = useState<"discord" | "whatsapp" | "tiktok">("discord")

  const discordServerId = "989184395590135839" 

  const communities = {
    discord: {
      title: "Discord",
      icon: (
        <svg viewBox="0 0 127.14 96.36" className="w-5 h-5 fill-current">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.24-18.87-2.6-38.64-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
        </svg>
      ),
      gradient: "bg-gradient-to-r from-[#5865F2] to-[#4752C4]",
      textGradient: "from-[#5865F2] to-[#4752C4]",
      buttonColor: "bg-[#5865F2]",
      description: "Join our vibrant Discord community! Chat with other players, check server status, trade items, and participate in daily giveaways.",
      link: "https://discord.gg/yourlink", 
    },
    whatsapp: {
      title: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      gradient: "bg-gradient-to-r from-[#25D366] to-[#128C7E]",
      textGradient: "from-[#25D366] to-[#128C7E]",
      buttonColor: "bg-[#25D366]",
      description: "Get instant updates directly to your phone. Join our WhatsApp group for fast announcements and community chats.",
      link: "https://chat.whatsapp.com/yourlink",
    },
    tiktok: {
      title: "TikTok",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      gradient: "bg-gradient-to-r from-[#000000] to-[#222222] border border-white/20",
      textGradient: "from-white to-gray-400",
      buttonColor: "bg-black",
      description: "Watch our latest trailers, funny moments, and sneak peeks of upcoming updates. Don't forget to follow!",
      link: "https://tiktok.com/@yourhandle",
    },
  }

  return (
    <section id="community" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
        
        {/* Background Image (Pastikan src gambar benar) */}
        {/* REVISI BACKGROUND 2: Opacity dinaikkan supaya gambar lebih terlihat */}
        <Image src="/images/banner.jpg" alt="bg" fill className="object-cover opacity-60" />

        {/* Decorative Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-orange-500 animate-gradient-text bg-300% underline decoration-[#ff5c00] decoration-4 underline-offset-8">
              Server
            </span>{" "}
            Community
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join our community to connect, explore, and shape the future of MafiaPS!
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex justify-center mb-10">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 p-2 rounded-2xl flex gap-3 shadow-2xl">
            {Object.entries(communities).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 overflow-hidden group/btn ${
                  activeTab === key
                    ? `${value.gradient} text-white shadow-lg scale-105 ring-1 ring-white/20`
                    : "text-white/50 hover:text-white bg-transparent hover:bg-black/40 hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                }`}
              >
                <div className="relative z-10 flex items-center gap-2">
                  {value.icon}
                  <span className="hidden md:inline">{value.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] p-6 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-10 items-center min-h-[500px]"
            >
              
              {/* --- LEFT SIDE: TEXT --- */}
              <div className="flex-1 text-center lg:text-left space-y-6 relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-md">
                  Join Our <br />
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${communities[activeTab].textGradient}`}>
                    {communities[activeTab].title} Community
                  </span>
                </h3>
                
                <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  {communities[activeTab].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  {/* BUTTON */}
                  <Button
                    size="lg"
                    asChild
                    className={`relative overflow-hidden group ${communities[activeTab].buttonColor} text-white px-8 h-14 rounded-xl font-bold text-lg shadow-lg border border-white/10`}
                  >
                    <a href={communities[activeTab].link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <span className="relative z-10 flex items-center gap-2">
                         {communities[activeTab].icon}
                         Join {communities[activeTab].title} Now
                      </span>
                      {/* SHINY EFFECT */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 transition-transform duration-700 ease-in-out skew-x-12 w-full" />
                    </a>
                  </Button>
                </div>

                <div className="pt-6 flex items-center justify-center lg:justify-start gap-2 text-white/40 text-sm font-mono tracking-wide">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  Official Community Server
                </div>
              </div>

              {/* --- RIGHT SIDE: WIDGET AREA --- */}
              <div className="w-full lg:w-[400px] shrink-0 flex justify-center relative z-10">
                
                {activeTab === "discord" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
                  >
                    <iframe 
                      src={`https://discord.com/widget?id=${discordServerId}&theme=dark`} 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </motion.div>

                ) : activeTab === "whatsapp" ? (
                   <div className="w-full h-[400px] bg-gradient-to-br from-[#0f2e1b]/40 to-black/40 backdrop-blur-md rounded-2xl border border-[#25D366]/20 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
                      <div className="p-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 mb-6 group-hover:scale-110 transition duration-500 relative z-10">
                         {communities.whatsapp.icon}
                      </div>
                      <div className="text-[#25D366] font-bold text-2xl tracking-tight relative z-10">WhatsApp Group</div>
                      <p className="text-white/40 text-sm mt-2 relative z-10">Tap button to join</p>
                   </div>

                ) : (
                   <div className="w-full h-[400px] bg-gradient-to-br from-[#111]/40 to-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
                      <div className="absolute w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px] -top-10 -left-10" />
                      <div className="absolute w-40 h-40 bg-red-500/10 rounded-full blur-[60px] -bottom-10 -right-10" />
                      
                      <div className="p-6 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition duration-500 relative z-10">
                         {communities.tiktok.icon}
                      </div>
                      
                      <div className="text-white font-bold text-2xl tracking-tight relative z-10">@GarudaPS</div>
                      <p className="text-white/40 text-sm mt-2 relative z-10">Follow for updates</p>
                   </div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}