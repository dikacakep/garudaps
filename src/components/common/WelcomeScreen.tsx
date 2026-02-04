"use client"

import { useState, useRef, useEffect } from "react"
import { motion} from "framer-motion" 
import Image from "next/image"
import { Headphones, ArrowRight, Zap } from "lucide-react"

export default function WelcomeScreen() {
  const [isOpening, setIsOpening] = useState(false)
  const [showUI, setShowUI] = useState(true) 
  
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        setShowUI(false) 
      }, 2000) 
      return () => clearTimeout(timer)
    }
  }, [isOpening])

  // Audio Control Logic 
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleControl = (e: any) => {
      if (!audioRef.current) return; 
      
      if (e.detail.action === "pause") {
        audioRef.current.pause();
      } else if (e.detail.action === "play") {
        audioRef.current.play().catch(err => console.log("Playback prevented:", err));
      }
    };

    window.addEventListener("garuda-bgm-control", handleControl);
    return () => window.removeEventListener("garuda-bgm-control", handleControl);
  }, []); 


  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5 
      audioRef.current.play().catch((err) => console.error("Audio error:", err))
    }
    setIsOpening(true)
  }

  const curtainTransition = {
    duration: 1.5, 
    ease: [0.76, 0, 0.24, 1] as const
  }


   return (
    <>
      <audio ref={audioRef} id="bgm-audio" loop>
        <source src="/audio/bgm.mp3" type="audio/mpeg" />
      </audio>
      
      {showUI && (
        <div 
            className={`fixed inset-0 z-9999 flex items-center justify-center overflow-hidden transition-colors duration-300
            ${isOpening ? "bg-transparent pointer-events-none" : "bg-black"}`}
        >
            
            {/* --- LEFT CURTAIN --- */}
            <motion.div
            initial={{ x: "0%" }}
            animate={{ x: isOpening ? "-100%" : "0%" }}
            transition={curtainTransition}
            className="absolute top-0 left-0 w-[50.5%] h-full bg-[#050505] z-20 overflow-hidden border-r border-white/5 will-change-transform"
            >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#050505]" />
            
            <div 
                className="hidden md:block absolute bottom-0 left-0 w-full h-1/2 opacity-30 pointer-events-none transform-gpu"
                style={{
                    backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px), linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px) translateZ(-100px)',
                    maskImage: 'linear-gradient(to top, black, transparent 80%)',
                }} 
            />
            
            {/* Image Dekorasi */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 md:w-125 md:h-125 opacity-40 mix-blend-screen pointer-events-none z-10">
                    <Image 
                        src="/images/set.png"
                        alt=""
                        fill
                        priority 
                        sizes="(max-width: 768px) 50vw, 33vw" 
                        className="object-contain"
                    />
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/50 z-20" />
            </motion.div>

            {/* --- RIGHT CURTAIN --- */}
            <motion.div
            initial={{ x: "0%" }}
            animate={{ x: isOpening ? "100%" : "0%" }}
            transition={curtainTransition}
            className="absolute top-0 right-0 w-[50.5%] h-full bg-[#050505] z-20 overflow-hidden border-l border-white/5 will-change-transform"
            >
            <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#050505]" />
            
            <div className="hidden md:block absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-right opacity-20 mix-blend-overlay grayscale" />
            
            <div 
                className="hidden md:block absolute bottom-0 right-0 w-full h-1/2 opacity-30 pointer-events-none transform-gpu"
                style={{
                    backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px), linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px) translateZ(-100px)',
                    maskImage: 'linear-gradient(to top, black, transparent 80%)',
                }} 
            />
            
            <div className="absolute -top-20 -right-20 w-80 h-80 md:w-125 md:h-125 opacity-30 mix-blend-screen pointer-events-none z-10 transform scale-x-[-1]">
                    <Image 
                        src="/images/set.png" 
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-contain"
                    />
            </div>
            <div className="absolute inset-0 bg-linear-to-l from-black via-transparent to-black/50 z-20" />
            </motion.div>

            {/* CONTENT CENTER */}
            <motion.div
            animate={{ 
                opacity: isOpening ? 0 : 1, 
                scale: isOpening ? 1.1 : 1, 
            }}
            transition={{ duration: 0.5 }} 
            className="relative z-30 flex flex-col items-center justify-center w-full max-w-3xl px-6"
            >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-175 md:h-125 bg-orange-600/10 blur-3xl md:blur-[100px] rounded-full pointer-events-none" />

            {/* LOGO */}
            <div className="relative w-60 h-32 md:w-80 md:h-40 mb-8 group cursor-default">
                <Image 
                    src="/images/logo/GARUDAPS2026.png" 
                    alt="Logo" 
                    fill 
                    priority
                    sizes="(max-width: 768px) 240px, 320px"
                    className="object-contain drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                />
            </div>

            {/* TEXT & TAGLINE */}
            <div className="text-center space-y-5 mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/30 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    <Zap className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-orange-200 tracking-[0.3em] uppercase">Immersive Private Server</span>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl leading-none text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-red-500 to-yellow-500 md:animate-gradient-text bg-300%">
                    GARUDAPS
                </h1>
                
                <p className="text-white/60 font-medium text-sm md:text-lg tracking-wide max-w-lg mx-auto leading-relaxed">
                    Experience the pinnacle of GT private servers. <br />
                    Built for stability. Designed for glory.
                </p>
            </div>

            {/* BUTTON */}
            <div className="relative group">
                <button
                onClick={handleEnter}
                className="relative px-12 py-5 md:px-16 md:py-6 bg-black/60 border border-orange-500/30 text-orange-50 font-black text-lg md:text-xl uppercase tracking-widest rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-orange-400 group-hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] focus:outline-none active:scale-95 cursor-pointer"
                >
                <div className="hidden md:block absolute top-0 bottom-0 -left-full w-[50%] bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out_infinite]" />
                
                <span className="relative z-10 flex items-center gap-4 drop-shadow-md group-hover:text-white transition-colors">
                    Initialize World 
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 text-orange-400 group-hover:text-white" />
                </span>
                </button>
            </div>

            <div className="mt-12 flex items-center gap-3 text-white/30 text-[10px] font-mono">
                <Headphones className="w-4 h-4 animate-bounce" />
                <span>Audio Enhanced Experience (50%)</span>
            </div>

            </motion.div>
        </div>
      )}
    </>
  )
}