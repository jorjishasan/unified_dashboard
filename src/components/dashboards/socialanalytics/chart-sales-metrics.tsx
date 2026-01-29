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

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

import { cn } from '@/lib/utils'

const salesPlanPercentage = 54
const salesPlanSegments = 24
const filledSegments = 12

// Sales plan progress: 24 dots, 12 filled
const salesPlanBarData = Array.from({ length: salesPlanSegments }, (_, index) => ({
  filled: index < filledSegments ? 1 : 0
}))

const salesPlanBarConfig = {
  filled: {
    label: 'Progress'
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

// Revenue goal donut: dark grey (largest), medium grey, light grey to match design
const REVENUE_GOAL_COLORS = {
  january: 'hsl(0 0% 15%)',   // dark grey / almost black – largest segment
  february: 'hsl(0 0% 46%)',  // medium grey – second segment
  march: 'hsl(0 0% 83%)'     // light grey – third segment
} as const

const revenueChartData = [
  { month: 'january', sales: 340, fill: REVENUE_GOAL_COLORS.january },
  { month: 'february', sales: 200, fill: REVENUE_GOAL_COLORS.february },
  { month: 'march', sales: 200, fill: REVENUE_GOAL_COLORS.march }
]

const revenueChartConfig = {
  sales: {
    label: 'Sales'
  },
  january: {
    label: 'January',
    color: REVENUE_GOAL_COLORS.january
  },
  february: {
    label: 'February',
    color: REVENUE_GOAL_COLORS.february
  },
  march: {
    label: 'March',
    color: REVENUE_GOAL_COLORS.march
  }
} satisfies ChartConfig

const SalesMetricsCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm col-span-full xl:col-span-2 [&>[data-slot=card-content]]:space-y-6',
        className
      )}
    >
      <CardContent className='px-6 py-0 space-y-4'>
        <div className='grid gap-6 lg:grid-cols-5'>
          <div className='flex flex-col gap-7 lg:col-span-3'>
            <span className='text-lg font-semibold'>Sales metrics</span>
            <div className='flex items-center gap-3'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/logo/logo-square.png'
                className='size-10.5 w-[42px] h-[42px] rounded-lg'
                alt='logo'
              />
              <div className='flex flex-col gap-0.5'>
                <span className='text-xl font-medium'>Jorjis&apos; Company</span>
                <span className='text-muted-foreground text-sm'>jorjis.hasan@gmail.com</span>
              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {MetricsData.map((metric, index) => (
                <div key={index} className='flex items-center gap-3 rounded-lg border px-4 py-2'>
                  <span className='relative flex shrink-0 overflow-hidden size-8.5 rounded-sm'>
                    <span
                      className='flex size-full items-center justify-center bg-primary/10 text-primary shrink-0 rounded-sm p-1.5 box-border'
                    >
                      {metric.icons}
                    </span>
                  </span>
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-muted-foreground text-sm font-[500]'>{metric.title}</span>
                    <span className='text-lg font-medium'>{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className='bg-card text-card-foreground flex flex-col rounded-xl border gap-4 py-4 shadow-none lg:col-span-2'>
            <CardHeader className='@container/card-header py-0 grid auto-rows-min grid-rows-[auto_auto] items-start px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 gap-1'>
              <CardTitle className='text-[18px] font-semibold'>Revenue goal</CardTitle>
            </CardHeader>

            <CardContent className='px-0 py-0'>
              <ChartContainer
                config={revenueChartConfig}
                className='h-[154px] w-full max-w-[256px] mx-auto overflow-visible [&_.recharts-responsive-container]:min-h-0 [&_.recharts-wrapper]:max-h-none'
              >
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

            <CardFooter className='flex items-center px-6 py-0 [.border-t]:pt-6 justify-between'>
              <span className='text-lg'>Plan completed</span>
              <span className='text-xl font-medium'>56%</span>
            </CardFooter>
          </Card>
        </div>
        {/* Sales plan block */}
        <Card className='bg-card text-card-foreground flex flex-col gap-6  rounded-xl border py-6 shadow-none'>
          <CardContent className='grid gap-6 px-4 py-0 lg:grid-cols-5'>
            {/* Left: Sales plan metric */}
            <div className='flex flex-col justify-center leading-none gap-4'>
              <span className='text-lg font-semibold text-foreground'>Sales plan</span>
              <span className='text-[36px] text-foreground lg:text-[60px]'>
                {salesPlanPercentage}%
              </span>
              <span className='text-muted-foreground text-sm'>
                Percentage profit from total sales
              </span>
            </div>

            {/* Right: Cohort analysis + progress bar */}
            <div className='flex flex-col gap-6 text-base md:col-span-4'>
              <span className='font-medium text-foreground'>Cohort analysis indicators</span>
              <p className='text-muted-foreground max-w-sm text-pretty text-sm leading-relaxed'>
                Analyzes the behaviour of a group of users who joined a product/service at the same
                time. over a certain period.
              </p>
              <div className='grid gap-4 sm:grid-cols-2'>
                <button
                  type='button'
                  className='flex items-center gap-2 text-left font-medium text-foreground transition-opacity hover:opacity-80'
                >
                  <ChartNoAxesCombinedIcon className='size-5 shrink-0' aria-hidden />
                  <span>Open Statistics</span>
                </button>
                <button
                  type='button'
                  className='flex items-center gap-2 text-left font-medium text-foreground transition-opacity hover:opacity-80'
                >
                  <CirclePercentIcon className='size-5 shrink-0' aria-hidden />
                  <span>Percentage Change</span>
                </button>
              </div>

              {/* Progress: 24 dots, 12 filled */}
              <ChartContainer config={salesPlanBarConfig} className='h-8 w-full'>
                <BarChart
                  accessibilityLayer
                  data={salesPlanBarData}
                  margin={{ left: 0, right: 0 }}
                  maxBarSize={16}
                >
                  <Bar
                    dataKey='filled'
                    fill='hsl(0 0% 15%)'
                    background={{
                      fill: 'hsl(0 0% 93%)',
                      radius: 12
                    }}
                    radius={12}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default SalesMetricsCard
