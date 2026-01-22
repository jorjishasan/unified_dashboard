import { ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'

const listItems = ['Share', 'Update', 'Refresh']

type Props = {
  title: string
  earning: number
  trend: 'up' | 'down'
  percentage: number
  comparisonText: string
  earningData: {
    img: string
    platform: string
    technologies: string
    earnings: string
    progressPercentage: number
  }[]
  className?: string
}

const TotalEarningCard = ({ earningData, title, earning, trend, percentage, comparisonText, className }: Props) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between pb-4'>
        <span className='text-lg font-semibold'>{title}</span>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className='text-muted-foreground h-6 w-6 rounded-full'>
              <EllipsisVerticalIcon className='h-4 w-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuGroup>
              {listItems.map((item, index) => (
                <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-col gap-4 pt-0'>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-row items-center gap-2'>
            <span className='text-2xl font-semibold'>${earning.toLocaleString()}</span>
            <span className='flex flex-row items-center gap-1 text-green-600'>
              {trend === 'up' ? <ChevronUpIcon className='h-4 w-4' /> : <ChevronDownIcon className='h-4 w-4' />}
              <span className='text-sm'>{percentage}%</span>
            </span>
          </div>
          <span className='text-muted-foreground text-sm'>{comparisonText}</span>
        </div>
        <div className='flex flex-col gap-4'>
          {earningData.map((earning, index) => (
            <div key={index} className='flex flex-row items-center justify-between gap-4'>
              <div className='flex flex-row items-center gap-3'>
                <Avatar className='h-11 w-11 shrink-0 rounded-sm'>
                  <AvatarFallback className='bg-primary/10 shrink-0 rounded-sm'>
                    <img src={earning.img} alt={earning.platform} className='h-6 w-6 object-cover' />
                  </AvatarFallback>
                </Avatar>
                <div className='flex flex-col gap-0.5'>
                  <span className='text-sm font-semibold'>{earning.platform}</span>
                  <span className='text-muted-foreground text-xs'>{earning.technologies}</span>
                </div>
              </div>
              <div className='flex flex-col items-end gap-1.5 shrink-0'>
                <p className='text-sm font-medium'>{earning.earnings}</p>
                <Progress value={earning.progressPercentage} className='w-36' />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalEarningCard
