import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const getColorClasses = (color) => {
    const colorMap = {
      indigo: { bg: 'bg-indigo-200', fill: 'bg-indigo-500' },
      pink: { bg: 'bg-pink-200', fill: 'bg-pink-500' },
      emerald: { bg: 'bg-emerald-200', fill: 'bg-emerald-500' },
      orange: { bg: 'bg-orange-200', fill: 'bg-orange-500' },
      amber: { bg: 'bg-amber-200', fill: 'bg-amber-500' },
      fuchsia: { bg: 'bg-fuchsia-200', fill: 'bg-fuchsia-500' },
      rose: { bg: 'bg-rose-200', fill: 'bg-rose-500' }
    }
    return colorMap[color] || colorMap.indigo
  }

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-rose-100/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Skills</h2>
          <p className="mt-3 text-slate-700">Technologies and tools I enjoy working with.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 space-y-6"
        >
          {data.map((skill, index) => {
            const colors = getColorClasses(skill.color)
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.p
                  whileHover={{ scale: 1.05, color: "#4f46e5" }}
                  className="font-medium text-slate-800 transition-colors"
                >
                  {skill.name}
                </motion.p>
                <div className={`progress-bar ${colors.bg} mt-2`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1, 
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                    className={`h-full ${colors.fill} rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                    <motion.div
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="text-xs text-slate-500 mt-1"
                >
                  {skill.level}%
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
