'use client'

import { LazyMotion, domAnimation, m } from 'motion/react'

export const HeroContent = () => {
  const scrollToDashboards = () => {
    const el = document.getElementById('dashboards')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

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

        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <button
            type="button"
            onClick={scrollToDashboards}
            className="group relative bg-white text-black px-10 py-4 rounded-full text-black/90 overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] active:scale-[0.98] flex flex-col items-center justify-center"
          >
            <div className="relative h-7 overflow-hidden pointer-events-none">
              <span
                className="block text-lg mx-[0.5em] text-neutral-600 sm:text-xl font-medium italic transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Browse Templates
              </span>
              <span
                className="absolute inset-0 block text-lg sm:text-xl font-medium transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-full group-hover:translate-y-0 italic text-neutral-600"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Free Preview
              </span>
            </div>

            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-black/5 to-transparent -z-10" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 blur-xl -z-20" />
          </button>
        </m.div>
      </div>
    </LazyMotion>
  )
}
