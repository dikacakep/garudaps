/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const GHOST_COUNT = 12

// Helper function
const random = (min: number, max: number) => Math.random() * (max - min) + min

interface Ghost {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
  initialRotation: number
  targetRotation: number
  xMove: number
  yMove: number
}

function FloatingGhosts() {
  const [ghosts, setGhosts] = useState<Ghost[]>([])

  useEffect(() => {
    const generatedGhosts = Array.from({ length: GHOST_COUNT }).map((_, i) => ({
      id: i,
      top: random(-20, 120),
      left: random(-20, 120),
      xMove: random(-30, 30),
      yMove: random(-30, 30),
      size: random(60, 120),
      duration: random(15, 30),
      delay: random(0, 10),
      initialRotation: random(-20, 20),
      targetRotation: random(-180, 180),
    }))
    
    setGhosts(generatedGhosts)
  }, [])

  if (ghosts.length === 0) return null

  return (
    <div className="hidden md:block fixed inset-0 z-50 overflow-hidden pointer-events-none select-none h-screen w-screen">
      {ghosts.map((ghost) => (
        <motion.div
          key={ghost.id}
          className="absolute will-change-transform transform-gpu mix-blend-screen"
          style={{
            top: `${ghost.top}vh`,
            left: `${ghost.left}vw`,
            width: ghost.size,
            height: ghost.size,
            opacity: 0.5, 
          }}
          animate={{
            x: [0, `${ghost.xMove}vw`, 0],
            y: [0, `${ghost.yMove}vh`, 0],
            rotate: [ghost.initialRotation, ghost.targetRotation, ghost.initialRotation],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{
            duration: ghost.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: ghost.delay,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/set.png"
              alt=""
              fill
              sizes="150px"
              className="object-contain drop-shadow-2xl"
              priority={false} 
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingGhosts;