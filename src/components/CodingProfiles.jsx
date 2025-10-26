import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CodingProfiles = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.section
      ref={ref}
      id="coding"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-indigo-100 to-rose-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Coding Profiles</h2>
          <p className="mt-3 text-slate-700">Check out my competitive programming and problem-solving profiles.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
        >
          {data.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                scale: inView ? 1 : 0.8
              }}
              transition={{ 
                delay: 0.6 + index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white rounded-xl shadow border-2 border-slate-300 p-6 flex flex-col items-center group"
            >
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.3,
                  rotate: 15
                }}
                whileTap={{ scale: 0.95 }}
                className="transform transition-all duration-300"
              >
                <motion.img
                  src={profile.logo}
                  alt={profile.name}
                  className="h-20 w-20 object-contain"
                  whileHover={{ 
                    filter: "brightness(1.2) contrast(1.1)",
                    rotate: 20,
                    scale: 1.2
                  }}
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.a>
              <motion.p
                whileHover={{ 
                  color: "#4f46e5",
                  scale: 1.05
                }}
                className="mt-4 font-semibold text-slate-900 transition-colors"
              >
                {profile.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CodingProfiles
