'use client'

import { BookMarked, ChevronDown, ChevronUp, DollarSign, ShoppingCart, TicketCheck } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface KPICardData {
  icon: React.ReactNode
  value: string
  label: string
  trend: {
    value: string
    isPositive: boolean
  }
  timeframe: string
}

const kpiData: KPICardData[] = [
  {
    icon: <TicketCheck />,
    value: '$13.4k',
    label: 'Total Sales',
    trend: { value: '+38%', isPositive: true },
    timeframe: 'Last 6 months'
  },
  {
    icon: <ShoppingCart />,
    value: '155K',
    label: 'Total Orders',
    trend: { value: '+22%', isPositive: true },
    timeframe: 'Last 4 months'
  },
  {
    icon: <DollarSign />,
    value: '$89.34k',
    label: 'Total Profit',
    trend: { value: '-16%', isPositive: false },
    timeframe: 'Last One year'
  },
  {
    icon: <BookMarked />,
    value: '$1,200',
    label: 'Bookmarks',
    trend: { value: '+38%', isPositive: true },
    timeframe: 'Last 6 months'
  }
]

const KPICard = ({ data }: { data: KPICardData }) => {
  return (
    <Card className='flex flex-col rounded-[14px] border py-6 shadow-sm gap-4'>
      <CardHeader className='flex flex-row items-start justify-between px-6 py-0'>
        <Avatar className='relative flex shrink-0 overflow-hidden  rounded-md'>
          <AvatarFallback className='flex items-center justify-center bg-primary/10 text-primary size-[32px] shrink-0 rounded-md [&>svg]:size-[19px]'>
            {data.icon}
          </AvatarFallback>
        </Avatar>
        <p className='flex items-center text-sm '>
          {data.trend.value}
          {data.trend.isPositive ? <ChevronUp className='size-4' /> : <ChevronDown className='size-4' />}
        </p>
      </CardHeader>
      <CardContent className='px-6 py-0 flex flex-1 flex-col justify-between gap-4'>
        <p className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>{data.value}</span>
          <span className='text-muted-foreground text-sm'>{data.label}</span>
        </p>
        <Badge
          variant='outline'
          className='inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] border-transparent bg-primary/10 text-primary'
        >
          {data.timeframe}
        </Badge>
      </CardContent>
    </Card>
  )
}

const KPICards = () => {
  return (
    <div className='grid w-full gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
      {kpiData.map((data, index) => (
        <KPICard key={index} data={data} />
      ))}
    </div>
  )
}

export default KPICards
