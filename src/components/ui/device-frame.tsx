'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Monitor, Tablet, Smartphone } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { BorderBeam } from '@/registry/magicui/border-beam'

// ============================================================================
// TYPES
// ============================================================================

export type DeviceType = 'desktop' | 'tablet' | 'mobile'

export interface DeviceFrameProps {
  children: React.ReactNode
  className?: string
  defaultDevice?: DeviceType
  showControls?: boolean
  controlsPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  onDeviceChange?: (device: DeviceType) => void
  height?: string | number
  showBackground?: boolean
}

export interface DeviceFrameContentProps {
  children: React.ReactNode
  device: DeviceType
  height?: string | number
  showBackground?: boolean
  className?: string
}

export interface DeviceControlsProps {
  device: DeviceType
  onDeviceChange: (device: DeviceType) => void
  className?: string
}

// ============================================================================
// DEVICE BACKGROUND COMPONENT
// ============================================================================

const LINES_ANGLE = 0
const LINES_GAP = 2
const LINE_WIDTH = 1
const LINES_PERIOD = LINE_WIDTH + LINES_GAP
const LINES_COLOR = 'rgba(0,0,0,0.04)'

export function DeviceBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            ${LINES_ANGLE}deg,
            transparent 0,
            transparent ${LINES_PERIOD - LINE_WIDTH}px,
            ${LINES_COLOR} ${LINES_PERIOD - LINE_WIDTH}px,
            ${LINES_COLOR} ${LINES_PERIOD}px
          )`,
        }}
        aria-hidden
      />
    </div>
  )
}

// ============================================================================
// DEVICE CONTROLS COMPONENT
// ============================================================================

export function DeviceControls({ device, onDeviceChange, className }: DeviceControlsProps) {
  const activeClass = "bg-zinc-200 text-zinc-900"
  const inactiveClass = "bg-white text-zinc-600 hover:bg-zinc-100 transition-colors"
  return (
    <TooltipProvider delayDuration={0}>
      <div className={cn(
        "flex items-center divide-x divide-zinc-200 rounded-lg overflow-hidden",
        className
      )}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={cn(
                "p-2 rounded-l-md rounded-r-none transition-all",
                device === 'desktop' ? activeClass : inactiveClass
              )}
              onClick={() => onDeviceChange('desktop')}
              aria-label="Desktop view"
            >
              <Monitor className="size-4 shrink-0" aria-hidden />
            </button>
          </TooltipTrigger>
          <TooltipContent>Desktop</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={cn(
                "p-2 rounded-none transition-all",
                device === 'tablet' ? activeClass : inactiveClass
              )}
              onClick={() => onDeviceChange('tablet')}
              aria-label="Tablet view"
            >
              <Tablet className="size-4 shrink-0" aria-hidden />
            </button>
          </TooltipTrigger>
          <TooltipContent>Tablet</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={cn(
                "p-2 rounded-l-none rounded-r-md transition-all",
                device === 'mobile' ? activeClass : inactiveClass
              )}
              onClick={() => onDeviceChange('mobile')}
              aria-label="Mobile view"
            >
              <Smartphone className="size-4 shrink-0" aria-hidden />
            </button>
          </TooltipTrigger>
          <TooltipContent>Mobile</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

// ============================================================================
// DEVICE DIMENSIONS
// ============================================================================

const deviceDimensions = {
  desktop: { width: '100%', height: '100%' },
  tablet: { width: '768px', height: '1024px' },
  mobile: { width: '375px', height: '812px' },
}

// ============================================================================
// DEVICE FRAME CONTENT COMPONENT
// ============================================================================

export function DeviceFrameContent({ 
  children, 
  device, 
  height = '600px',
  showBackground = true,
  className 
}: DeviceFrameContentProps) {
  const isDesktop = device === 'desktop'
  const isMobile = device === 'mobile'
  const isTablet = device === 'tablet'
  
  const dimensions = deviceDimensions[device]

  return (
    <div 
      className={cn(
        "relative w-full flex items-center justify-center transition-all duration-500 overflow-hidden",
        isDesktop && "p-4 sm:p-6 bg-zinc-50/60",
        !isDesktop && "py-6 sm:py-8",
        className
      )}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      {showBackground && <DeviceBackground />}
      
      <div 
        className={cn(
          "relative transition-all duration-500 ease-out",
          isDesktop && "w-full h-full min-h-0 rounded-xl overflow-hidden bg-white z-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.06)] ring-1 ring-white/80 ring-inset",
          isDesktop && "drop-shadow-sm",
          !isDesktop && "mx-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 z-10",
          isTablet && "border-[10px] sm:border-[14px] border-zinc-800 dark:border-zinc-900",
          isMobile && "border-[8px] sm:border-[12px] border-zinc-900 dark:border-zinc-800"
        )}
        style={{ 
          width: isDesktop ? '100%' : dimensions.width,
          height: isDesktop ? '100%' : dimensions.height,
          maxWidth: '100%',
          maxHeight: isDesktop ? '100%' : 'calc(100% - 3rem)'
        }}
      >
        {/* Two-dimensional border beam on desktop */}
        {isDesktop && (
          <>
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
          </>
        )}
        
        {/* Device Notch for Mobile */}
        {isMobile && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-7 bg-zinc-900 dark:bg-zinc-800 rounded-b-2xl z-10 flex items-center justify-center">
            <div className="w-12 h-1 bg-zinc-800 dark:bg-zinc-700 rounded-full" />
          </div>
        )}
        
        
        {/* Home Indicator for Mobile */}
        {isMobile && (
          <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-white/30 rounded-full z-10" />
        )}

        <div className="w-full h-full bg-white overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN DEVICE FRAME COMPONENT
// ============================================================================

export function DeviceFrame({
  children,
  className,
  defaultDevice = 'desktop',
  showControls = true,
  controlsPosition = 'top-right',
  onDeviceChange,
  height = '600px',
  showBackground = true,
}: DeviceFrameProps) {
  const [device, setDevice] = useState<DeviceType>(defaultDevice)

  const handleDeviceChange = (newDevice: DeviceType) => {
    setDevice(newDevice)
    onDeviceChange?.(newDevice)
  }

  const controlsPositionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  }

  return (
    <div className={cn("relative", className)}>
      {/* Device Controls */}
      {showControls && (
        <div className={cn("absolute z-20", controlsPositionClasses[controlsPosition])}>
          <DeviceControls device={device} onDeviceChange={handleDeviceChange} />
        </div>
      )}

      {/* Device Frame Content */}
      <DeviceFrameContent 
        device={device} 
        height={height}
        showBackground={showBackground}
      >
        {children}
      </DeviceFrameContent>
    </div>
  )
}

// ============================================================================
// IFRAME DEVICE FRAME COMPONENT (for embedding URLs)
// ============================================================================

export interface IframeDeviceFrameProps extends Omit<DeviceFrameProps, 'children'> {
  src: string
  title?: string
}

export function IframeDeviceFrame({
  src,
  title = 'Preview',
  ...props
}: IframeDeviceFrameProps) {
  return (
    <DeviceFrame {...props}>
      <iframe
        src={src}
        className="w-full h-full border-0"
        title={title}
        loading="lazy"
      />
    </DeviceFrame>
  )
}

// ============================================================================
// EXPORTS
// ============================================================================

export default DeviceFrame
