import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import BackgroundMusic from './components/BackgroundMusic'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'
import CursorEffect from './components/CursorEffect'
import portfolioData from '../data/portfolio.json'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-100 via-indigo-100 to-white flex items-center justify-center relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full mx-auto mb-6 relative"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-2 border-pink-200 border-t-pink-500 rounded-full"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold gradient-text mb-2"
          >
            Welcome to My Portfolio
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-slate-600"
          >
            Loading amazing experiences...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="antialiased text-slate-800 bg-gradient-to-b from-rose-100 via-indigo-100 to-white">
      <ParticleBackground />
      <BackgroundMusic />
      <ScrollToTop />
      <CursorEffect />
      
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 px-3 py-2 bg-white text-indigo-700 rounded shadow">
        Skip to content
      </a>

      <Header data={portfolioData.personal} />
      
      <main id="main">
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} />
        <Education data={portfolioData.education} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <CodingProfiles data={portfolioData.codingProfiles} />
        <Contact data={portfolioData.contact} personal={portfolioData.personal} />
      </main>
    </div>
  )
}

export default App
