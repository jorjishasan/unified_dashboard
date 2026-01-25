import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Template {
  title: string
  description: string
  image: string
  features: string[]
  status: "Available" | "Coming Soon"
  link: string
}

const templates: Template[] = [
  {
    title: "Strategic Dashboards",
    description: "Strategic dashboards designed to help you make data-driven decisions.",
    image: "https://cdn.shadcnstudio.com/ss-assets/landing-page/dashboard-1-light.png",
    features: [
      "Creative motion to enhance user interaction and engagement.",
      "Fully customizable with multiple theme support."
    ],
    status: "Coming Soon",
    link: "/dashboards/productsales"
  },
  {
    title: "Dashboard & Application",
    description: "Customizable dashboards and app templates for eCommerce, CRM, SAAS, logistics, and more.",
    image: "https://cdn.shadcnstudio.com/ss-assets/landing-page/dashboard-2-light.png",
    features: [
      "Simple integration with your business logic or API.",
      "Charts, widgets, and stats to visualize key insights."
    ],
    status: "Coming Soon",
    link: "#"
  },
  {
    title: "Sales & Marketing Dashboards",
    description: "Sales and marketing dashboards designed to help you track your sales and marketing performance.",
    image: "https://cdn.shadcnstudio.com/ss-assets/landing-page/dashboard-3-light.png",
    features: [
      "Multi-page, fully functional templates with real-use UX.",
      "Easily integrates with your business logic or API."
    ],
    status: "Coming Soon",
    link: "#"
  }
]

export function ShowcaseSection() {
  return (
    <section className="pb-32 bg-white w-full relative z-20">
      {/* Container for content and dashed lines */}
      <div className="max-w-[1100px] mx-auto w-full relative pt-10 lg:pt-12 xl:pt-20">
        
        {/* Vertical Dashed Lines - Positioned at absolute edges of the 1400px boundary */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] border-l border-dashed border-slate-200 z-0" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] border-r border-dashed border-slate-200 z-0" aria-hidden="true" />

        <div className="relative z-10">
          <div className="text-center mb-24 space-y-6 px-4 sm:px-6 lg:px-8">
            <Badge variant="outline" className="rounded-full px-4 py-1.5 text-sm font-medium border-slate-200 text-slate-600 bg-slate-50/50 backdrop-blur-sm">
              Ready-to-Use Templates
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-instrument-serif)' }}>
              Explore 10+ Premium <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10">Shadcn Dashboard Templates</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-100/50 -z-0 -rotate-1" />
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              From strategic dashboards to sales and marketing dashboards, everything you need to create modern, responsive, and visually stunning dashboards - ready to go in no time!
            </p>
          </div>

          <div className="space-y-24">
            {templates.map((template, index) => (
              <div key={index}>
                {index > 0 && (
                  <div className="w-full flex justify-center py-20 relative px-0">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      {/* Horizontal divider reaching absolute edges */}
                      <div className="w-full border-t border-dashed border-slate-200" />
                    </div>
                    <div className="relative flex justify-center z-10">
                      <div className="bg-white p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-200">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Badge variant="secondary" className="rounded-full px-4 py-1 text-xs font-medium bg-slate-100 text-slate-600 border-slate-200">
                        {template.status}
                      </Badge>
                      
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-instrument-serif)' }}>
                        {template.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed font-light">
                        {template.description}
                      </p>
                    </div>

                    <ul className="space-y-4">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                      <Button variant="outline" className="group rounded-full px-8 h-14 border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-base shadow-sm hover:shadow-md transition-all">
                        Explore more
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>

                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''} group`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white aspect-[16/10] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
                      <div className="absolute inset-0 bg-slate-50/50" />
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center pb-20 px-4">
          <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-2xl shadow-slate-900/20 transition-all hover:scale-105 hover:-translate-y-1">
            Explore all templates
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
