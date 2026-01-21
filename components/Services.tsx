'use client'

import { useState, useEffect } from 'react'
import { 
  Globe, 
  RefreshCw, 
  Gauge, 
  Bug, 
  Smartphone, 
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  X,
  Code,
  Palette,
  Zap,
  Shield,
  Search,
  ShoppingCart,
  Database,
  Settings,
  Layout,
  Monitor,
  Tablet,
  Phone,
  Share2,
  Users,
  BarChart3,
  FileText,
  Image,
  Video,
  Type,
  Menu
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    icon: Globe,
    title: 'New Website Development',
    problem: 'No online presence or outdated website',
    solution: 'Custom-built, modern websites tailored to your business needs',
    result: 'Professional website that converts visitors into customers',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    features: [
      { icon: Code, text: 'Custom HTML5, CSS3, and JavaScript development' },
      { icon: Layout, text: 'Modern, responsive design (mobile-first approach)' },
      { icon: Database, text: 'Database integration & backend development' },
      { icon: ShoppingCart, text: 'E-commerce functionality with payment gateway' },
      { icon: Search, text: 'SEO-optimized code structure & meta tags' },
      { icon: BarChart3, text: 'Analytics & tracking integration (Google Analytics)' },
      { icon: Shield, text: 'SSL certificate & security implementation' },
      { icon: Settings, text: 'CMS integration (WordPress, custom admin panel)' },
      { icon: FileText, text: 'Content management & dynamic pages' },
      { icon: Image, text: 'Image optimization & lazy loading' },
      { icon: Users, text: 'User authentication & registration system' },
      { icon: Share2, text: 'Social media integration & sharing features' },
    ]
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    problem: 'Old design hurting your brand image',
    solution: 'Complete visual overhaul with modern UI/UX principles',
    result: 'Fresh, professional look that builds trust and engagement',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    features: [
      { icon: Palette, text: 'Complete visual redesign with modern aesthetics' },
      { icon: Layout, text: 'Improved UI/UX with user-centered design' },
      { icon: Monitor, text: 'Enhanced navigation & information architecture' },
      { icon: Smartphone, text: 'Mobile-first responsive redesign' },
      { icon: Image, text: 'Brand consistency & color scheme update' },
      { icon: Type, text: 'Modern typography & readable fonts' },
      { icon: Zap, text: 'Interactive elements & micro-animations' },
      { icon: Users, text: 'Improved user journey & conversion paths' },
      { icon: BarChart3, text: 'A/B testing & performance analytics' },
      { icon: Share2, text: 'Social proof & testimonials integration' },
      { icon: Video, text: 'Video backgrounds & multimedia elements' },
      { icon: Settings, text: 'Enhanced functionality & feature additions' },
    ]
  },
  {
    icon: Gauge,
    title: 'Website Speed Optimization',
    problem: 'Slow loading times losing customers',
    solution: 'Performance optimization for 90+ Lighthouse scores',
    result: 'Lightning-fast website that keeps visitors engaged',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    features: [
      { icon: Zap, text: 'Page load time reduced to under 2 seconds' },
      { icon: Image, text: 'Image compression & WebP format conversion' },
      { icon: Code, text: 'Code minification (CSS, JavaScript, HTML)' },
      { icon: Database, text: 'Database query optimization' },
      { icon: Settings, text: 'Caching implementation (browser & server-side)' },
      { icon: Shield, text: 'CDN setup for global content delivery' },
      { icon: FileText, text: 'Lazy loading for images & videos' },
      { icon: Code, text: 'Critical CSS extraction & inline optimization' },
      { icon: Database, text: 'Database indexing & query optimization' },
      { icon: Settings, text: 'Gzip/Brotli compression enabled' },
      { icon: Monitor, text: 'Eliminate render-blocking resources' },
      { icon: BarChart3, text: 'Achieve 90+ Lighthouse performance score' },
    ]
  },
  {
    icon: Bug,
    title: 'Bug & Functional Fixes',
    problem: 'Broken features affecting user experience',
    solution: 'Quick diagnosis and permanent fixes for all issues',
    result: 'Smooth, error-free website functionality',
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-500/10 to-orange-500/10',
    features: [
      { icon: Shield, text: 'Security vulnerabilities & patches' },
      { icon: Code, text: 'JavaScript errors & console debugging' },
      { icon: Layout, text: 'CSS layout issues & cross-browser compatibility' },
      { icon: Database, text: 'Database connection & query errors' },
      { icon: Settings, text: 'Form submission & validation fixes' },
      { icon: ShoppingCart, text: 'Payment gateway & checkout issues' },
      { icon: Users, text: 'Login/authentication problems' },
      { icon: Image, text: 'Media loading & display issues' },
      { icon: Search, text: 'Search functionality & filters' },
      { icon: Share2, text: 'Social sharing & API integrations' },
      { icon: FileText, text: 'Content management & CRUD operations' },
      { icon: Monitor, text: 'Cross-device & browser testing & fixes' },
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile & Large Screen Responsiveness',
    problem: 'Poor experience on mobile or large displays',
    solution: 'Perfect display across all devices from phones to TVs',
    result: 'Seamless experience on any screen size',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-500/10 to-yellow-500/10',
    features: [
      { icon: Phone, text: 'Mobile-first responsive design (320px - 768px)' },
      { icon: Tablet, text: 'Tablet optimization (768px - 1024px)' },
      { icon: Monitor, text: 'Desktop & large screen support (1024px+)' },
      { icon: Layout, text: 'Flexible grid system & breakpoints' },
      { icon: Image, text: 'Responsive images & media queries' },
      { icon: Settings, text: 'Touch-friendly buttons & navigation' },
      { icon: Menu, text: 'Mobile menu & hamburger navigation' },
      { icon: Type, text: 'Readable font sizes across devices' },
      { icon: Layout, text: 'Flexible layouts & adaptive components' },
      { icon: Zap, text: 'Performance optimization for mobile networks' },
      { icon: Settings, text: 'Viewport meta tags & device orientation' },
      { icon: Monitor, text: '4K & ultra-wide display support' },
    ]
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp / Instagram / Telegram Setup',
    problem: 'Missing direct communication channels',
    solution: 'Complete business messaging integration and setup',
    result: 'Direct customer engagement and lead generation',
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
    features: [
      { icon: MessageSquare, text: 'WhatsApp Business API integration' },
      { icon: Share2, text: 'Click-to-chat WhatsApp button' },
      { icon: Users, text: 'Automated welcome messages & quick replies' },
      { icon: Share2, text: 'Instagram direct messaging integration' },
      { icon: MessageSquare, text: 'Telegram bot setup & configuration' },
      { icon: Settings, text: 'Multi-channel messaging dashboard' },
      { icon: BarChart3, text: 'Message analytics & tracking' },
      { icon: Users, text: 'Customer support ticket integration' },
      { icon: FileText, text: 'Pre-written message templates' },
      { icon: Share2, text: 'Social media sharing buttons' },
      { icon: Settings, text: 'Automated responses & chatbots' },
      { icon: BarChart3, text: 'Lead capture & CRM integration' },
    ]
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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

  return (
    <>
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
                  onClick={() => setSelectedService(service)}
                  className="group relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
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

                    {/* Click to view details hint */}
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                      <p className="text-xs text-accent-600 dark:text-accent-400 font-medium flex items-center gap-1">
                        <span>Click to view detailed features</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Features Side Drawer */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-lg lg:max-w-2xl bg-white dark:bg-slate-800 shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header with Gradient Background */}
              <div className={`relative bg-gradient-to-br ${selectedService.gradient} p-6 lg:p-8 text-white`}>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 z-10"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                  {(() => {
                    const Icon = selectedService.icon
                    return <Icon className="w-8 h-8 text-white" />
                  })()}
                </div>

                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold mb-2 pr-12">
                  {selectedService.title}
                </h2>
                <p className="text-white/90 text-sm lg:text-base">
                  {selectedService.solution}
                </p>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Detailed Features
                  </h3>
                  {selectedService.features.map((feature, index) => {
                    const FeatureIcon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 group border border-gray-100 dark:border-slate-700"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                          <FeatureIcon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium pt-1.5 text-sm lg:text-base">
                          {feature.text}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Result Section */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex items-start gap-3 p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-900 dark:text-green-300 mb-1 text-base">Expected Result</p>
                      <p className="text-green-800 dark:text-green-200 text-sm lg:text-base">{selectedService.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Border Decoration */}
              <div className={`h-1 bg-gradient-to-r ${selectedService.gradient}`} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
