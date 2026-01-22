'use client'

import {
  BadgePercentIcon,
  ChartNoAxesCombinedIcon,
  CirclePercentIcon,
  DollarSignIcon,
  ShoppingBagIcon,
  TrendingUpIcon
} from 'lucide-react'

import { Bar, BarChart, Label, Pie, PieChart } from 'recharts'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const salesPlanPercentage = 54
const totalBars = 20
const filledBars = 12

// Sales chart data
const salesChartData = Array.from({ length: totalBars }, (_, index) => {
  const date = new Date(2025, 5, 15)

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return {
    date: formattedDate,
    sales: index < filledBars ? 315 : 0
  }
})

const salesChartConfig = {
  sales: {
    label: 'Sales'
  }
} satisfies ChartConfig

const MetricsData = [
  {
    icons: <TrendingUpIcon className='size-5' />,
    title: 'Sales trend',
    value: '$11,548'
  },
  {
    icons: <BadgePercentIcon className='size-5' />,
    title: 'Discount offers',
    value: '$1,326'
  },
  {
    icons: <DollarSignIcon className='size-5' />,
    title: 'Net profit',
    value: '$17,356'
  },
  {
    icons: <ShoppingBagIcon className='size-5' />,
    title: 'Total orders',
    value: '248'
  }
]

const revenueChartData = [
  { month: 'january', sales: 340, fill: '#000000' },
  { month: 'february', sales: 200, fill: '#808080' },
  { month: 'march', sales: 200, fill: '#CCCCCC' }
]

const revenueChartConfig = {
  sales: {
    label: 'Sales'
  },
  january: {
    label: 'January',
    color: '#000000'
  },
  february: {
    label: 'February',
    color: '#808080'
  },
  march: {
    label: 'March',
    color: '#CCCCCC'
  }
} satisfies ChartConfig

const SalesMetricsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardContent className='flex flex-col gap-6 pt-6'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-stretch'>
          <div className='flex flex-[3] flex-col justify-end gap-6'>
            <span className='text-lg font-semibold -mt-2'>Sales metrics</span>
            <div className='flex flex-row items-center gap-3'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/logo/logo-square.png'
                className='h-10 w-10 shrink-0 rounded-lg object-cover'
                alt='logo'
              />
              <div className='flex flex-col gap-0.5'>
                <span className='text-xl font-medium'>Sandy&apos; Company</span>
                <span className='text-muted-foreground text-sm'>sandy@company.com</span>
              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {MetricsData.map((metric, index) => (
                <div key={index} className='flex flex-row items-center gap-3 rounded-md border px-4 py-3'>
                  <Avatar className='h-10 w-10 shrink-0 rounded-sm'>
                    <AvatarFallback className='bg-muted text-muted-foreground shrink-0 rounded-sm'>
                      {metric.icons}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-muted-foreground text-xs font-medium'>{metric.title}</span>
                    <span className='text-base font-semibold'>{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className='flex flex-[2] flex-col shadow-none'>
            <CardHeader className='pb-0'>
              <CardTitle className='text-lg font-semibold'>Revenue goal</CardTitle>
            </CardHeader>

            <CardContent className='flex flex-1 items-center justify-center px-0'>
              <ChartContainer config={revenueChartConfig} className=' w-full'>
                <PieChart margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={revenueChartData}
                    dataKey='sales'
                    nameKey='month'
                    startAngle={300}
                    endAngle={660}
                    innerRadius={58}
                    outerRadius={75}
                    paddingAngle={2}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 12}
                                className='fill-card-foreground text-lg font-medium'
                              >
                                256.24
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 19}
                                className='fill-muted-foreground text-sm'
                              >
                                Total Profit
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>

            <CardFooter className='flex flex-row items-center justify-between pt-2'>
              <span className='text-xl font-medium'>Plan completed</span>
              <span className='text-2xl font-medium'>56%</span>
            </CardFooter>
          </Card>
        </div>
        <Card className='shadow-none'>
          <CardContent className='grid gap-6 px-6 py-6 lg:grid-cols-5'>
            <div className='flex flex-col justify-center gap-6'>
              <span className='text-lg font-semibold'>Sales plan</span>
              <span className='text-6xl font-semibold'>{salesPlanPercentage}%</span>
              <span className='text-muted-foreground text-sm'>Percentage profit from total sales</span>
            </div>
            <div className='flex flex-col gap-6 md:col-span-4'>
              <span className='text-lg font-semibold'>Cohort analysis indicators</span>
              <span className='text-muted-foreground text-sm leading-relaxed'>
                Analyzes the behaviour of a group of users who joined a product/service at the same time. over a certain
                period.
              </span>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='flex flex-row items-center gap-2'>
                  <ChartNoAxesCombinedIcon className='h-6 w-6 shrink-0' />
                  <span className='text-lg font-medium'>Open Statistics</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <CirclePercentIcon className='h-6 w-6 shrink-0' />
                  <span className='text-lg font-medium'>Percentage Change</span>
                </div>
              </div>

              <div className='flex flex-row gap-1'>
                {Array.from({ length: totalBars }, (_, index) => (
                  <div
                    key={index}
                    className={`h-4 w-2 flex-1 rounded ${
                      index < filledBars ? 'bg-foreground' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default SalesMetricsCard
