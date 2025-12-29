"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WelcomeScreen() {
  // State untuk mengontrol apakah popup masih muncul atau sudah di-close
  const [showModal, setShowModal] = useState(true)
  
  // Ref untuk audio element
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleEnter = () => {
    // 1. Putar lagu saat tombol diklik
    if (audioRef.current) {
      audioRef.current.volume = 0.5 // Set volume 50%
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err)
      })
    }
    
    // 2. Hilangkan modal dengan animasi
    setShowModal(false)
  }

  return (
    <>
      {/* --- AUDIO ELEMENT (Tersembunyi) --- */}
      <audio ref={audioRef} loop>
        <source src="/audio/bgm.mp3" type="audio/mpeg" />
      </audio>

      {/* --- MODAL POPUP --- */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center px-4"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            {/* 1. Background Gelap / Blur di belakang modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* 2. Card Modal Utama */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[40px] p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Dekorasi Glow di dalam card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Logo */}
              <div className="relative w-48 h-24 mx-auto mb-6">
                 <Image 
                    src="/images/logo/GARUDAPS2026.png" 
                    alt="GarudaPS Logo" 
                    fill 
                    className="object-contain drop-shadow-[0_0_20px_rgba(255,92,0,0.4)]"
                 />
              </div>

              {/* Judul & Deskripsi */}
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                Welcome to <span className="text-orange-500">GarudaPS</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Discover exclusive features, meet incredible players from around the world, and dive into a community built for epic journeys.
                <br /><br />
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest">
                  Ready? Press the button below to begin!
                </span>
              </p>

              {/* Tombol Enter */}
              <button
                onClick={handleEnter}
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-black text-white transition-all duration-200 bg-orange-600 rounded-2xl hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:-translate-y-1 active:scale-95"
              >
                <span>ENTER WORLD</span>
                {/* Efek kilatan pada tombol */}
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10 pointer-events-none" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}