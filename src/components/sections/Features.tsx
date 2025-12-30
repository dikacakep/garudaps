"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { TrendingUp, Smartphone, ShieldCheck, Zap, Gift, Box, Crown } from "lucide-react"
import Image from "next/image" 

const UltraCard = ({ 
  children, 
  className, 
  gradientColor = "from-orange-500" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  gradientColor?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative overflow-hidden rounded-3xl 
        bg-white/5 backdrop-blur-2xl border border-white/10
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,0.02)]
        ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
         <div className={`absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-gradient-to-r ${gradientColor} via-transparent to-transparent blur-3xl opacity-30`} />
      </div>
      
      {/* Mouse Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10 mix-blend-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 h-full p-6 flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    // FIX 1: Mulai dengan #0a0a0a agar sama persis dengan akhir section Tutorial
    <section id="features" className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-black to-black overflow-hidden">
      
      {/* FIX 2: Gradient Penutup Garis (Double Protection) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
          {/* FIX 3: Mask Image agar Grid muncul perlahan (Fade In) dari atas */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black_20%)]" />
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full z-0" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        
        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex items-center gap-2 mb-4"
          >
             <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
             <span className="text-orange-500 font-mono text-xs uppercase tracking-[0.3em]">System Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Server <span className="animate-gradient-text border-b-4 border-orange-500 pb-1">Features.</span>
          </motion.h2>
          
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-xl">
            Features built for the real Growtopians. Optimized for farming, trading, and stability.
          </p>
        </div>

        {/* --- COMPACT BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

          {/* STARTER PACK */}
          <UltraCard className="md:col-span-4 min-h-60" gradientColor="from-cyan-500 via-blue-500 to-purple-500">
             <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
             
             <Image 
                src="/images/icons/bgl.png" 
                alt="Blue Gem Lock"
                width={300}
                height={300}
                className="absolute -bottom-10 -right-6 w-56 h-auto object-contain opacity-50 rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-80 z-0"
             />

             <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full gap-4">
                <div className="space-y-4 max-w-md">
                   <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                     <Box className="text-cyan-400 w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Free BGL Start</h3>
                      <p className="text-white/70 text-sm leading-relaxed font-medium">
                        Login for the first time and receive <span className="text-cyan-400 font-bold">Blue Gem Lock</span> & DLs instantly.
                      </p>
                   </div>
                </div>
             </div>
          </UltraCard>

          {/* AUTO FARM */}
          <UltraCard className="md:col-span-2 min-h-60" gradientColor="from-yellow-500 via-orange-500 to-red-500">
             <div className="absolute right-0 bottom-0 w-40 h-40 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none" />
             
             <Image 
                src="/images/icons/fist.png" 
                alt="Fist Icon"
                width={200}
                height={200}
                className="absolute -bottom-6 -right-6 w-40 h-auto object-contain opacity-40 -rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:opacity-80 z-0"
             />

             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                   <Zap className="text-yellow-400 w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Auto-Farming</h3>
                   <p className="text-white/70 text-xs font-medium">
                     Legal auto-break & plant. Farm gems while AFK.
                   </p>
                </div>
             </div>
          </UltraCard>

          {/* CUSTOM ITEMS (DENGAN GAMBAR PHOENIX/GRIFFIN BARU) */}
          <UltraCard className="md:col-span-3 min-h-45" gradientColor="from-purple-500 via-pink-500 to-rose-500">
             <div className="flex items-center gap-5 h-full relative z-10">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]">
                   <Gift className="text-purple-400 w-7 h-7" />
                </div>
                <div className="max-w-[60%]">
                   <h3 className="text-xl font-bold text-white mb-1">Custom Items</h3>
                   <p className="text-white/50 text-sm leading-snug">
                     Exclusive legendary wings & pets like <span className="text-purple-400 font-bold">Phoenix</span> you won&apos;t find elsewhere.
                   </p>
                </div>
             </div>
          </UltraCard>

          {/* EASY PROFIT */}
          <UltraCard className="md:col-span-3 min-h-45" gradientColor="from-emerald-500 via-green-500 to-lime-500">
             <div className="flex items-center gap-5 h-full relative z-10">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-[inset_0_0_15px_rgba(34,197,94,0.1)]">
                   <Crown className="text-green-400 w-7 h-7" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-1">Easy Profit</h3>
                   <p className="text-white/50 text-sm leading-snug">
                     Easy <span className="text-green-400 font-bold">Profit</span> by doing Fishing, Farming, and Trading.
                   </p>
                </div>
             </div>
          </UltraCard>

          {/* ANTI ROLLBACK */}
          <UltraCard className="md:col-span-2 min-h-40" gradientColor="from-red-500 via-orange-500 to-yellow-500">
             <div className="h-full flex flex-col justify-center relative z-10">
                <ShieldCheck className="text-red-400 w-8 h-8 mb-3 drop-shadow-[0_0_10px_rgba(248,113,113,0.3)]" />
                <h3 className="text-lg font-bold text-white">Anti-Rollback</h3>
                <p className="text-white/40 text-xs mt-1">Real-time database saving. No data loss.</p>
             </div>
          </UltraCard>

          {/* CROSS PLATFORM */}
          <UltraCard className="md:col-span-2 min-h-40" gradientColor="from-blue-500 via-indigo-500 to-violet-500">
             <div className="h-full flex flex-col justify-center relative z-10">
                <Smartphone className="text-blue-400 w-8 h-8 mb-3 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]" />
                <h3 className="text-lg font-bold text-white">Cross Platform</h3>
                <p className="text-white/40 text-xs mt-1">Play seamlessly on PC, Android, and iOS.</p>
             </div>
          </UltraCard>

           {/* ECONOMY */}
           <UltraCard className="md:col-span-2 min-h-40" gradientColor="from-yellow-400 via-orange-500 to-amber-500">
             <div className="h-full flex flex-col justify-center relative z-10">
                <TrendingUp className="text-yellow-400 w-8 h-8 mb-3 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]" />
                <h3 className="text-lg font-bold text-white">Stable Economy</h3>
                <p className="text-white/40 text-xs mt-1">Balanced market. No hyper-inflation.</p>
             </div>
          </UltraCard>

        </div>
      </div>
    </section>
  )
}