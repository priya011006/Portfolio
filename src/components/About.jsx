import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.img
                src={data.profileImage}
                alt={`Portrait of ${data.name}`}
                className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full object-cover shadow-xl ring-4 ring-white border-4 border-slate-200"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -z-10 -top-4 -left-4 h-24 w-24 rounded-full bg-pink-300/80 blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -z-10 -bottom-6 -right-6 h-28 w-28 rounded-full bg-indigo-300/80 blur-2xl"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={{ 
              opacity: inView ? 1 : 0, 
              x: inView ? 0 : 100,
              rotateY: inView ? 0 : 15
            }}
            transition={{ 
              delay: 0.4, 
              duration: 1,
              type: "spring",
              stiffness: 60
            }}
            className="flex-1"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="rounded-2xl p-1 bg-gradient-to-br from-pink-300 via-indigo-300 to-teal-300 shadow-lg border-2 border-slate-200"
            >
              <div className="rounded-2xl bg-white/90 backdrop-blur p-6 sm:p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20, x: 30 }}
                  animate={{ 
                    opacity: inView ? 1 : 0, 
                    y: inView ? 0 : 20,
                    x: inView ? 0 : 30
                  }}
                  transition={{ 
                    delay: 0.6, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80
                  }}
                  className="text-3xl sm:text-4xl font-bold text-slate-900"
                >
                  About Me
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20, x: 50 }}
                  animate={{ 
                    opacity: inView ? 1 : 0, 
                    y: inView ? 0 : 20,
                    x: inView ? 0 : 50
                  }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 60
                  }}
                  className="mt-4 text-slate-700 leading-relaxed"
                >
                  {data.about}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
