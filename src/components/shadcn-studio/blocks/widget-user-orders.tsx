'use client'

import { Ellipsis, Package, PackageOpen, Truck } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const UserOrdersCard = () => {
  const packedItems = [
    { label: 'Packing Pending', value: 4250, progress: 80 },
    { label: 'Packing in Progress', value: 2150, progress: 46 },
    { label: 'Packing Complete', value: 1750, progress: 37 }
  ]

  const shippedItems = [
    { label: 'Shipping Pending', value: 3250, progress: 70 },
    { label: 'Shipping in Progress', value: 1150, progress: 50 },
    { label: 'Shipping Complete', value: 950, progress: 30 }
  ]

  const receivedItems = [
    { label: 'Receiving Pending', value: 2800, progress: 60 },
    { label: 'Receiving in Progress', value: 1500, progress: 32 },
    { label: 'Receiving Complete', value: 1000, progress: 21 }
  ]

  return (
    <Card className='bg-card text-card-foreground flex flex-col rounded-[14px] border py-6 shadow-sm gap-4 xl:col-span-2'>
      <CardHeader className='flex items-start flex-row justify-between gap-2 py-0 px-6'>
        <div className='flex items-center gap-2'>
          <Avatar className='relative flex shrink-0 overflow-hidden size-[38px] rounded-lg'>
            <AvatarImage
              className='aspect-square size-full rounded-lg'
              alt='Jorjis Hasan'
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
            />
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-1'>
            <span className='text-[20px] font-medium'>@jorjishasan</span>
            <span className='text-muted-foreground text-sm'>Business</span>
          </div>
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='text-muted-foreground hover:bg-accent hover:text-accent-foreground size-6 shrink-0 rounded-full'
            >
              <Ellipsis className='size-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='px-6 flex flex-1 flex-col gap-6 py-0'>
        <div data-orientation="horizontal" role="none" className="bg-border shrink-0 h-px w-full"></div>
        <div className='flex flex-1 flex-col gap-2'>
          <div className='flex items-baseline gap-2'>
            <span className='text-2xl font-medium'>4,689</span>
            <span className='text-muted-foreground text-sm'>Orders</span>
          </div>
          <Tabs defaultValue='shipped' className='flex flex-col flex-1 justify-between gap-6'>
            <TabsList className='bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-[3px] w-full'>
              <TabsTrigger
                value='packed'
                className='h-[calc(100%-1px)] flex-1 justify-center rounded-md border border-transparent py-1 text-sm font-medium whitespace-nowrap data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center gap-1 px-1.5'
              >
                <Package className='size-4' />
                <span className='max-sm:hidden'>Packed</span>
              </TabsTrigger>
              <TabsTrigger
                value='shipped'
                className='h-[calc(100%-1px)] flex-1 justify-center rounded-md border border-transparent py-1 text-sm font-medium whitespace-nowrap data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center gap-1 px-1.5'
              >
                <Truck className='size-4' />
                <span className='max-sm:hidden'>Shipped</span>
              </TabsTrigger>
              <TabsTrigger
                value='received'
                className='h-[calc(100%-1px)] flex-1 justify-center rounded-md border border-transparent py-1 text-sm font-medium whitespace-nowrap data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center gap-1 px-1.5'
              >
                <PackageOpen className='size-4' />
                <span className='max-sm:hidden'>Received</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent 
              value='packed' 
              className='hidden data-[state=active]:flex flex-1 outline-none flex-col justify-evenly gap-6' 
              data-slot='tabs-content'
            >
              {packedItems.map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span>{item.label}</span>
                    <span className='text-muted-foreground text-sm'>{item.value}</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role='progressbar'
                    data-state='indeterminate'
                    data-max={100}
                    data-slot='progress'
                    className='bg-primary/20 relative h-2 w-full overflow-hidden rounded-full'
                  >
                    <div
                      data-state='indeterminate'
                      data-max={100}
                      data-slot='progress-indicator'
                      className='bg-primary h-full w-full flex-1 transition-all'
                      style={{ transform: `translateX(-${100 - item.progress}%)` }}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent 
              value='shipped' 
              className='hidden data-[state=active]:flex flex-1 outline-none flex-col justify-evenly gap-6' 
              data-slot='tabs-content'
            >
              {shippedItems.map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span>{item.label}</span>
                    <span className='text-muted-foreground text-sm'>{item.value}</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role='progressbar'
                    data-state='indeterminate'
                    data-max={100}
                    data-slot='progress'
                    className='bg-primary/20 relative h-2 w-full overflow-hidden rounded-full'
                  >
                    <div
                      data-state='indeterminate'
                      data-max={100}
                      data-slot='progress-indicator'
                      className='bg-primary h-full w-full flex-1 transition-all'
                      style={{ transform: `translateX(-${100 - item.progress}%)` }}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent 
              value='received' 
              className='hidden data-[state=active]:flex flex-1 outline-none flex-col justify-evenly gap-6' 
              data-slot='tabs-content'
            >
              {receivedItems.map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span>{item.label}</span>
                    <span className='text-muted-foreground text-sm'>{item.value}</span>
                  </div>
                  <div
                    aria-valuemax={100}
                    aria-valuemin={0}
                    role='progressbar'
                    data-state='indeterminate'
                    data-max={100}
                    data-slot='progress'
                    className='bg-primary/20 relative h-2 w-full overflow-hidden rounded-full'
                  >
                    <div
                      data-state='indeterminate'
                      data-max={100}
                      data-slot='progress-indicator'
                      className='bg-primary h-full w-full flex-1 transition-all'
                      style={{ transform: `translateX(-${100 - item.progress}%)` }}
                    />
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserOrdersCard

