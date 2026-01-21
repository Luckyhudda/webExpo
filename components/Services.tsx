'use client'

import { 
  Globe, 
  RefreshCw, 
  Gauge, 
  Bug, 
  Smartphone, 
  MessageSquare,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Globe,
    title: 'New Website Development',
    problem: 'No online presence or outdated website',
    solution: 'Custom-built, modern websites tailored to your business needs',
    result: 'Professional website that converts visitors into customers',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    problem: 'Old design hurting your brand image',
    solution: 'Complete visual overhaul with modern UI/UX principles',
    result: 'Fresh, professional look that builds trust and engagement',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Gauge,
    title: 'Website Speed Optimization',
    problem: 'Slow loading times losing customers',
    solution: 'Performance optimization for 90+ Lighthouse scores',
    result: 'Lightning-fast website that keeps visitors engaged',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    icon: Bug,
    title: 'Bug & Functional Fixes',
    problem: 'Broken features affecting user experience',
    solution: 'Quick diagnosis and permanent fixes for all issues',
    result: 'Smooth, error-free website functionality',
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-500/10 to-orange-500/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Large Screen Responsiveness',
    problem: 'Poor experience on mobile or large displays',
    solution: 'Perfect display across all devices from phones to TVs',
    result: 'Seamless experience on any screen size',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-500/10 to-yellow-500/10',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp / Instagram / Telegram Setup',
    problem: 'Missing direct communication channels',
    solution: 'Complete business messaging integration and setup',
    result: 'Direct customer engagement and lead generation',
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl" />
      
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
            Our Services
          </motion.span>
          <h2 className="section-title">What We <span className="gradient-text">Offer</span></h2>
          <p className="section-subtitle">
            Comprehensive solutions to transform your online presence and drive business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-2">{service.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-accent-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                  </div>

                  {/* Problem */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{service.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{service.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="flex items-start space-x-2 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-900 dark:text-white font-medium text-sm">{service.result}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
