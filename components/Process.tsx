'use client'

import { Search, Wrench, Rocket, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Search,
    title: 'Audit',
    description: 'We analyze your website to identify issues, opportunities, and areas for improvement.',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Fix & Optimize',
    description: 'We implement fixes, optimize performance, and enhance functionality based on your needs.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Deliver',
    description: 'We deliver a fast, responsive, and fully functional website that meets your goals.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: CheckCircle,
    title: 'Support',
    description: 'Ongoing support and maintenance to ensure your website continues to perform at its best.',
    gradient: 'from-orange-400 to-red-500',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
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
            Our Process
          </motion.span>
          <h2 className="section-title">How We <span className="gradient-text">Work</span></h2>
          <p className="section-subtitle">
            A simple, transparent process that gets results
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-accent-300 dark:bg-accent-700" />
            
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="glass-card rounded-2xl p-6 lg:p-8 text-center h-full"
                  >
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                      className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 text-white font-bold text-lg mb-6 shadow-lg glow-sm"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
