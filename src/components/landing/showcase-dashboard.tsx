'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  DeviceControls,
  DeviceFrameContent,
  type DeviceType,
} from '@/components/ui/device-frame'
import { cn } from '@/lib/utils'
import {
  Truck,
  BarChart3,
  ShoppingCart,
  ExternalLink,
  LockKeyhole,
  MoveRight,
  ChevronRight,
  Figma,
  LayoutPanelTop,
  PenTool,
} from 'lucide-react'

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z"
        fill="#0ACF83"
      />
      <path
        d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z"
        fill="#A259FF"
      />
      <path
        d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z"
        fill="#F24E1E"
      />
      <path
        d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z"
        fill="#FF7262"
      />
      <path
        d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z"
        fill="#1ABCFE"
      />
    </svg>
  )
}

export interface DashboardTemplate {
  id: string
  name: string
  description: string
  slug: string
  category: string
  href: string
  status: 'available'
  icon: React.ReactNode
  avatarIcon: React.ReactNode
  avatarClassName: string
  embedUrl: string
}

const dashboardTemplates: DashboardTemplate[] = [
  {
    id: 'social-analytics',
    name: 'Social Analytics',
    description: 'Track engagement, followers, and content performance across all your social platforms. Gain actionable insights to optimize your social media strategy.',
    slug: 'dashboard-social-analytics',
    category: 'analytics',
    href: '/dashboards/socialanalytics',
    embedUrl: '/dashboards/socialanalytics',
    status: 'available',
    icon: <BarChart3 className="size-4" />,
    avatarIcon: <Figma aria-hidden />,
    avatarClassName: 'bg-green-600/10 text-green-600',
  },
  {
    id: 'product-sales',
    name: 'Product Sales',
    description: 'Monitor revenue, orders, and product performance in real-time. Make data-driven decisions to boost your e-commerce growth.',
    slug: 'dashboard-product-sales',
    category: 'ecommerce',
    href: '/dashboards/productsales',
    embedUrl: '/dashboards/productsales',
    status: 'available',
    icon: <ShoppingCart className="size-4" />,
    avatarIcon: <LayoutPanelTop aria-hidden />,
    avatarClassName: 'bg-destructive/10 text-destructive',
  },
  {
    id: 'logistics',
    name: 'Logistics & Fleet',
    description: 'Manage fleet operations, track shipments, and optimize delivery routes. Keep your logistics running smoothly with comprehensive visibility.',
    slug: 'dashboard-logistics',
    category: 'operations',
    href: '/dashboards/logistics',
    embedUrl: '/dashboards/logistics',
    status: 'available',
    icon: <Truck className="size-4" />,
    avatarIcon: <PenTool aria-hidden />,
    avatarClassName: 'bg-sky-600/10 text-sky-600',
  },
]

interface DashboardPreviewCardProps {
  template: DashboardTemplate
}

function DashboardPreviewCard({ template }: DashboardPreviewCardProps) {
  const [device, setDevice] = useState<DeviceType>('desktop')

  return (
    <div className="flex flex-col gap-4">
      {/* Header: icon + title + description */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <span className="relative flex shrink-0 overflow-hidden size-9 rounded-lg">
            <span className={cn('flex size-full items-center justify-center rounded-lg [&>svg]:size-5', template.avatarClassName)}>
              {template.avatarIcon}
            </span>
          </span>
          <h3 className="text-base font-instrument-serif sm:text-lg font-semibold text-zinc-900">
            {template.name}
          </h3>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl sm:pl-12">
          {template.description}
        </p>
      </div>

      <div className="rounded-xl overflow-hidden border border-dashed border-zinc-200/80 bg-zinc-50/30">
        {/* Action bar: grouped left, Figma right */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 border-b border-dashed border-zinc-200/80 bg-white/80">
          <div className="flex items-center gap-3 sm:gap-4">
            <TooltipProvider delayDuration={0}>
              <Link
                href="/#pricing"
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors [&_svg]:size-4 shrink-0"
              >
                <LockKeyhole className="shrink-0" aria-hidden />
                Get Code
                <MoveRight className="shrink-0 max-[380px]:hidden" aria-hidden />
              </Link>
            </TooltipProvider>
            <div className="inline-flex items-center rounded-lg border border-dashed border-zinc-200 bg-zinc-100/80 p-0.5 overflow-hidden divide-x divide-zinc-200">
              <DeviceControls
                device={device}
                onDeviceChange={setDevice}
                className="rounded-l-lg rounded-r-none border-0"
              />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={template.href}
                      className="flex items-center justify-center p-2 rounded-r-[6px] bg-white hover:bg-zinc-50 transition-colors shrink-0 text-zinc-600 hover:text-zinc-900 min-h-[36px] min-w-[36px]"
                      aria-label="Open fullscreen preview"
                    >
                      <ExternalLink className="size-4 shrink-0" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Open fullscreen</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <Link
            href={template.href}
            className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors shrink-0 py-1.5"
          >
            <FigmaIcon className="size-4 shrink-0" />
            <span className="hidden sm:inline">Preview in Figma</span>
            <span className="sm:hidden">Figma</span>
            <ChevronRight className="size-4 shrink-0" />
          </Link>
        </div>

        {/* Dashboard Preview */}
        <div className="relative w-full overflow-hidden rounded-b-xl min-h-[480px] h-[68vh] max-h-[900px]">
          <DeviceFrameContent
            device={device}
            height="100%"
            showBackground={true}
          >
            <iframe
              src={template.embedUrl}
              className="w-full h-full border-0"
              title={`${template.name} Preview`}
              loading="lazy"
            />
          </DeviceFrameContent>
        </div>
      </div>

    </div>
  )
}

export function ShowcaseDashboard() {
  return (
    <section id="dashboards" className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl lg:max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="text-left mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">
            Dashboard Templates
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            Premium collection of unified dashboard templates. Preview and open any template below.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-14">
          {dashboardTemplates.map((template) => (
            <DashboardPreviewCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  )
}
