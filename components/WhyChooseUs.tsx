'use client'

import { Zap, Shield, Code, Smartphone, Clock, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with 90+ Lighthouse scores',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Clean code, secure practices, and regular backups',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Maintainable, scalable code that grows with your business',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Designed for mobile users (90% of your traffic)',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
    color: 'from-red-400 to-rose-500',
  },
  {
    icon: Check,
    title: 'Proven Results',
    description: 'Track record of successful projects and happy clients',
    color: 'from-teal-400 to-cyan-500',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl float-delayed" />

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
            Why Choose Us
          </motion.span>
          <h2 className="section-title">Built for <span className="gradient-text">Success</span></h2>
          <p className="section-subtitle">
            We combine technical expertise with business understanding to deliver results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  {feature.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-accent-500" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
