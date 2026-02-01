'use client'

import { useState } from 'react'
import { motion, type Transition } from 'motion/react'
import { cn } from '@/lib/utils'
import { Monitor, Tablet } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { BorderBeam } from '@/registry/magicui/border-beam'

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

const CONTROL_ACTIVE_BG = 'rgb(228 228 231)'
const CONTROL_INACTIVE_BG = 'rgb(255 255 255)'
const tState: Transition = { duration: 0.2, ease: [0.32, 0.72, 0, 1] }

function DeviceControlButton({
  isActive,
  onClick,
  label,
  ariaLabel,
  children,
  roundedLeft,
  roundedRight,
}: {
  isActive: boolean
  onClick: () => void
  label: string
  ariaLabel: string
  children: React.ReactNode
  roundedLeft?: boolean
  roundedRight?: boolean
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          type="button"
          className={cn(
            'p-2 shrink-0 flex items-center justify-center min-w-[36px] min-h-[36px]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-1',
            'hover:bg-zinc-100 transition-colors duration-150',
            roundedLeft && 'rounded-l rounded-r-none',
            roundedRight && 'rounded-l-none rounded-r',
            !roundedLeft && !roundedRight && 'rounded-none'
          )}
          animate={{
            backgroundColor: isActive ? CONTROL_ACTIVE_BG : CONTROL_INACTIVE_BG,
            color: isActive ? 'rgb(24 24 27)' : 'rgb(82 82 91)',
          }}
          whileTap={{ scale: 0.94 }}
          transition={tState}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {children}
        </motion.button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

export function DeviceControls({ device, onDeviceChange, className }: DeviceControlsProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        className={cn('flex items-center divide-x divide-zinc-200 rounded overflow-hidden', className)}
        initial={false}
      >
        <DeviceControlButton
          isActive={device === 'desktop'}
          onClick={() => onDeviceChange('desktop')}
          label="Desktop"
          ariaLabel="Desktop view"
          roundedLeft
        >
          <Monitor className="size-4 shrink-0" aria-hidden />
        </DeviceControlButton>
        <DeviceControlButton
          isActive={device === 'tablet'}
          onClick={() => onDeviceChange('tablet')}
          label="Tablet"
          ariaLabel="Tablet view"
        >
          <Tablet className="size-4 shrink-0" aria-hidden />
        </DeviceControlButton>
        <DeviceControlButton
          isActive={device === 'mobile'}
          onClick={() => onDeviceChange('mobile')}
          label="Mobile"
          ariaLabel="Mobile view"
          roundedRight
        >
          <Tablet className="size-3.5 shrink-0" aria-hidden />
        </DeviceControlButton>
      </motion.div>
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
          "relative transition-all duration-500 ease-out overflow-hidden",
          isDesktop && "w-full h-full min-h-0 rounded-xl bg-white z-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.06)] ring-1 ring-white/80 ring-inset",
          isDesktop && "drop-shadow-sm",
          !isDesktop && "mx-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-black/20 z-10",
          isTablet && "border-[10px] sm:border-[14px] border-zinc-800 dark:border-zinc-900",
          isMobile && "border-[8px] sm:border-[12px] border-zinc-900 dark:border-zinc-800"
        )}
        style={{
          width: isDesktop ? '100%' : dimensions.width,
          height: isDesktop ? '100%' : dimensions.height,
          maxWidth: '100%',
          maxHeight: isDesktop ? '100%' : 'calc(100% - 3rem)',
          isolation: 'isolate',
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

        <div
          className={cn(
            'w-full h-full bg-white isolate',
            isDesktop && 'rounded-xl overflow-hidden'
          )}
          style={isDesktop ? { borderRadius: '0.75rem' } : undefined}
        >
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
