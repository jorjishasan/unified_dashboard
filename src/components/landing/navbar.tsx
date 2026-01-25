'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, LazyMotion, domAnimation, m } from 'motion/react'
import { ArrowRightIcon } from 'lucide-react'

const containerVariants = {
  closed: {
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  open: {
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
}

const menuItems = [
  { name: 'Labs', color: 'bg-gradient-to-br from-yellow-400/40 to-yellow-500/30 border-yellow-300/40 text-yellow-50 hover:border-yellow-400/60', textColor: 'yellow', rotation: 3 },
  { name: 'Portfolio', color: 'bg-gradient-to-br from-cyan-400/40 to-cyan-500/30 border-cyan-300/40 text-cyan-50 hover:border-cyan-400/60', textColor: 'cyan', rotation: -4 },
  { name: 'Discord', color: 'bg-gradient-to-br from-fuchsia-400/40 to-fuchsia-500/30 border-fuchsia-300/40 text-fuchsia-50 hover:border-fuchsia-400/60', textColor: 'fuchsia', rotation: 2.5 }
]

const menuItemVariants = {
  closed: {
    opacity: 0,
    y: 10,
    rotate: 0,
    transition: {
      duration: 0.2
    }
  },
  open: (item: { rotation: number, index: number }) => ({
    opacity: 1,
    y: 0,
    rotate: item.rotation,
    transition: {
      duration: 0.3,
      delay: item.index * 0.05
    }
  })
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <LazyMotion features={domAnimation}>
      <nav className="absolute top-6 sm:top-8 md:top-10 lg:top-12 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-[95%] sm:max-w-md md:max-w-lg">
        <m.div
          variants={containerVariants}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden mx-auto"
          style={{ width: '100%', maxWidth: '320px' }}
        >
          <div className="px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-white italic text-lg sm:text-xl font-bold tracking-wide hover:opacity-80 transition-opacity duration-300 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                IceBars
              </Link>
            </div>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 w-8 h-8 flex items-center justify-center focus:outline-none relative cursor-pointer"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col items-center justify-center">
                  <m.div
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -3 }}
                    className="w-6 h-[1.5px] rounded-full bg-white absolute"
                  />
                  <m.div
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 3 }}
                    className="w-6 h-[1.5px] rounded-full bg-white absolute"
                  />
                </div>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <m.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-5 py-3 sm:py-4 flex flex-wrap gap-2 pb-6">
                  {menuItems.map((item, index) => (
                    <m.div
                      key={item.name}
                      custom={{ rotation: item.rotation, index }}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={`#${item.name.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`inline-flex items-center gap-1 ${item.color} backdrop-blur-md border text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-3.5 sm:px-5 rounded-full transition-all duration-300 group hover:scale-105 hover:shadow-lg active:scale-95`}
                      >
                        <span 
                          style={{
                            color: item.textColor === 'yellow' ? '#fef3c7' : item.textColor === 'cyan' ? '#cffafe' : '#fce7f3'
                          }}
                          className="drop-shadow-sm"
                        >
                          {item.name}
                        </span>
                        <div className="relative overflow-hidden w-3.5 h-3.5">
                          <ArrowRightIcon className="w-3.5 h-3.5 rotate-[-45deg] text-black/80 group-hover:translate-x-5 group-hover:-translate-y-5 transition-all duration-300" />
                          <ArrowRightIcon className="w-3.5 h-3.5 rotate-[-45deg] text-black absolute inset-0 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                        </div>
                      </Link>
                    </m.div>
                  ))}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </nav>
    </LazyMotion>
  )
}
