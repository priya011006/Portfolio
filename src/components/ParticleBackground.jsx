import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 2
      }
      return particle
    }

    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, createParticle)
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle = createParticle()
        return [...prev.slice(-15), newParticle]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle absolute rounded-full bg-gradient-to-r from-pink-300/30 to-indigo-300/30"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: -100,
            x: particle.x + (Math.random() - 0.5) * 100,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground

