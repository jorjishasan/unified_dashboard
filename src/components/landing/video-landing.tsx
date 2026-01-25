import { ShowcaseSection } from './showcase'
import { Navbar } from './navbar'
import { HeroContent } from './hero-content'

export const VideoLanding = () => {
  return (
    <div className="relative w-full bg-black min-h-screen">
      {/* Fixed Video Background - Optimized for SEO/Performance */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/videos/video-poster.webp" // Added poster for better LCP/SEO
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/Live_Video_Generation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content Wrapper - SSR Friendly */}
      <div className="relative z-10 w-full">
        <div className="relative min-h-screen w-full flex flex-col">
          <Navbar />
          <HeroContent />
        </div>
      </div>

      <ShowcaseSection />
    </div>
  )
}
