'use client'

import { Bar, BarChart } from 'recharts'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { type ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

// Product reached data
const productReachChartData = [
  { month: 'January', reached: 168 },
  { month: 'February', reached: 305 },
  { month: 'March', reached: 213 },
  { month: 'April', reached: 330 },
  { month: 'May', reached: 305 }
]

const productReachChartConfig = {
  reached: {
    label: 'Reached',
    color: 'var(--primary)'
  }
} satisfies ChartConfig

// Order placed data
const orderPlacedChartData = [
  { month: 'January', orders: 168 },
  { month: 'February', orders: 305 },
  { month: 'March', orders: 213 },
  { month: 'April', orders: 330 },
  { month: 'May', orders: 305 }
]

const orderPlacedChartConfig = {
  orders: {
    label: 'Orders',
    color: '#F5F5F5'
  }
} satisfies ChartConfig

const ProductInsightsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-start justify-between gap-4 pb-4'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Product insight</span>
          <span className='text-muted-foreground text-sm'>Published on 12 MAY 2025 - 6:10 PM</span>
        </div>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image-7.png'
          alt='Product'
          className='h-16 w-16 shrink-0 rounded-md object-cover'
        />
      </CardHeader>
      <CardContent className='flex flex-col gap-4 pt-0'>
        <Separator />
        <div className='flex flex-row items-center justify-between gap-4'>
          <div className='flex flex-col gap-1'>
            <span className='text-xs text-muted-foreground'>Product reached</span>
            <span className='text-2xl font-semibold'>21,153</span>
          </div>
          <ChartContainer config={productReachChartConfig} className='h-[52px] w-[72px] shrink-0'>
            <BarChart accessibilityLayer data={productReachChartData} barSize={8}>
              <Bar dataKey='reached' fill='var(--color-reached)' radius={2} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className='flex flex-row items-center justify-between gap-4'>
          <div className='flex flex-col gap-1'>
            <span className='text-xs text-muted-foreground'>Order placed</span>
            <span className='text-2xl font-semibold'>2,123</span>
          </div>
          <ChartContainer config={orderPlacedChartConfig} className='h-[52px] w-[72px] shrink-0'>
            <BarChart accessibilityLayer data={orderPlacedChartData} barSize={8}>
              <Bar dataKey='orders' fill='var(--color-orders)' radius={2} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductInsightsCard
