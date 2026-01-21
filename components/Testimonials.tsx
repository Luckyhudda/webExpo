'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'E-commerce Business Owner',
    location: 'Mumbai, India',
    content: 'Our website speed improved dramatically after optimization. Load time went from 8 seconds to under 2 seconds. Highly recommended!',
    rating: 5,
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    location: 'London, UK',
    content: 'The mobile responsiveness work was excellent. Our bounce rate dropped by 40% and conversions increased significantly.',
    rating: 5,
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Amit Patel',
    role: 'Startup Founder',
    location: 'Bangalore, India',
    content: 'Fast delivery, clean code, and great communication. They fixed all our bugs and optimized the site perfectly.',
    rating: 5,
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Emily Chen',
    role: 'Business Owner',
    location: 'Singapore',
    content: 'The WhatsApp integration has been a game-changer for customer engagement. Response time improved and we get more leads now.',
    rating: 5,
    gradient: 'from-orange-400 to-red-500',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="section-title">What Clients <span className="gradient-text">Say</span></h2>
          <p className="section-subtitle">
            Real feedback from businesses we've helped grow online
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative glass-card rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`} />
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent-200 dark:text-accent-800 mb-4" />

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
