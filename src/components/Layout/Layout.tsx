import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Footer from './Footer'
import BackToTop from '@/components/Common/BackToTop'

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#team', label: 'TEAM' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#hackathons', label: 'HACKS' },
  ]
  
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-neo-yellow border-b-4 border-neo-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl font-black text-neo-black bg-neo-white px-3 py-1 border-2 border-neo-black">2BB</div>
              <span className="text-xs text-neo-black font-bold hidden sm:block bg-neo-lime px-2 py-1 border border-neo-black">[WE BE BUILDIN]</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-neo-black hover:bg-neo-lime transition-all duration-150 font-black text-sm border-2 border-transparent hover:border-neo-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neo-black"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-neo-yellow border-t-2 border-neo-black/50 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-neo-black hover:bg-neo-lime font-black border-b-2 border-neo-black/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}