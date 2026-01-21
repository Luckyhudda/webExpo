'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'
type AccentColor = 'violet' | 'emerald' | 'cyan' | 'orange' | 'rose'

interface ThemeContextType {
  theme: Theme
  accentColor: AccentColor
  toggleTheme: () => void
  setAccentColor: (color: AccentColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const accentColors: Record<AccentColor, { name: string; hex: string; emoji: string }> = {
  violet: { name: 'Violet', hex: '#8b5cf6', emoji: '🟣' },
  emerald: { name: 'Emerald', hex: '#10b981', emoji: '🟢' },
  cyan: { name: 'Cyan', hex: '#06b6d4', emoji: '🔵' },
  orange: { name: 'Orange', hex: '#f97316', emoji: '🟠' },
  rose: { name: 'Rose', hex: '#f43f5e', emoji: '🔴' },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [accentColor, setAccentColorState] = useState<AccentColor>('violet')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const savedAccent = localStorage.getItem('accentColor') as AccentColor | null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (systemPrefersDark) {
      setTheme('dark')
    }

    if (savedAccent && accentColors[savedAccent]) {
      setAccentColorState(savedAccent)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  useEffect(() => {
    if (mounted) {
      // Remove all accent classes
      document.documentElement.classList.remove('accent-violet', 'accent-emerald', 'accent-cyan', 'accent-orange', 'accent-rose')
      document.documentElement.classList.add(`accent-${accentColor}`)
      localStorage.setItem('accentColor', accentColor)
    }
  }, [accentColor, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color)
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, accentColor, toggleTheme, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
