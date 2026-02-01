'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  TrendingUp,
  Truck,
  BarChart3,
  ShoppingCart,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  Lock,
  LockKeyhole,
  LockKeyholeOpen,
  MoveRight,
  ChevronRight,
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
  slug: string
  category: string
  href: string
  status: 'available' | 'coming-soon' | 'in-development'
  icon: React.ReactNode
  embedUrl?: string
  tier: 'basic' | 'pro'
}

const dashboardTemplates: DashboardTemplate[] = [
  {
    id: 'social-analytics',
    name: 'Social Analytics',
    slug: 'dashboard-social-analytics',
    category: 'analytics',
    href: '/dashboards/socialanalytics',
    embedUrl: '/dashboards/socialanalytics',
    status: 'available',
    icon: <BarChart3 className="size-4" />,
    tier: 'basic',
  },
  {
    id: 'product-sales',
    name: 'Product Sales',
    slug: 'dashboard-product-sales',
    category: 'ecommerce',
    href: '/dashboards/productsales',
    embedUrl: '/dashboards/productsales',
    status: 'available',
    icon: <ShoppingCart className="size-4" />,
    tier: 'basic',
  },
  {
    id: 'logistics',
    name: 'Logistics & Fleet',
    slug: 'dashboard-logistics',
    category: 'operations',
    href: '/dashboards/logistics',
    embedUrl: '/dashboards/logistics',
    status: 'available',
    icon: <Truck className="size-4" />,
    tier: 'pro',
  },
  {
    id: 'crm',
    name: 'CRM Dashboard',
    slug: 'dashboard-crm',
    category: 'sales',
    href: '/dashboards/crm',
    status: 'coming-soon',
    icon: <Users className="size-4" />,
    tier: 'pro',
  },
  {
    id: 'marketing',
    name: 'Marketing Analytics',
    slug: 'dashboard-marketing',
    category: 'marketing',
    href: '/dashboards/marketing',
    status: 'coming-soon',
    icon: <TrendingUp className="size-4" />,
    tier: 'pro',
  },
  {
    id: 'project-management',
    name: 'Project Management',
    slug: 'dashboard-project',
    category: 'productivity',
    href: '/dashboards/project',
    status: 'in-development',
    icon: <Calendar className="size-4" />,
    tier: 'pro',
  },
  {
    id: 'finance',
    name: 'Finance Dashboard',
    slug: 'dashboard-finance',
    category: 'finance',
    href: '/dashboards/finance',
    status: 'in-development',
    icon: <FileText className="size-4" />,
    tier: 'pro',
  },
]

interface DashboardPreviewCardProps {
  template: DashboardTemplate
  isLast: boolean
}

