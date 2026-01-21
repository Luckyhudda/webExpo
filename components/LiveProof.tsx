'use client'

import { Gauge, Smartphone, TrendingUp } from 'lucide-react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    })
    return controls.stop
  }, [value, count])

  return <span>{displayValue}{suffix}</span>
}

const proofPoints = [
  {
    icon: Gauge,
    metric: 90,
    suffix: '+',
    label: 'Lighthouse Score',
    description: 'Average performance score across all optimized websites',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    metric: 24,
    suffix: '/7',
    label: 'WhatsApp Support',
    description: 'Direct communication channel for instant responses',
    gradient: 'from-green-400 to-teal-500',
  },
  {
    icon: Smartphone,
    metric: 100,
    suffix: '%',
    label: 'Mobile Responsive',
    description: 'Perfect display on all devices from phones to large screens',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: TrendingUp,
    metric: 3,
    suffix: 'x',
    label: 'Faster Load Times',
    description: 'Average speed improvement after optimization',
    gradient: 'from-orange-400 to-red-500',
  },
]

export default function LiveProof() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-accent-500/5 dark:bg-accent-500/5" />
      
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
            Live Proof
          </motion.span>
          <h2 className="section-title">Real <span className="gradient-text">Results</span></h2>
          <p className="section-subtitle">
            Real results from real projects - see what we can do for your website
          </p>
        </motion.div>

        {/* Proof Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofPoints.map((proof, index) => {
            const Icon = proof.icon
            return (
              <motion.div
                key={proof.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative glass-card rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proof.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${proof.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  
                  {/* Metric */}
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${proof.gradient} bg-clip-text text-transparent`}>
                    <AnimatedNumber value={proof.metric} suffix={proof.suffix} />
                  </div>
                  
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{proof.label}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{proof.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 animated-gradient" />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 p-8 lg:p-12 text-white text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold mb-4"
            >
              See Your Website Performance Improve
            </motion.h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get a free website audit and discover how we can optimize your site for speed,
              mobile responsiveness, and better conversions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-accent-600 bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-xl"
            >
              Get Free Website Audit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
