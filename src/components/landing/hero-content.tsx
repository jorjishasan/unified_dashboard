'use client'

import Link from 'next/link'
import { motion, LazyMotion, domAnimation, m } from 'motion/react'

export const HeroContent = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex-1 -mt-8 lg:-mt-6 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-0">
        <m.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-4 sm:mb-6 px-2"
          style={{ fontFamily: 'var(--font-instrument-serif)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ship beautiful <br /> dashboards.
        </m.h1>

        <p className="text-lg text-white/90 font-geist mb-6 sm:mb-8 max-w-2xl px-4">
          Premium shadcn/ui templates, save weeks of time.
        </p>

        <Link 
          href="/dashboards/productsales"
          className="group relative bg-white text-black px-8 py-3.5 sm:py-4 rounded-full flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]"
        >
          <span 
            className="relative z-10 text-lg sm:text-xl font-medium tracking-wide" 
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            Explore Templates
          </span>
          
          <div className="relative w-0 overflow-hidden group-hover:w-6 transition-all duration-300 ease-out">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black min-w-[20px]"
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        </Link>
      </div>
    </LazyMotion>
  )
}
