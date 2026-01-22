'use client'

import { Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

interface StorePerformance {
  label: string
  value: number
  badge: string
  filledBars: number
  totalBars: number
  barColor: string
}

const storeData: StorePerformance[] = [
  {
    label: 'Online Store',
    value: 88,
    badge: 'Good',
    filledBars: 11,
    totalBars: 13,
    barColor: 'bg-red-500'
  },
  {
    label: 'Offline Store',
    value: 64,
    badge: 'Average',
    filledBars: 5,
    totalBars: 13,
    barColor: 'bg-teal-600'
  }
]

const SalesPerformanceCard = ({ className }: { className?: string }) => {
  const totalSales = 68
  const changePercentage = -6

  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-center justify-between pb-4'>
        <div className='flex items-center gap-2'>
          <Sparkles className='h-5 w-5 text-muted-foreground' />
          <span className='text-lg font-semibold'>Sales performance</span>
        </div>
        <Button variant='outline' size='sm'>
          Details
        </Button>
      </CardHeader>
      <CardContent className='flex flex-col gap-6 pt-0'>
        {/* Main Sales Number */}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <span className='text-4xl font-semibold'>{totalSales}K</span>
            <Badge variant='secondary' className='bg-muted text-muted-foreground'>
              {changePercentage}%
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Store Performance Sections */}
        <div className='grid grid-cols-2 gap-6'>
          {storeData.map((store) => (
            <div key={store.label} className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <span className='text-3xl font-semibold'>{store.value}</span>
                <Badge variant='secondary' className='bg-muted text-muted-foreground'>
                  {store.badge}
                </Badge>
              </div>

              {/* Vertical Bars */}
              <div className='flex flex-col-reverse gap-1'>
                {Array.from({ length: store.totalBars }, (_, index) => {
                  const isFilled = index < store.filledBars
                  return (
                    <div
                      key={index}
                      className={cn(
                        'h-2 w-full rounded',
                        isFilled ? store.barColor : 'bg-muted'
                      )}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SalesPerformanceCard
