'use client'

import { CreditCard, DollarSign, EllipsisVertical, Wallet } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'

import { Bar, BarChart, Cell, XAxis } from 'recharts'
import { cn } from '@/lib/utils'

const earningChartData = [
  { day: 'Mo', earnings: 400 },
  { day: 'Tu', earnings: 500 },
  { day: 'We', earnings: 450 },
  { day: 'Th', earnings: 800 },
  { day: 'Fr', earnings: 600 },
  { day: 'Sa', earnings: 550 },
  { day: 'Su', earnings: 500 }
]

const earningChartConfig = {
  earnings: {
    label: 'Earnings',
    color: 'hsl(var(--primary))'
  }
} satisfies ChartConfig

const EarningInsightsCard = ({ className }: { className?: string }) => {
  const subCards = [
    { icon: <Wallet className='size-4' />, label: 'Earning', value: '$1,236', progress: 50 },
    { icon: <DollarSign className='size-4' />, label: 'Profit', value: '$2,300', progress: 75 },
    { icon: <CreditCard className='size-4' />, label: 'Expense', value: '$1,500', progress: 60 }
  ]

  return (
    <Card className={cn('rounded-xl border shadow-sm', className)}>
      <CardHeader className='!flex !flex-row items-start justify-between space-y-0 px-6 pb-0'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Earning insights</span>
          <span className='text-muted-foreground text-sm'>Weekly Earning overview</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:bg-accent hover:text-accent-foreground size-6 shrink-0 rounded-full'>
              <EllipsisVertical className='size-4' />
              <span className='sr-only'>Menu</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-col  px-6 pt-4'>
        {/* Main Earning Display with Chart */}
        <div className='grid gap-10 md:grid-cols-5'>
          {/* Left: Text Content */}
          <div className='flex flex-col gap-4 md:col-span-2'>
            <div className='flex items-center gap-4'>
              <span className='text-6xl font-medium'>$4.6K</span>
              <Badge variant='outline' className='border-transparent bg-primary/10 text-primary rounded-sm px-3 py-1'>
                +10%
              </Badge>
            </div>
            <p className='text-muted-foreground text-xs'>
              Earning of this week compared to last week. it&apos;s increasing keep it up.
            </p>
          </div>

          {/* Right: Bar Chart */}
          <div className='md:col-span-3 md:pl-6'>
            <ChartContainer config={earningChartConfig} className='h-[150px] w-full sm:h-[150px]'>
              <BarChart
                accessibilityLayer
                data={earningChartData}
                margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
              >
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <XAxis
                  dataKey='day'
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                />
                <Bar dataKey='earnings' radius={8} barSize={24} fill='hsl(var(--primary))'>
                  {earningChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index === 3
                          ? 'hsl(var(--primary))'
                          : 'color-mix(in oklab, hsl(var(--primary)) 20%, transparent)'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Sub Cards */}
        <div className='flex flex-wrap justify-between gap-5 rounded-xl border p-6 md:gap-6'>
          {subCards.map((card, index) => (
            <div key={index} className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <Avatar className='size-8 shrink-0 rounded-sm'>
                  <AvatarFallback className='bg-primary/10 text-primary size-8 shrink-0 rounded-sm'>
                    {card.icon}
                  </AvatarFallback>
                </Avatar>
                <span>{card.label}</span>
              </div>
              <span className='text-2xl font-medium'>{card.value}</span>
              <Progress value={card.progress} className='h-1.5 w-[150px]' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default EarningInsightsCard
