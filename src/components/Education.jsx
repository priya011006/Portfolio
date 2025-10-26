import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const getColorClasses = (color) => {
    const colorMap = {
      indigo: 'bg-indigo-500',
      pink: 'bg-pink-500',
      emerald: 'bg-emerald-500'
    }
    return colorMap[color] || 'bg-indigo-500'
  }

  return (
    <motion.section
      ref={ref}
      id="education"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Education</h2>
          <p className="mt-3 text-slate-700">A snapshot of my academic journey.</p>
        </motion.div>
        
        <motion.ol
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 relative border-l-4 border-slate-300"
        >
          {data.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              className="mb-10 ml-6"
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                className={`absolute -left-3 h-6 w-6 rounded-full ${getColorClasses(item.color)} ring-4 ring-white`}
              />
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
                className="p-5 bg-white rounded-xl shadow border-2 border-slate-200"
              >
                <h3 className="font-bold text-slate-900">{item.degree}</h3>
                <p className="text-sm text-slate-600 mt-1">
                  {item.institution} • {item.details}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </motion.section>
  )
}

export default Education

