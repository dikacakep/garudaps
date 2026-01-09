"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-16 pb-8 overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px] z-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.6)] z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* LOGO */}
          <div className="relative w-20 h-20 mb-4 hover:scale-110 transition-transform duration-500 cursor-pointer drop-shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            <Image
              src="/images/logo/GARUDAPS2026.png" 
              alt="GarudaPS Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-2xl font-black uppercase tracking-[0.2em] mb-8 relative inline-block">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-white to-orange-500 animate-gradient-text bg-300%">
              Garuda
            </span>{" "}
            <span className="text-white">PS</span>
          </h3>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mb-8">
            {/* Discord */}
            <Link href="https://discord.gg/jhJcGfd4mk" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white text-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(88,101,242,0.5)]">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 14.197 14.197 0 0 0-.64 1.314 18.285 18.285 0 0 0-5.426 0 14.28 14.28 0 0 0-.641-1.314.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.679 4.37a.069.069 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </Link>
            
            {/* TikTok */}
            <Link href="https://www.tiktok.com/@irexusgtps" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-black hover:border-white/20 hover:text-white text-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </Link>

             {/* WhatsApp */}
             <Link href="https://chat.whatsapp.com/L2L6fFUNzoH1JW7eijiYqk" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </Link>
          </div>

          <div className="w-24 h-1 bg-linear-to-r from-transparent via-orange-500/30 to-transparent rounded-full mb-6" />

          {/* TEXT COPYRIGHT */}
          <div className="space-y-1">
             <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} Garuda Private Server. All rights reserved.
             </p>
             <p className="text-white/20 text-xs">
                Not affiliated with Growtopia or Ubisoft Entertainment.
             </p>
          </div>

        </div>
      </div>
    </footer>
  )
}