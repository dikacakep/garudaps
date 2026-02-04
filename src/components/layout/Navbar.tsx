"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showLogo, setShowLogo] = useState(false)
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoverStyle, setHoverStyle] = useState({})
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = useMemo(() => [
    "Home", "Tutorial", "Features", "About", "Community", "Teams"
  ], [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveSection(sectionId)
    }
    setOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowLogo(scrollY > 100) 

      const scrollPosition = window.scrollY + 150
      for (const item of navItems) {
        const sectionId = item.toLowerCase()
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
          }
        }
      }
    }
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [navItems]) 

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    setHoveredIndex(index)
    const target = e.currentTarget
    setHoverStyle({
      width: target.offsetWidth,
      left: target.offsetLeft,
    })
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-110 px-4 md:px-6 py-4 transition-all duration-300 pointer-events-none">
        
        {/* CONTAINER MAIN*/}
        <div className="w-full max-w-350 mx-auto flex justify-between items-center relative pointer-events-auto">
          
          {/* --- LOGO --- */}
          <div className="flex items-center z-120 min-w-30 h-12"> 
             <AnimatePresence>
               {showLogo && (
                 <motion.button 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => scrollToSection("home")} 
                    className="block relative group cursor-pointer"
                 >
                    <div className="relative w-28 h-8 md:w-44 md:h-12 transition-transform group-hover:scale-105 duration-300">
                      <Image
                        src="/images/logo/GARUDAPS2026.png"
                        alt="GarudaPS Logo"
                        fill
                        sizes="(max-width: 768px) 120px, 180px"
                        className="object-contain drop-shadow-md"
                        priority
                      />
                    </div>
                 </motion.button>
               )}
             </AnimatePresence>
          </div>

          {/* --- DESKTOP NAV LINKS --- */}
          <div className="hidden lg:flex items-center">
            <div 
                ref={navRef}
                className="relative flex items-center gap-1 bg-black/60 border border-white/10 rounded-full px-2 py-1.5 shadow-2xl backdrop-blur-md"
                onMouseLeave={handleMouseLeave}
            >
              <div 
                 className="absolute top-1.5 bottom-1.5 bg-white/10 rounded-full transition-all duration-300 ease-out z-0 pointer-events-none"
                 style={{ 
                    ...hoverStyle, 
                    opacity: hoveredIndex !== null ? 1 : 0 
                 }}
              />

              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase()
                
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    onMouseEnter={(e) => handleMouseEnter(index, e)}
                    className={`
                        relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300
                        ${isActive ? "text-white font-bold" : "text-white/60 hover:text-white"}
                    `}
                  >
                    {item}
                    
                    {isActive && (
                        <motion.div 
                            layoutId="activeDot"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_5px_#f97316]"
                        />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="lg:hidden flex justify-end z-120">
            <button
              className="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center active:scale-95 transition-transform backdrop-blur-md text-white"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-140 lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-75 z-150 lg:hidden bg-[#0a0a0a] border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                  <div className="relative w-28 h-8">
                    <Image
                      src="/images/logo/GARUDAPS2026.png"
                      alt="GarudaPS Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full bg-white/5 border border-white/10 active:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="flex-1 flex flex-col justify-center p-6 gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${
                          activeSection === item.toLowerCase()
                            ? "bg-white/5 border border-orange-500/30"
                            : "hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span className={`text-lg font-bold ${
                           activeSection === item.toLowerCase() ? "text-orange-500" : "text-white"
                        }`}>
                          {item}
                        </span>
                        
                        {activeSection === item.toLowerCase() && (
                          <span className="text-orange-500 text-lg">→</span>
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 border-t border-white/10 text-center">
                  <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase">
                    GARUDA PRIVATE SERVER
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}