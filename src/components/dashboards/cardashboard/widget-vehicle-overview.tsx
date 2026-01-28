'use client'

import { useEffect, useState } from 'react'

import { ArrowDown, ArrowUp, Car, Clock, MoreVertical } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

// Hardcoded for simplicity as per requirements to mimic image
const vehicleStatuses = [
  {
    label: 'On the way',
    percentage: 33.3,
    duration: '2hr 10min',
    icon: <Car className='size-4' />,
    color: 'bg-muted',
    iconColor: 'text-muted-foreground',
    barColor: 'bg-primary/10'
  },
  {
    label: 'Unloading',
    percentage: 23.5,
    duration: '3hr 15min',
    icon: <ArrowDown className='size-4' />,
    color: 'bg-orange-500',
    iconColor: 'text-orange-500',
    barColor: 'bg-orange-500'
  },
  {
    label: 'Loading',
    percentage: 22.1,
    duration: '1hr 24min',
    icon: <ArrowUp className='size-4' />,
    color: 'bg-teal-600',
    iconColor: 'text-teal-600',
    barColor: 'bg-teal-600'
  },
  {
    label: 'Waiting',
    percentage: 21.1,
    duration: '5hr 19min',
    icon: <Clock className='size-4' />,
    color: 'bg-slate-700',
    iconColor: 'text-slate-700',
    barColor: 'bg-blue-900'
  }
]

const VehicleOverviewCard = ({ className }: { className?: string }) => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setAnimated(true), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between border-b pb-6 px-6'>
        <span className='text-lg font-semibold'>Vehicle overview</span>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:bg-accent hover:text-accent-foreground size-6 rounded-full flex items-center justify-center transition-colors'>
              <MoreVertical className='size-4' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-col gap-6 px-6 pt-6'>
        {/* Progress Bar Section */}
        <div className='flex flex-col gap-3'>
          {/* Labels */}
          <div className='text-muted-foreground flex text-sm'>
            {vehicleStatuses.map((status) => (
              <div
                key={status.label}
                className='flex flex-col gap-1'
                style={{ width: `${status.percentage}%` }}
              >
                <span>{status.label}</span>
                <div className='bg-muted-foreground h-2.5 w-0.5 rounded-full'></div>
              </div>
            ))}
          </div>

          {/* Segmented Progress Bar */}
          <div className='flex h-12 w-full overflow-hidden rounded-md'>
            {vehicleStatuses.map((status) => (
              <div
                key={status.label}
                className={cn(
                  'flex items-center justify-center p-3 text-sm font-medium transition-all duration-1000 ease-out',
                  status.barColor,
                  status.label === 'On the way' ? 'text-primary' : 'text-primary-foreground'
                )}
                style={{
                  width: `${animated ? status.percentage : 0}%`
                }}
              >
                <span>{status.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed List Section */}
        <div>
          {vehicleStatuses.map((status, index) => (
            <div
              key={status.label}
              className={cn(
                'flex items-center justify-between px-2 py-3',
                index < vehicleStatuses.length - 1 ? 'border-b' : ''
              )}
            >
              <div className='text-muted-foreground flex items-center gap-4 [&>svg]:size-4'>
                {status.icon}
                <span>{status.label}</span>
              </div>
              <div className='flex items-center gap-4'>
                <span className='font-medium'>{status.duration}</span>
                <span className='text-muted-foreground text-sm'>{status.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default VehicleOverviewCard
