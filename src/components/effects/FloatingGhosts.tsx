"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const GHOST_COUNT = 15

const random = (min: number, max: number) => Math.random() * (max - min) + min

interface Ghost {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
  initialRotation: number
  targetRotation: number
  xMove: string
  yMove: string
}

export default function FloatingGhosts() {
  const [ghosts, setGhosts] = useState<Ghost[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const newGhosts: Ghost[] = Array.from({ length: GHOST_COUNT }).map((_, i) => {
      return {
        id: i,
        top: `${random(0, 100)}vh`,
        left: `${random(0, 100)}vw`,
        xMove: `${random(-30, 30)}vw`,
        yMove: `${random(-30, 30)}vh`,
        size: random(40, 80), 
        duration: random(15, 30),
        delay: random(0, 10),
        initialRotation: random(-20, 20),
        targetRotation: random(-180, 180),
      }
    })
    setGhosts(newGhosts)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-1 overflow-hidden pointer-events-none select-none">
      {ghosts.map((ghost) => (
        <motion.div
          key={ghost.id}
          className="absolute opacity-80 will-change-transform" 
          style={{
            top: ghost.top,
            left: ghost.left,
            width: ghost.size,
            height: ghost.size,
          }}
          animate={{
            x: [0, ghost.xMove, 0],
            y: [0, ghost.yMove, 0],
            rotate: [ghost.initialRotation, ghost.targetRotation, ghost.initialRotation],
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
              alt="Floating Particle"
              fill
              sizes="(max-width: 768px) 50px, 100px"
              className="object-contain drop-shadow-xl" 
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}