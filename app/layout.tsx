import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'webExpo - Professional Website Development & Optimization',
  description: 'Expert website development, redesign, speed optimization, and bug fixes. Mobile-first solutions for businesses worldwide. Get your free website audit today.',
  keywords: 'website development, website redesign, speed optimization, mobile responsive, bug fixes, webExpo',
  openGraph: {
    title: 'webExpo - Professional Website Development & Optimization',
    description: 'Expert website development, redesign, speed optimization, and bug fixes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var accent = localStorage.getItem('accentColor') || 'violet';
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                  document.documentElement.classList.add('accent-' + accent);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
