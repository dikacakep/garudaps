"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Crown, Code, Shield, Users, Sparkles } from "lucide-react"

const teamMembers = [
  {
    id: "irexus",
    name: "iRexus",
    role: "Server Owner",
    avatar: "/images/team/Irexus.png",
    color: "#EAB308",
    stats: "01",
    icon: Crown,
    desc: "Building a world where players rule."
  },
  {
    id: "stargel",
    name: "StarGel",
    role: "Server Coder",
    avatar: "/images/team/StarGel.png",
    color: "#3B82F6",
    stats: "02",
    icon: Code,
    desc: "Code is poetry. Zero lag, max fun."
  },
  {
    id: "rasha",
    name: "Ryo",
    role: "Senior Staff",
    avatar: "/images/team/RYo.jpeg",
    color: "#22C55E",
    stats: "03",
    icon: Shield,
    desc: "Keeping the community vibe positive."
  },
  {
    id: "sho",
    name: "Hades",
    role: "Senior Staff",
    avatar: "/images/team/Sho.jpeg",
    color: "#22C55E",
    stats: "04",
    icon: Shield,
    desc: "Fair play is my priority."
  },
  {
    id: "aed",
    name: "Aed",
    role: "Community Manager",
    avatar: "/images/team/aed.jpeg",
    color: "#A855F7",
    stats: "05",
    icon: Users,
    desc: "Bridging the gap between players and devs."
  },
  {
    id: "dexton",
    name: "Dexton",
    role: "Server Staff",
    avatar: "/images/team/dextonn.png",
    color: "#22C55E",
    stats: "06",
    icon: Shield,
    desc: "Ready to assist! Maintaining order."
  },
  {
    id: "akiko",
    name: "akiko",
    role: "Server Moderator",
    avatar: "/images/team/akiko.jpeg",
    color: "#FF5C00",
    stats: "07",
    icon: Shield,
    desc: "Ensuring your best gameplay experience."
  },
]

export default function Teams() {
  const [activeId, setActiveId] = useState(teamMembers[0].id)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = teamMembers.findIndex(m => m.id === currentId);
        const nextIndex = (currentIndex + 1) % teamMembers.length;
        return teamMembers[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, activeId]);

  return (
    <section id="teams" className="py-24 min-h-screen bg-linear-to-b from-black to-[#0a0a0a] relative flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-200 h-200 bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-200 h-200 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container px-4 mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">The Authority</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Server{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-yellow-200 to-orange-500 animate-gradient-text bg-300% underline decoration-orange-500 decoration-4 underline-offset-8">
              Team
            </span>
          </h2>
        </div>

        {/* --- ACCORDION --- */}
        <div
          className="flex flex-col lg:flex-row gap-3 h-175 lg:h-137.5 w-full max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {teamMembers.map((member) => {
            const isActive = activeId === member.id;
            const Icon = member.icon;

            return (
              <motion.div
                key={member.id}
                layout
                onClick={() => setActiveId(member.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${isActive
                    ? "flex-5 lg:flex-[3.5] border-white/20 bg-[#0a0a0a]"
                    : "flex-1 border-white/5 bg-black/40 hover:bg-white/5"
                  }
                `}
              >
                {/* BACKGROUND IMAGE  */}
                <div className="absolute inset-0 z-0 h-full w-full">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className={`object-cover transition-transform duration-1000 ease-out 
                            ${isActive
                        ? "scale-105 grayscale-0 opacity-100"
                        : "scale-100 grayscale opacity-40 group-hover:opacity-60"
                      }
                        `}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className={`absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-80'}`} />

                  {/* Color Glow Overlay (Active Only) */}
                  <div
                    className={`absolute inset-0 bg-linear-to-b from-transparent to-black/90 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>

                {/* PROGRESS BAR  */}
                {isActive && !isPaused && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 z-30 bg-white"
                    style={{ backgroundColor: member.color, boxShadow: `0 0 10px ${member.color}` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}

                {/* INACTIVE STATE (Vertical Text) */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="lg:[writing-mode:vertical-rl] lg:rotate-180 flex items-center gap-4 opacity-50">
                      <h3 className="text-sm md:text-lg font-bold text-white tracking-[0.2em] uppercase whitespace-nowrap">
                        {member.name}
                      </h3>
                      <span className="text-[10px] font-mono text-white/40">{member.stats}</span>
                    </div>
                  </div>
                )}

                {/* ACTIVE STATE CONTENT */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end"
                    >
                      <div className="absolute -top-10 -right-10 text-[150px] font-black text-white/5 select-none leading-none z-0">
                        {member.stats}
                      </div>

                      <div className="relative z-10">

                        {/* Role Label */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-2 py-1 rounded bg-white/10 border border-white/10 backdrop-blur-md flex items-center gap-2">
                            <Icon className="w-3 h-3" style={{ color: member.color }} />
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{member.role}</span>
                          </div>
                        </div>

                        {/* Name */}
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] mb-4 tracking-tighter drop-shadow-lg">
                          {member.name}
                        </h3>

                        {/* Quote/Desc */}
                        <div className="relative pl-4 border-l-2" style={{ borderColor: member.color }}>
                          <p className="text-white/80 font-medium text-sm md:text-base max-w-md leading-relaxed">
                            &quot;{member.desc}&quot;
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Border Glow Active */}
                <div className={`absolute inset-0 border-2 rounded-3xl pointer-events-none transition-all duration-500 ${isActive ? 'border-white/10' : 'border-transparent'}`}
                  style={{ borderColor: isActive ? `${member.color}40` : '' }}
                />

              </motion.div>
            )
          })}
        </div>

        {/* Helper Text */}
        <div className="flex justify-center gap-6 mt-8 opacity-40">
          <div className="flex items-center gap-2 text-[10px] font-mono text-white uppercase">
            <Users className="w-3 h-3" />
            <span>Hover to Pause</span>
          </div>
        </div>

      </div>
    </section>
  )
}