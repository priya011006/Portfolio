import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -left-24 h-72 w-72 bg-pink-300/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 -right-16 h-72 w-72 bg-indigo-300/60 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ 
              opacity: inView ? 1 : 0, 
              scale: inView ? 1 : 0.5, 
              y: inView ? 0 : 30 
            }}
            transition={{ 
              delay: 0.2, 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-3 inline-block px-3 py-1 rounded-full bg-indigo-200 text-indigo-800 text-xs font-semibold tracking-wide"
          >
            Hi, I'm
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.3, y: 50, rotateX: -90 }}
            animate={{ 
              opacity: inView ? 1 : 0, 
              scale: inView ? 1 : 0.3, 
              y: inView ? 0 : 50,
              rotateX: inView ? 0 : -90
            }}
            transition={{ 
              delay: 0.4, 
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
          >
            <motion.span 
              className="gradient-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {data.name}
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-3 text-lg sm:text-xl text-slate-800 font-medium"
          >
            {data.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(99, 102, 241, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-indigo-700 font-semibold shadow border-2 border-indigo-300 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
