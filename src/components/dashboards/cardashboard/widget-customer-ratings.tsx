'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { EllipsisVertical, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Line, LineChart, XAxis, YAxis } from 'recharts'

const data = [
  { month: 'Jan', online: 1.0, offline: 1.2 },
  { month: 'Feb', online: 2.6, offline: 3.2 },
  { month: 'Mar', online: 1.0, offline: 1.5 },
  { month: 'Apr', online: 4.8, offline: 2.2 },
  { month: 'May', online: 3.8, offline: 4.2 },
  { month: 'Jun', online: 2.4, offline: 2.0 },
  { month: 'Jul', online: 5.0, offline: 1.2 }
]

const CustomerRatingsCard = ({ className }: { className?: string }) => {
  return (
    <div
      data-slot='card'
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm col-span-full md:col-span-3 xl:col-span-2',
        className
      )}
    >
      <div
        data-slot='card-header'
        className='@container/card-header auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 flex justify-between'
      >
        <span className='text-lg font-semibold'>Customer Ratings</span>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              data-slot='dropdown-menu-trigger'
              variant='ghost'
              size='icon'
              className='focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-muted-foreground size-6 rounded-full'
            >
              <EllipsisVertical aria-hidden='true' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div
        data-slot='card-content'
        className='px-6 flex flex-1 flex-col gap-6'
      >
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-6'>
            <span className='text-3xl font-semibold'>4.5</span>
            <div
              data-slot='rating'
              role='img'
              data-disabled='false'
              data-readonly='true'
              className='focus-visible:ring-ring/50 flex gap-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
              aria-label='4.5 stars'
              aria-valuemin={0}
              aria-valuemax={5}
              aria-valuenow={4.5}
              aria-valuetext='4.5 of 5 stars'
            >
              {Array.from({ length: 5 }).map((_, idx) => {
                const starIndex = idx + 1
                const isLast = starIndex === 5
                return (
                  <span
                    key={starIndex}
                    data-slot='rating-star'
                    className='relative'
                    aria-disabled='false'
                    aria-hidden='true'
                  >
                    <span
                      data-slot='rating-item'
                      aria-label={`${starIndex - 0.5} Stars`}
                      data-disabled='false'
                      data-readonly='true'
                      data-filled='true'
                      className='[&_svg]:pointer-events-none pointer-events-none absolute top-0 left-0 overflow-hidden'
                      style={{ width: '50%' }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-star transition-colors fill-current text-amber-600 dark:text-amber-400'
                        aria-hidden='true'
                      >
                        <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                      </svg>
                    </span>
                    <span
                      data-slot='rating-item'
                      aria-label={`${starIndex} Stars`}
                      data-disabled='false'
                      data-readonly='true'
                      data-filled={isLast ? 'false' : 'true'}
                      className='[&_svg]:pointer-events-none'
                    >
                      {isLast ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-star fill-amber-600/30 stroke-amber-600/10 dark:fill-amber-400/30 dark:stroke-amber-400/10'
                          aria-hidden='true'
                        >
                          <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-star transition-colors fill-current text-amber-600 dark:text-amber-400'
                          aria-hidden='true'
                        >
                          <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                        </svg>
                      )}
                    </span>
                  </span>
                )
              })}
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Badge className='focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden px-2 py-0.5 text-xs font-medium whitespace-nowrap focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 border-transparent bg-primary/10 hover:bg-primary/10 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 text-primary rounded-sm border focus-visible:outline-none'>
              <Plus className='size-3' />
              5.0
            </Badge>
            <span className='text-muted-foreground text-sm'>Points from last month</span>
          </div>
        </div>

        <ChartContainer
          config={{
            online: { label: 'Online', color: 'hsl(var(--chart-2))' },
            offline: {
              label: 'Offline',
              // match provided HTML style intent (a very light primary tint)
              color: 'color-mix(in oklab, hsl(var(--primary)) 10%, transparent)'
            }
          }}
          className='min-h-47.5 w-full flex-1'
        >
          <LineChart
            data={data}
            margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
          >
              <XAxis
                dataKey='month'
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <YAxis domain={[0, 5]} hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type='natural'
                dataKey='online'
                stroke='var(--color-online)'
                strokeWidth={5}
                strokeLinecap='round'
                dot={(props: any) => {
                  const { cx, cy, payload } = props
                  if (payload.month === 'Jul') {
                    // Show dot only on last point
                    return (
                      <svg
                        key={`dot-${payload.month}`}
                        x={cx - 9}
                        y={cy - 9}
                        width='18'
                        height='18'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g>
                          <circle
                            cx='10'
                            cy='10'
                            r='6'
                            fill='var(--color-online)'
                            stroke='white'
                            strokeWidth='2.2'
                          ></circle>
                          <circle
                            cx='10'
                            cy='10'
                            r='9'
                            stroke='var(--color-online)'
                            strokeWidth='1.8'
                            fill='none'
                          ></circle>
                        </g>
                      </svg>
                    )
                  }
                  return <g key={`empty-dot-${payload.month}`}></g>
                }}
                activeDot={{ r: 6, fill: 'var(--color-online)' }}
              />
              <Line
                type='natural'
                dataKey='offline'
                stroke='var(--color-offline)'
                strokeWidth={3}
                strokeDasharray='12 12'
                dot={false}
                activeDot={{
                  r: 5,
                  fill: 'hsl(var(--primary))',
                  fillOpacity: 0.3
                }}
              />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  )
}

export default CustomerRatingsCard
