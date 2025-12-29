"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type React from "react"

// --- TUTORIAL CARD ---
const TutorialCard = ({ title, imageSrc, steps }: { title: string; imageSrc: string; steps: React.ReactNode[] }) => (
  <motion.div
    suppressHydrationWarning={true}
    
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative overflow-hidden group
               bg-white/5 
               backdrop-blur-md 
               border border-white/10 
               rounded-[32px] 
               p-8 md:p-10 
               shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
               hover:border-orange-500/30 
               hover:bg-white/[0.07]
               transition-all duration-300"
  >
    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent rotate-12 pointer-events-none blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    {/* Header Card (Icon & Title) */}
    <div className="relative z-10 flex items-center gap-5 mb-8 border-b border-white/5 pb-6">
      <div className="bg-white/5 border border-white/10 p-3 rounded-2xl group-hover:scale-110 group-hover:border-orange-500/30 transition-all duration-300 relative w-16 h-16 flex items-center justify-center shadow-lg">
        <div className="relative w-10 h-10">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
          />
        </div>
      </div>
      <h3 className="text-2xl font-black text-white group-hover:text-orange-500 transition-colors italic tracking-tight uppercase drop-shadow-md">
        {title}
      </h3>
    </div>

    {/* Steps List */}
    <ul className="relative z-10 space-y-4 text-left">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4 text-white/80 leading-relaxed font-medium">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 text-xs font-bold shrink-0 mt-0.5 border border-orange-500/30">
            {i + 1}
          </span>
          <div className="flex-1 text-sm md:text-base">{step}</div>
        </li>
      ))}
    </ul>
  </motion.div>
)

export default function TutorialSection() {
 const tutorials = [
    {
      title: "Windows",
      imageSrc: "/images/icons/win.png", 
      steps: [
        <span key="press-win-r">Press Win+R → paste <code className="bg-black/30 px-1 rounded text-orange-400">C:\Windows\System32\drivers\etc</code></span>,
        <span key="open-hosts-with-notepad">
          Open <span className="font-bold text-white">hosts</span> with Notepad (Run as Admin)
        </span>,
        <span key="add-hosts">
          Add the following lines at the bottom: <br />
          <code className="text-orange-400 mt-3 block font-mono bg-black/40 p-4 rounded-xl border border-white/10 text-xs md:text-sm select-all">
            157.66.54.50 growtopia1.com
            <br />
            157.66.54.50 growtopia2.com
            <br />
            157.66.54.50 www.growtopia1.com
            <br />
            157.66.54.50 www.growtopia2.com
          </code>
        </span>,
        "Save the file → Launch Growtopia",
      ],
    },
    {
      title: "PowerTunnel (Android)",
      imageSrc: "/images/icons/ptun.png", 
      steps: [
        <span key="install-power-tunnel">
          Install{" "}
          <a 
            href="https://android.izzysoft.de/repo/apk/io.github.krlvm.powertunnel.android" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            PowerTunnel APK
          </a>
        </span>,
        "Open App → Menu (Plugin) → Hosts → Settings (Gear Icon)",
        <span key="enter-url-power-tunnel">
          Enter URL: <br/>
          <span className="text-orange-400 font-mono text-sm bg-black/30 px-2 py-1 rounded block mt-1 w-fit">https://garudaps.vercel.app/android</span>
        </span>,
        'Go Back → Click "CONNECT" button → Open Growtopia',
      ],
    },
    {
      title: "Hosts Go (Android)",
      imageSrc: "/images/icons/hostsgo.png", 
      steps: [
        <span key="install-hosts-go">
          Install{" "}
          <a 
            href="https://www.mediafire.com/file/ctly08te3i8rlwq/%28No_root%29_Hosts_Go_2.1.9_Apkpure.apk/file" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            Hosts Go (No Root)
          </a>
        </span>,
        "Open App → Hosts Editor → Enable Switch → Download Hosts File",
        <span key="enter-url-hosts-go">
          Enter URL: <br/>
          <span className="text-orange-400 font-mono text-sm bg-black/30 px-2 py-1 rounded block mt-1 w-fit">https://garudaps.vercel.app/android</span>
        </span>,
        "Apply → Start Protection (VPN) → Open Growtopia",
      ],
    },
    {
      title: "Virtual Host (Android)",
      imageSrc: "/images/icons/virtual.png", 
      steps: [
        <span key="install-virtual-host">
          Install{" "}
          <a 
            href="https://www.apkshub.com/app/com.github.xfalcon.vhosts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            Virtual Host APK
          </a>
        </span>,
        <span key="download-hosts-file">
          Download Hosts File{" "}
          <a 
            href="#" 
            download
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            here
          </a>
        </span>,
        "Open App → Click 'SELECT HOSTS FILE'",
        "Select the downloaded file",
        "Turn ON (Green) → Open Growtopia",
      ],
    },
    {
      title: "Mac",
      imageSrc: "/images/icons/mac.png", 
      steps: [
        <span key="finder">
          Open Finder → Go → Go to Folder → Type <code className="bg-black/30 px-1 rounded text-orange-400">/private/etc/hosts</code>
        </span>,
        <span key="add-hosts">
          Copy 'hosts' file to Desktop → Edit → Add lines: <br />
          <code className="text-orange-400 mt-3 block font-mono bg-black/40 p-4 rounded-xl border border-white/10 text-xs md:text-sm select-all">
            157.66.54.50 growtopia1.com
            <br />
            157.66.54.50 growtopia2.com
            <br />
            157.66.54.50 www.growtopia1.com
            <br />
            157.66.54.50 www.growtopia2.com
          </code>
        </span>,
        "Save → Drag back to /private/etc/ → Authenticate → Done",
      ],
    },
    {
      title: "Surge 5 (iOS)",
      imageSrc: "/images/icons/surge.png", 
      steps: [
        <span key="install-surge5">
          Install{" "}
          <a 
            href="https://apps.apple.com/us/app/surge-5/id1442620678" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 font-bold underline hover:text-orange-400 transition-colors"
          >
            Surge 5
          </a>{" "}
          from App Store
        </span>,
        <span key="download-hosts-file">
          Open App → Import Profile via URL: <br/>
          <span className="text-orange-400 font-mono text-sm bg-black/30 px-2 py-1 rounded block mt-1 w-fit">https://garudaps.vercel.app/ios</span>
        </span>,
        "Allow VPN Configuration → Tap 'Start' → Open Growtopia",
      ],
    },
  ]

  return (
    <section id="tutorial" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] z-20 pointer-events-none -translate-y-full" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

      {/* Background Glow Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter inline-block relative text-white"
          >
            <span className="animate-gradient-text">How to Play</span>
            <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(255,92,0,0.6)]" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl font-medium mt-10 tracking-wide max-w-2xl mx-auto"
          >
            Select your platform below and follow the simple steps to join the world of GarudaPS!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {tutorials.map((tutorial, idx) => (
            <TutorialCard key={idx} {...tutorial} />
          ))}
        </div>
      </div>
    </section>
  )
}