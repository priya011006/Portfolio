import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = ({ data, personal }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(data.formAction, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      })
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 4000)
      } else {
        alert('Oops! There was a problem sending your message.')
      }
    } catch (error) {
      alert('Error: Could not send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${personal.email}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21.75 7.5l-9.75 6.75L2.25 7.5m19.5 0A2.25 2.25 0 0019.5 6H4.5a2.25 2.25 0 00-2.25 1.5m19.5 0v9.75A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V7.5"/>
        </svg>
      ),
      color: 'bg-fuchsia-200 text-fuchsia-800'
    },
    {
      name: 'LinkedIn',
      href: personal.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.77 2.66 4.77 6.1V24h-4v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-4V8.5z"/>
        </svg>
      ),
      color: 'bg-sky-200 text-sky-800'
    },
    {
      name: 'GitHub',
      href: personal.github,
      icon: (
        <svg viewBox="0 0 16 16" className="w-7 h-7 fill-current">
          <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      ),
      color: 'bg-slate-200 text-slate-800'
    }
  ]

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-indigo-100 via-pink-100 to-rose-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact Me</h2>
          <p className="mt-3 text-slate-700">Feel free to send me a message — I'll get back to you soon!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: inView ? 1 : 0, 
            y: inView ? 0 : 50,
            scale: inView ? 1 : 0.9
          }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 2,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
          }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-300"
          style={{
            transformStyle: "preserve-3d"
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border-2 border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                id="email"
                name="_replyto"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border-2 border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border-2 border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400 text-white font-semibold shadow-md hover:shadow-lg transform transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </motion.button>
            </motion.div>
          </form>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showSuccess ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-6 text-center text-green-600 font-medium transition-opacity duration-500 ${
              showSuccess ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {data.successMessage}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, rotateX: -90 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                scale: inView ? 1 : 0,
                rotateX: inView ? 0 : -90
              }}
              transition={{ 
                delay: 1.2 + index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.2,
                rotateY: 15,
                rotateX: -10,
                rotateZ: 5,
                z: 20,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 flex items-center justify-center rounded-full ${link.color} shadow-md hover:shadow-lg transition-all duration-500`}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                {link.icon}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
