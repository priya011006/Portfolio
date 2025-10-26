import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding Profiles', href: '#coding' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full sticky top-0 z-40 backdrop-blur transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/90'
      } border-b border-slate-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-indigo-700 hover:text-indigo-800 transition-colors"
          >
            {data.name}
          </motion.a>
          
          <div className="flex items-center space-x-4">
            <nav aria-label="Primary" className="text-sm font-semibold text-slate-600">
              <ul className="flex items-center space-x-4 sm:space-x-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={item.href}
                      whileHover={{ 
                        scale: 1.1,
                        color: "#4f46e5"
                      }}
                      className="hover:text-indigo-700 transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            <MusicToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

const MusicToggle = () => {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMusic = () => {
    const audio = document.getElementById('bg-music')
    if (audio) {
      audio.muted = !audio.muted
      setIsMuted(audio.muted)
    }
  }

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-2 rounded-full bg-indigo-200 text-indigo-900 text-sm font-medium hover:bg-indigo-300 transition-all duration-300"
    >
      {isMuted ? '🔇 Unmute' : '🎵 Mute'}
    </motion.button>
  )
}

export default Header

