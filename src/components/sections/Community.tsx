"use client"

import { useState} from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

// --- ICONS  ---
const Icons = {
  discord: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
    </svg>
  ),
  whatsapp: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  tiktok: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.88-3.53 5.82-1.34.52-2.81.58-4.22.25-2.09-.48-3.8-2.06-4.52-4.04-.63-1.74-.32-3.71.68-5.26 1.05-1.62 2.89-2.65 4.85-2.61v4.22c-1.3-.12-2.58.74-3.03 1.95-.56 1.5.76 3.25 2.37 3.32 1.61.07 3.06-1.15 3.06-2.76v-15.11z" />
    </svg>
  )
}

export default function Community() {
  const [activeTab, setActiveTab] = useState<"discord" | "whatsapp" | "tiktok">("discord")
  const discordServerId = "989184395590135839" 

  const communities = {
    discord: {
      title: "Discord",
      Icon: Icons.discord, 
      color: "#5865F2",
      description: "Join our vibrant Discord community! Chat with other players, check server status, and participate in daily giveaways.",
      link: "https://discord.gg/jhJcGfd4mk", 
    },
    whatsapp: {
      title: "WhatsApp",
      Icon: Icons.whatsapp,
      color: "#25D366",
      description: "Get instant updates directly to your phone. Join our WhatsApp group for fast announcements.",
      link: "https://chat.whatsapp.com/L2L6fFUNzoH1JW7eijiYqk",
    },
    tiktok: {
      title: "TikTok",
      Icon: Icons.tiktok,
      color: "#FE2C55",
      description: "Watch our latest trailers, funny moments, and sneak peeks of upcoming updates.",
      link: "https://www.tiktok.com/@irexusgtps",
    },
  }

  const activeData = communities[activeTab];

  return (
    <section id="community" className="py-24 relative overflow-hidden h-full min-h-screen flex flex-col justify-center bg-black">
      
      {/* BACKGROUND  */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full mask-[linear-gradient(to_bottom,transparent,black_20%)]">
            <Image 
              src="/images/banner.jpg" 
              alt="Community Background" 
              fill 
              sizes="100vw"
              className="object-cover opacity-80" 
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-20">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-6 backdrop-blur-md shadow-lg"
          >
              <Sparkles className="w-3 h-3 text-orange-400" />
              <span>COMMUNITY HUB</span>
           </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white drop-shadow-2xl"
          >
            Server{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-yellow-200 to-orange-500 animate-gradient-text bg-300% underline decoration-orange-500 decoration-4 underline-offset-8">
              Community
            </span>
          </motion.h2>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex gap-1 shadow-2xl">
            {Object.entries(communities).map(([key, value]) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as unknown as "discord" | "whatsapp" | "tiktok")}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 z-20 ${
                    isActive ? "text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-full z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      style={{ backgroundColor: value.color }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-20 flex items-center gap-2">
                    <value.Icon className="w-5 h-5" />
                    <span className="hidden md:inline">{value.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden bg-[#111]/60 backdrop-blur-lg border border-white/10 rounded-4xl p-6 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center min-h-125 transform-gpu will-change-transform"
            >
              
              {/* --- LEFT SIDE  --- */}
              <div className="flex-1 text-center lg:text-left space-y-8 relative z-10">
                <div>
                   <h3 className="text-4xl md:text-6xl font-black text-white leading-none uppercase drop-shadow-md">
                     Join Our <br />
                     <span style={{ color: activeData.color, filter: `drop-shadow(0 0 20px ${activeData.color}50)` }}>
                       {activeData.title}
                     </span>
                   </h3>
                </div>
                
                <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium pl-1">
                  {activeData.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button
                    size="lg"
                    asChild
                    className="relative overflow-hidden group text-white px-8 h-14 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    style={{ backgroundColor: activeData.color }}
                  >
                    <a href={activeData.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <span className="relative z-10 flex items-center gap-2">
                        <activeData.Icon className="w-5 h-5" />
                        Join Now
                      </span>
                      <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] bg-linear-to-r from-transparent via-white/30 to-transparent z-0 transition-transform duration-700 ease-in-out skew-x-12 w-full" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* --- RIGHT SIDE  --- */}
              <div className="w-full lg:w-112.5 shrink-0 flex justify-center relative z-10 perspective-[1000px]">
                
                {/* DISCORD */}
                {activeTab === "discord" && (
                  <div 
                    className="relative w-full h-125 rounded-2xl overflow-hidden bg-[#1e1f22] transition-all duration-500 group hover:scale-[1.02]"
                    style={{ boxShadow: `0 0 40px ${communities.discord.color}30`, border: `1px solid ${communities.discord.color}40` }}
                  >
                    <iframe 
                      src={`https://discord.com/widget?id=${discordServerId}&theme=dark`} 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      loading="lazy"
                      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                )}

                {/* WHATSAPP  */}
                {activeTab === "whatsapp" && (
                   <div 
                     className="w-full h-100 relative rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group hover:scale-[1.02]"
                     style={{ boxShadow: `0 0 40px ${communities.whatsapp.color}30`, border: `1px solid ${communities.whatsapp.color}40` }}
                   >
                      <div className="absolute inset-0 bg-linear-to-br from-[#075E54] to-[#050505] opacity-90 z-0" />
                      <div className="relative z-10 w-28 h-28 rounded-3xl bg-[#25D366] flex items-center justify-center mb-6 text-white shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                         <Icons.whatsapp className="w-16 h-16" />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-white font-bold text-3xl mb-2">WhatsApp Group</h3>
                        <p className="text-white/60 text-sm">Tap button on the left to join.</p>
                      </div>
                   </div>
                )}

                {/* TIKTOK  */}
                {activeTab === "tiktok" && (
                   <div 
                      className="w-full h-100 relative rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group hover:scale-[1.02]"
                      style={{ 
                        boxShadow: `0 0 40px ${communities.tiktok.color}30`, 
                        border: `1px solid ${communities.tiktok.color}40`,
                        background: "linear-gradient(145deg, #111 0%, #000 100%)"
                      }}
                   >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE2C55] blur-[80px] opacity-20 animate-pulse" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#25F4EE] blur-[80px] opacity-20 animate-pulse" />

                      <div className="relative z-10 w-28 h-28 rounded-full bg-black flex items-center justify-center mb-6 text-white shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 group-hover:rotate-6 transition-transform duration-500">
                         <Icons.tiktok className="w-14 h-14" />
                      </div>
                      
                      <div className="relative z-10">
                         <h3 className="text-white font-bold text-3xl mb-1">@irexusgtps</h3>
                         <p className="text-white/70 text-sm font-medium tracking-wide">Official TikTok Account</p>
                      </div>
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