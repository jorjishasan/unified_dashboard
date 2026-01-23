'use client'

import { EllipsisVertical } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface Product {
  id: string
  name: string
  image: string
  price: string
  visitors: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Nike Vision Low Shoes',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    price: '$5,600',
    visitors: '10.6K'
  },
  {
    id: '2',
    name: 'Adidas Ultraboost 21',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%202.png',
    price: '$4,500',
    visitors: '4.5K'
  },
  {
    id: '3',
    name: 'Puma RS-X Toys',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%203.png',
    price: '$3,200',
    visitors: '2K'
  },
  {
    id: '4',
    name: 'New Balance 550',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%204.png',
    price: '$2,800',
    visitors: '1.8K'
  },
  {
    id: '5',
    name: 'Reebok Classic Leather',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%205.png',
    price: '$2,200',
    visitors: '1.2K'
  }
]

const PopularProductsCard = () => {
  return (
    <Card className='flex flex-col rounded-[14px] border shadow-sm gap-3 xl:col-span-2'>
      <CardHeader className='!flex !flex-row items-start justify-between space-y-0 gap-2 px-6 pb-0'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Popular product</span>
          <span className='text-muted-foreground text-sm'>Total 10.4K visitors</span>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='px-6 flex flex-1 flex-col justify-between gap-3'>
        {products.map((product) => (
          <div key={product.id} className='flex items-center justify-between gap-2'>
            <div className='flex items-center justify-between gap-2'>
              <div className='p-2'>
                <img src={product.image} alt={product.name} className='size-[42px]' />
              </div>
              <div className='flex flex-col gap-0.5'>
                <span className='font-medium'>{product.name}</span>
                <span className='text-muted-foreground text-xs'>{product.price}</span>
              </div>
            </div>
            <span className='text-muted-foreground text-sm'>{product.visitors}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default PopularProductsCard
