'use client'

import { Check, Circle, EllipsisVertical, MapPin, UserCheck, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Order {
  id: string
  sender: {
    name: string
    address: string
  }
  receiver: {
    name: string
    address: string
  }
}

const newOrdersData: Order[] = [
  {
    id: '1',
    sender: {
      name: 'Mustafa Rahman',
      address: '101 Dhanmondi, Dhaka(BD), 1205'
    },
    receiver: {
      name: 'Barun Chowdhury',
      address: '939 Gulshan, Dhaka(BD), 1212'
    }
  },
  {
    id: '2',
    sender: {
      name: 'Lutfor Rahman',
      address: '203 Mirpur, Dhaka(BD), 1216'
    },
    receiver: {
      name: 'Ema Jahan',
      address: '305 Uttara, Dhaka(BD), 1230'
    }
  }
]

const pendingOrdersData: Order[] = [
  {
    id: '3',
    sender: {
      name: 'Ava Begum',
      address: 'Your package has been dispatched'
    },
    receiver: {
      name: 'Rayan Talukder',
      address: 'The package is out for delivery today'
    }
  },
  {
    id: '4',
    sender: {
      name: 'Olivia Khatun',
      address: 'Your package has been dispatched'
    },
    receiver: {
      name: 'Jahangir Das',
      address: 'Successfully delivered today at 12:30 PM'
    }
  }
]

const shippingOrdersData: Order[] = [
  {
    id: '5',
    sender: {
      name: 'Nuhash Pasha',
      address: 'Delivering in 2 days from now (July 13, 2025)'
    },
    receiver: {
      name: 'Golapi Karim',
      address: '939 Gulshan, Dhaka(BD), 1212'
    }
  },
  {
    id: '6',
    sender: {
      name: 'Lily Wazed',
      address: 'July 11, 2025 (Delivered at 12:30 PM)'
    },
    receiver: {
      name: 'Maya Siddique',
      address: 'July 11, 2025 (Delivered at 12:30 PM)'
    }
  }
]

const OrderItem = ({ order }: { order: Order }) => (
  <>
    <li className='grid items-center text-primary gap-x-4'>
      <div
        role='status'
        className='timeline-dot col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center rounded-full border border-current border-none mb-1.25 [&>*:not(:nth-child(4))]:hidden [&>*:nth-child(4)]:block'
      >
        <Circle className='size-2.5' />
        <Check className='size-3' />
        <X className='size-3' />
        <UserCheck className='text-primary size-4' />
      </div>
      <hr
        role='separator'
        aria-orientation='vertical'
        className='col-start-2 col-end-3 row-start-2 row-end-2 mx-auto flex h-full min-h-16 w-1 justify-center rounded-full border-l-2 border-dashed border-muted/40 bg-transparent'
      />
      <p
        role='heading'
        aria-level={3}
        className='row-start-1 row-end-1 line-clamp-1 max-w-full truncate col-start-3 col-end-4 mr-auto text-left text-primary text-sm font-normal'
      >
        Sender
      </p>
      <div className='text-card-foreground row-start-2 row-end-2 col-start-3 col-end-4 mr-auto text-left flex flex-col gap-0.5 pb-2'>
        <span className='font-medium'>{order.sender.name}</span>
        <span className='text-muted-foreground text-sm'>{order.sender.address}</span>
      </div>
    </li>
    <li className='grid items-center text-primary mt-2 gap-x-4'>
      <div
        role='status'
        className='timeline-dot col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center rounded-full border border-current border-none [&>*:not(:nth-child(4))]:hidden [&>*:nth-child(4)]:block'
      >
        <Circle className='size-2.5' />
        <Check className='size-3' />
        <X className='size-3' />
        <MapPin className='text-primary size-4' />
      </div>
      <p
        role='heading'
        aria-level={3}
        className='row-start-1 row-end-1 line-clamp-1 max-w-full truncate col-start-3 col-end-4 mr-auto text-left text-primary text-sm font-normal'
      >
        Receiver
      </p>
      <div className='text-card-foreground row-start-2 row-end-2 col-start-3 col-end-4 mr-auto text-left mt-0.5 flex flex-col gap-0.5 pb-0'>
        <span className='font-medium'>{order.receiver.name}</span>
        <span className='text-muted-foreground text-sm'>{order.receiver.address}</span>
      </div>
    </li>
  </>
)

const OrdersCard = () => {
  return (
    <Card className='bg-card text-card-foreground flex py-6 flex-col rounded-xl border shadow-sm gap-4 xl:col-span-2'>
      <CardHeader className='!flex !flex-row items-start justify-between space-y-0 gap-2 px-6 py-0'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Orders</span>
          <span className='text-muted-foreground text-sm'>75 Deliveries in progress</span>
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='text-muted-foreground hover:bg-accent hover:text-accent-foreground size-6 shrink-0 rounded-full ml-auto'
            >
              <EllipsisVertical className='size-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View All</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <Tabs defaultValue='new' className='flex flex-col gap-0'>
        <TabsList className='text-muted-foreground inline-flex h-9 mb-4 items-center justify-center bg-background w-full rounded-none border-b p-0'>
          <TabsTrigger
            value='new'
            className='inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap bg-background data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent'
          >
            New
          </TabsTrigger>
          <TabsTrigger
            value='pending'
            className='inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap bg-background data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent'
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            value='shipping'
            className='inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap bg-background data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent'
          >
            Shipping
          </TabsTrigger>
        </TabsList>
        <TabsContent value='new' className='flex-1 outline-none flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={newOrdersData[0]} />
            </ul>
            <div className='pl-4'>
              <Separator />
            </div>
          </div>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={newOrdersData[1]} />
            </ul>
          </div>
        </TabsContent>
        <TabsContent value='pending' className='flex-1 outline-none flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={pendingOrdersData[0]} />
            </ul>
            <div className='pl-4'>
              <Separator />
            </div>
          </div>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={pendingOrdersData[1]} />
            </ul>
          </div>
        </TabsContent>
        <TabsContent value='shipping' className='flex-1 outline-none flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={shippingOrdersData[0]} />
            </ul>
            <div className='pl-4'>
              <Separator />
            </div>
          </div>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={shippingOrdersData[1]} />
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

export default OrdersCard
