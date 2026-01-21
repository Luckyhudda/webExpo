'use client'

import { useTheme, accentColors } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { Check, Palette } from 'lucide-react'

export default function ColorPicker() {
  const { accentColor, setAccentColor } = useTheme()

  return (
    <div className="bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-5 h-5 text-gray-400" />
        <h4 className="text-sm font-semibold text-gray-300">Theme Color</h4>
      </div>
      <div className="flex flex-wrap gap-3">
        {(Object.keys(accentColors) as Array<keyof typeof accentColors>).map((color) => (
          <motion.button
            key={color}
            onClick={() => setAccentColor(color)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center ${
              accentColor === color 
                ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800' 
                : 'hover:ring-2 hover:ring-white/50'
            }`}
            style={{ backgroundColor: accentColors[color].hex }}
            title={accentColors[color].name}
          >
            {accentColor === color && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Check className="w-6 h-6 text-white drop-shadow-lg" />
              </motion.div>
            )}
            <span className="sr-only">{accentColors[color].name}</span>
          </motion.button>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Current: <span className="text-gray-300 font-medium">{accentColors[accentColor].emoji} {accentColors[accentColor].name}</span>
      </p>
    </div>
  )
}
