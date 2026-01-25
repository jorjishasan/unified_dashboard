'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export const VideoLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Navbar container expansion animation
  const containerVariants = {
    closed: {
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  // Menu items pop-in animation from bottom with chips/tags - Enhanced fun bright colors
  const menuItems = [
    { name: 'Labs', color: 'bg-gradient-to-br from-yellow-400/30 to-yellow-500/20 border-yellow-300/50 text-yellow-50 hover:border-yellow-400/70 hover:scale-105', textColor: 'yellow', rotation: 3 },
    { name: 'Portfolio', color: 'bg-gradient-to-br from-cyan-400/30 to-cyan-500/20 border-cyan-300/50 text-cyan-50 hover:border-cyan-400/70 hover:scale-105', textColor: 'cyan', rotation: -4 },
    { name: 'Discord', color: 'bg-gradient-to-br from-fuchsia-400/30 to-fuchsia-500/20 border-fuchsia-300/50 text-fuchsia-50 hover:border-fuchsia-400/70 hover:scale-105', textColor: 'fuchsia', rotation: 2.5 }
  ]
  
  const menuItemVariants = (index: number, rotation: number) => ({
    closed: {
      opacity: 0,
      y: 40,
      scale: 0.8,
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: rotation,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 28,
        mass: 0.7,
        delay: index * 0.1 // Staggered pop-in
      }
    }
  })


  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Background video"
      >
        <source src="/videos/Live_Video_Generation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Navigation Bar - Fixed Width with Breathable Space */}
        <nav className="absolute top-6 sm:top-8 md:top-10 lg:top-12 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-[95%] sm:max-w-md md:max-w-lg">
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate={isMenuOpen ? 'open' : 'closed'}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden mx-auto"
            style={{ width: '100%', maxWidth: '320px' }}
          >
            <div className="px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
              {/* Left: wowbars */}
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className="text-white italic text-lg sm:text-xl md:text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity duration-300 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-instrument-serif)' }}
                >
                  IceBars
                </Link>
              </div>

              {/* Right: Hamburger Menu - Completely Redesigned */}
              <div className="relative" ref={menuRef}>
                <button
                  ref={hamburgerRef}
                  onClick={toggleMenu}
                  className="z-50 w-8 h-8 flex items-center justify-center focus:outline-none relative cursor-pointer"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  <div className="w-6 h-6 flex flex-col items-center justify-center">
                    {/* First line */}
                    <motion.div
                      animate={{
                        rotate: isMenuOpen ? 45 : 0,
                        y: isMenuOpen ? 0 : -3,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-[2px] rounded-full bg-white absolute"
                    />

                    {/* Second line */}
                    <motion.div
                      animate={{
                        rotate: isMenuOpen ? -45 : 0,
                        y: isMenuOpen ? 0 : 3,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-[2px] rounded-full bg-white absolute"
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Expanding Menu Container - Items Fall From Top */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                  }}
                  transition={{
                    height: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    opacity: {
                      duration: 0.3,
                      delay: 0.1
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 py-3 sm:py-4 flex flex-wrap gap-2 sm:gap-2.5">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={menuItemVariants(index, item.rotation)}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={`#${item.name.toLowerCase()}`}
                          onClick={() => setIsMenuOpen(false)}
                          className={`inline-flex items-center gap-1.5 sm:gap-2 ${item.color} backdrop-blur-sm border text-xs sm:text-sm md:text-base font-sans py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-all duration-200 group relative overflow-hidden`}
                        >
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ 
                              delay: index * 0.1 + 0.2,
                              type: 'spring',
                              stiffness: 300,
                              damping: 20
                            }}
                            className="relative"
                          >
                            {/* Main Arrow */}
                            <ArrowRightIcon 
                              className="w-3 sm:w-3.5 h-3 sm:h-3.5 rotate-[30deg] text-gray-800/80" 
                            />
                            {/* Duplicate Arrow that slides in on hover */}
                            <motion.div
                              initial={{ x: -20, opacity: 0 }}
                              whileHover={{ 
                                x: 0, 
                                opacity: 1,
                                transition: { 
                                  type: 'spring',
                                  stiffness: 400,
                                  damping: 20
                                }
                              }}
                              className="absolute inset-0"
                            >
                              <ArrowRightIcon 
                                className="w-3 sm:w-3.5 h-3 sm:h-3.5 rotate-[30deg] text-gray-800/80" 
                              />
                            </motion.div>
                          </motion.div>
                          <span 
                            className="relative z-10 chip-text"
                            style={{
                              color: item.textColor === 'yellow' 
                                ? '#fef3c7'
                                : item.textColor === 'cyan'
                                ? '#cffafe'
                                : '#fce7f3'
                            }}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>

        {/* Main Content - Centered */}
        <div className="flex-1 -mt-8 lg:-mt-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-0">
          {/* Main Heading with Instrument Serif - ONLY ANIMATED ELEMENT */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-4 sm:mb-6 px-2"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1
            }}
          >
            Where lasting<br />change begins.
          </motion.h1>

          {/* Subheading - NO ANIMATION */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-sans mb-6 sm:mb-8 max-w-2xl px-4">
            Wellness coaching for stress and burnout recovery.
          </p>

          {/* Call to Action Button - Editorial Reveal Style */}
          <button className="group relative bg-white text-black px-8 py-3.5 sm:py-4 rounded-full flex items-center gap-2 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.6)]">
            <span 
              className="relative z-10 text-lg sm:text-xl font-medium tracking-wide transition-all duration-500 group-hover:-translate-x-1" 
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Begin your journey
            </span>
            
            {/* Arrow Reveal Animation */}
            <div className="relative w-0 overflow-hidden group-hover:w-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <ArrowRightIcon className="w-5 h-5 text-black min-w-[20px]" />
            </div>
          </button>
        </div>

        {/* Bottom: Zeer.Studio Link - NO ANIMATION */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 px-4">
          <Link
            href="https://zeer.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-xs sm:text-sm md:text-base transition-colors duration-300 group italic"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            <span className="group-hover:underline">Zeer.Studio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}