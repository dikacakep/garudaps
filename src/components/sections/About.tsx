"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative py-40 overflow-hidden bg-[#0a0a0a]">
      

      {/* Connector Gradients */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-black via-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black via-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-7xl px-4 mx-auto relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-px bg-linear-to-r from-orange-500/0 via-orange-500/20 to-purple-500/0 rounded-4xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000" />

          <div className="relative bg-linear-to-br from-white/2 via-transparent to-transparent backdrop-blur-md border border-white/5 rounded-[30px] overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
            
            <div className="absolute top-0 left-0 p-6 opacity-30">
               <div className="w-4 h-4 border-t border-l border-white"></div>
            </div>
            <div className="absolute bottom-0 right-0 p-6 opacity-30">
               <div className="w-4 h-4 border-b border-r border-white"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              
              {/* --- LEFT: CONTENT --- */}
              <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                
                {/* Header */}
                <div className="mb-8 relative">
                  <span className="text-orange-500/80 text-xs font-mono tracking-[0.3em] uppercase mb-3 block">Server Economy: Stable</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-sm">
                    About <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-200">GarudaPS</span>
                  </h2>
                </div>

                {/* Narrative */}
                <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light text-justify">
                  <p>
                    <span className="text-white font-bold shadow-black drop-shadow-lg">Build. Farm. Trade.</span> GarudaPS brings the ultimate private server experience. We know what Growtopians want: stability, freedom, and a balanced economy.
                  </p>
                  <p>
                     Forget about <strong className="text-orange-400">Rollbacks</strong> and Downtime. Our infrastructure is built to handle massive World Locks transactions, intense farming, and huge social events without a single lag spike.
                  </p>
                </div>

                {/* Footer Tech Stats  */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between gap-2">
                   
                   <div className="px-4 py-2 rounded-lg bg-white/2 border border-white/5 flex flex-col items-center flex-1">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Gems Rate</span>
                      <span className="text-white font-mono font-bold text-lg">HIGH</span>
                   </div>

                   <div className="px-4 py-2 rounded-lg bg-white/2 border border-white/5 flex flex-col items-center flex-1">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Start Item</span>
                      <span className="text-white font-mono font-bold text-lg">Free BGL</span>
                   </div>

                   <div className="px-4 py-2 rounded-lg bg-white/2 border border-white/5 flex flex-col items-center flex-1">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">System</span>
                      <span className="text-green-400 font-mono font-bold text-lg shadow-green-500/50 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">ONLINE</span>
                   </div>
                </div>

              </div>

              <div className="relative h-112.5 lg:h-full min-h-125 w-full overflow-hidden group/image">
                
                {/* Image */}
                <Image
                  src="/images/logo/garudaps.jpg" 
                  alt="GarudaPS World"
                  fill
                  className="object-cover opacity-90 group-hover/image:scale-105 group-hover/image:opacity-100 transition-all duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />

                {/* --- LOGO --- */}
                <div className="absolute top-6 right-6 z-30 pointer-events-none">
                   <div className="relative w-24 h-24 hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-orange-500 blur-[30px] opacity-50 animate-pulse"></div>
                      <Image 
                         src="/images/logo/GARUDAPS2026.png" 
                         alt="Logo Hologram"
                         fill
                         className="object-contain drop-shadow-2xl relative z-10"
                      />
                   </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}