function DashboardPreviewCard({ template, isLast }: DashboardPreviewCardProps) {
  const [device, setDevice] = useState<DeviceType>('desktop')

  const isAvailable = template.status === 'available'
  const isComingSoon = template.status === 'coming-soon'
  const isInDevelopment = template.status === 'in-development'

  return (
    <div className="flex flex-col">
      <h3 className={cn('text-base sm:text-lg font-semibold mb-2', !isAvailable && 'text-muted-foreground')}>
        {template.name}
      </h3>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
        <Badge
          variant="outline"
          className={cn(
            'text-xs font-medium',
            template.tier === 'pro'
              ? 'text-orange-600 border-orange-200'
              : 'text-zinc-600 border-zinc-200'
          )}
        >
          {template.tier === 'pro' ? 'Pro' : 'Basic'}
        </Badge>
        {isComingSoon && (
          <Badge variant="outline" className="text-xs text-amber-600 border-amber-200">
            Coming Soon
          </Badge>
        )}
        {isInDevelopment && (
          <Badge variant="outline" className="text-xs text-slate-600 border-slate-200">
            In Development
          </Badge>
        )}
      </div>
      <div className="rounded-md overflow-hidden border border-dashed border-zinc-200">
        {isAvailable && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-6 py-3">
            <div className="flex items-center min-w-0 flex-1 justify-start">
              <TooltipProvider delayDuration={0}>
                <Link
                  href="/#pricing"
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors hidden md:inline-flex [&_svg]:size-4"
                >
                  {template.tier === 'pro' ? (
                    <LockKeyhole className="shrink-0" aria-hidden />
                  ) : (
                    <LockKeyholeOpen className="shrink-0" aria-hidden />
                  )}
                  Get Code
                  <MoveRight className="shrink-0 max-[450px]:hidden" aria-hidden />
                </Link>
              </TooltipProvider>
            </div>

            <div className="flex items-center justify-center shrink-0">
              <div className="inline-flex items-center rounded-xl border border-dashed border-zinc-200 bg-zinc-100 p-0.5 overflow-hidden divide-x divide-zinc-200">
                <DeviceControls
                  device={device}
                  onDeviceChange={setDevice}
                  className="rounded-l-xl rounded-r-none border-0"
                />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={template.href}
                        className="flex items-center justify-center p-2 rounded-r-[10px] bg-white hover:bg-zinc-50 transition-colors shrink-0 text-zinc-600 hover:text-zinc-900 min-h-[36px]"
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

            <div className="flex items-center min-w-0 flex-1 justify-end">
              <Link
                href={template.href}
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors shrink-0"
              >
                <FigmaIcon className="size-4 shrink-0" />
                <span className="hidden sm:inline">Preview in Figma</span>
                <span className="sm:hidden">Figma</span>
                <ChevronRight className="size-4 shrink-0" />
              </Link>
            </div>
          </div>
        )}

        {/* Dashboard Preview */}
        <div
          className={cn(
            'relative w-full overflow-hidden rounded-b-md',
            isAvailable
              ? 'min-h-[480px] h-[68vh] max-h-[900px]'
              : 'min-h-[300px] sm:min-h-[400px]'
          )}
        >
          {isAvailable && template.embedUrl ? (
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
          ) : (
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-4 sm:inset-8 rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden">
                <div className="h-10 sm:h-14 border-b border-zinc-200 flex items-center justify-between px-3 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="size-6 sm:size-8 rounded-lg bg-zinc-200" />
                    <div className="h-3 sm:h-4 w-16 sm:w-24 rounded bg-zinc-200" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 sm:h-8 w-20 sm:w-32 rounded-md bg-zinc-200" />
                    <div className="size-6 sm:size-8 rounded-full bg-zinc-200" />
                  </div>
                </div>
                <div className="flex h-[calc(100%-2.5rem)] sm:h-[calc(100%-3.5rem)]">
                  <div className="hidden sm:block w-40 lg:w-56 border-r border-zinc-200 p-3 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-8 sm:h-9 rounded-md bg-zinc-200" />
                    ))}
                  </div>
                  <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-16 sm:h-24 rounded-lg bg-zinc-200" />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="h-32 sm:h-48 rounded-lg bg-zinc-200" />
                      <div className="h-32 sm:h-48 rounded-lg bg-zinc-200" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                <div
                  className={cn(
                    'flex items-center justify-center size-16 sm:size-20 rounded-full mb-4 border border-zinc-200',
                    isComingSoon ? 'bg-amber-50' : 'bg-zinc-100'
                  )}
                >
                  <Lock className={cn('size-6 sm:size-8', isComingSoon ? 'text-amber-600' : 'text-slate-500')} />
                </div>
                <h4 className={cn('text-lg sm:text-xl font-semibold', isComingSoon ? 'text-amber-700' : 'text-slate-600')}>
                  {isComingSoon ? 'Coming Soon' : 'In Development'}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-xs sm:max-w-md text-center px-4">
                  {isComingSoon
                    ? 'This dashboard template is being finalized and will be available shortly.'
                    : 'This dashboard is currently under active development.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isLast && <div className="border-b border-dashed border-zinc-200 mt-6 sm:mt-8" />}
    </div>
  )
}

export function ShowcaseDashboard() {
  return (
    <section id="dashboards" className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl lg:max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900">
            Dashboard Templates
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl mx-auto">
            Premium collection of unified dashboard templates. Preview and open any template below.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {dashboardTemplates.map((template, index) => (
            <DashboardPreviewCard
              key={template.id}
              template={template}
              isLast={index === dashboardTemplates.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
