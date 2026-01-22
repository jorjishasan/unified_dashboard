'use client'

import { useState } from 'react'

import { MapPin, MoreVertical, User } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

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

const ordersData: Order[] = [
  {
    id: '1',
    sender: {
      name: 'Mytrle Ullrich',
      address: '101 Boulder, California(CA), 959595'
    },
    receiver: {
      name: 'Barry Schowalter',
      address: '939 orange, California(CA), 92118'
    }
  },
  {
    id: '2',
    sender: {
      name: 'Lucas Smith',
      address: '203 Riverdale, New York(NY), 10001'
    },
    receiver: {
      name: 'Emma Johnson',
      address: '305 Maple Avenue, Austin, Texas(TX), 73301'
    }
  },
  {
    id: '3',
    sender: {
      name: 'Sarah Williams',
      address: '456 Oak Street, Los Angeles(CA), 90001'
    },
    receiver: {
      name: 'Michael Brown',
      address: '789 Pine Road, Seattle(WA), 98101'
    }
  },
  {
    id: '4',
    sender: {
      name: 'Emily Davis',
      address: '321 Elm Avenue, Chicago(IL), 60601'
    },
    receiver: {
      name: 'David Wilson',
      address: '654 Cedar Lane, Miami(FL), 33101'
    }
  }
]

const OrdersCard = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState('new')
  const deliveriesInProgress = 75

  const tabs = [
    { id: 'new', label: 'New' },
    { id: 'pending', label: 'Pending' },
    { id: 'shipping', label: 'Shipping' }
  ]

  return (
    <Card className={cn('flex h-[380px] flex-col', className)}>
      <CardHeader className='flex flex-row items-start justify-between pb-2'>
        <div className='flex flex-col gap-1'>
          <span className='text-2xl font-semibold'>Orders</span>
          <span className='text-muted-foreground text-sm'>{deliveriesInProgress} Deliveries in progress</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:text-foreground'>
              <MoreVertical className='h-5 w-5' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View All</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-1 flex-col gap-0 overflow-hidden pt-0'>
        {/* Tab Navigation */}
        <div className='flex shrink-0 border-b'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'border-b-2 border-foreground font-semibold text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {ordersData.map((order, index) => (
            <div key={order.id}>
              <div className='flex gap-4 p-4'>
                {/* Dotted Connection Line */}
                <div className='relative flex flex-col items-center pt-1'>
                  <div className='flex h-6 w-6 items-center justify-center'>
                    <User className='h-4 w-4 text-muted-foreground' />
                  </div>
                  <div className='my-2 h-full w-px border-l-2 border-dotted border-muted-foreground/40' />
                  <div className='flex h-6 w-6 items-center justify-center'>
                    <MapPin className='h-4 w-4 text-muted-foreground' />
                  </div>
                </div>

                {/* Order Content */}
                <div className='flex-1 space-y-6'>
                  {/* Sender */}
                  <div className='flex flex-col gap-2'>
                    <span className='text-sm font-medium'>Sender</span>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-semibold'>{order.sender.name}</span>
                      <span className='text-muted-foreground text-xs'>{order.sender.address}</span>
                    </div>
                  </div>

                  {/* Receiver */}
                  <div className='flex flex-col gap-2'>
                    <span className='text-sm font-medium'>Receiver</span>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-semibold'>{order.receiver.name}</span>
                      <span className='text-muted-foreground text-xs'>{order.receiver.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              {index < ordersData.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default OrdersCard
