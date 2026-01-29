'use client'

import { Bar, BarChart } from 'recharts'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { type ChartConfig, ChartContainer } from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

// Product reached data – bars use primary (solid dark)
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
    color: 'hsl(var(--primary))'
  }
} satisfies ChartConfig

// Order placed data – bars use muted (light gray)
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
    color: 'hsl(0 0% 92%)'
  }
} satisfies ChartConfig

const ProductInsightsCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        'bg-card text-card-foreground flex flex-col rounded-[14px] border py-6 shadow-sm justify-between gap-3',
        className
      )}
    >
      <CardHeader className='flex justify-between flex-row items-start gap-2 px-6 py-0'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Product insight</span>
          <span className='text-muted-foreground text-sm'>Published on 12 MAY 2025 - 6:10 PM</span>
        </div>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image-7.png'
          alt='Product'
          className='w-[82px] h-[64px] shrink-0 !mt-0 rounded-md object-cover'
        />
      </CardHeader>
      <CardContent className='px-6 py-0 space-y-5'>
        <Separator className='bg-border' />
        <div className='flex flex-row items-center justify-between gap-4'>
          <div className='flex flex-col gap-0.5'>
            <span className='text-xs font-normal text-foreground'>Product reached</span>
            <span className='text-2xl font-semibold text-foreground'>21,153</span>
          </div>
          <ChartContainer
            config={productReachChartConfig}
            className='min-h-[52px] max-w-[72px] shrink-0'
          >
            <BarChart accessibilityLayer data={productReachChartData} barSize={8}>
              <Bar dataKey='reached' fill='var(--color-reached)' radius={2} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className='flex flex-row items-center justify-between gap-4'>
          <div className='flex flex-col gap-0.5'>
            <span className='text-xs font-normal text-foreground'>Order placed</span>
            <span className='text-2xl font-semibold text-foreground'>2,123</span>
          </div>
          <ChartContainer
            config={orderPlacedChartConfig}
            className='min-h-[52px] max-w-[72px] shrink-0'
          >
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

