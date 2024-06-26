import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/Header'
import ThemesProvider from '@/providers/ThemesProvider'
import '@/styles/globals.scss'
import '@/styles/theme-config.css'

export const metadata = {
  title: {
    default: 'Odalys IA ',
    template: `%s - ChatGPT Lite`
  },
  description: 'AI assistant powered by ChatGPT for Odalys',
  icons: {
    icon: '/favicon-96x96.webp',
    shortcut: '/favicon-96x96.webp',
    apple: '/favicon-96x96.webp'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemesProvider>
          <Header />
          {children}
          <Toaster />
        </ThemesProvider>
        <Analytics />
      </body>
    </html>
  )
}
