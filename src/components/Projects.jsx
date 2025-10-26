import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-16 sm:py-20 lg:py-24"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h2>
          <p className="mt-3 text-slate-700">Things I've built that I'm proud of.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 50,
                scale: inView ? 1 : 0.9,
                rotateX: inView ? 0 : -15
              }}
              transition={{ 
                delay: 0.6 + index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 8,
                rotateX: -5,
                z: 50,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)"
              }}
              className={`group bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden transform transition-all duration-500 hover:shadow-2xl`}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div 
                className="p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  whileHover={{ 
                    color: "#4f46e5",
                    scale: 1.05,
                    rotateX: 5
                  }}
                  className="text-lg font-bold text-slate-900"
                >
                  {project.name}
                </motion.h3>
                <motion.p 
                  className="mt-2 text-sm text-slate-800 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    x: 8,
                    rotateZ: 2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center text-indigo-700 hover:text-indigo-800 font-medium transition-colors"
                >
                  GitHub
                  <motion.svg
                    animate={{ x: [0, 5, 0], rotateZ: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
