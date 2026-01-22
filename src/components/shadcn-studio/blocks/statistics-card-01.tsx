import type { ReactNode } from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { cn } from '@/lib/utils'

// Statistics card data type
type StatisticsCardProps = {
  icon: ReactNode
  value: string
  title: string
  changePercentage: string
  className?: string
}

const StatisticsCard = ({ icon, value, title, changePercentage, className }: StatisticsCardProps) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-center gap-3 pb-3'>
        <div className='bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-md'>
          {icon}
        </div>
        <span className='text-2xl font-semibold'>{value}</span>
      </CardHeader>
      <CardContent className='flex flex-col gap-1.5 pt-0'>
        <span className='text-sm font-semibold'>{title}</span>
        <p className='text-sm'>
          <span className={title.includes('Missed') ? 'text-red-600' : changePercentage.startsWith('+') ? 'text-green-600' : 'text-red-600'}>{changePercentage}</span>
          <span className='text-muted-foreground'> than last week</span>
        </p>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
