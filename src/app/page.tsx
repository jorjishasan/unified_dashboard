import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import EarningInsightsCard from '@/components/shadcn-studio/blocks/widget-earning-insights'
import KPICards from '@/components/shadcn-studio/blocks/kpi-cards'
import OrdersCard from '@/components/shadcn-studio/blocks/widget-orders'
import PopularProductsCard from '@/components/shadcn-studio/blocks/widget-popular-products'
import ProductTable from '@/components/shadcn-studio/blocks/product-table'
import UserOrdersCard from '@/components/shadcn-studio/blocks/widget-user-orders'

const DashboardShell = () => {
  return (
    <div className='flex min-h-dvh w-full flex-col bg-background'>
      {/* Dark Header */}
      <header className='bg-slate-900 text-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6'>
          <div className='flex items-center gap-4'>
            <span className='text-lg font-semibold'>Product Sales Dashboard</span>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='sm' className='text-white hover:bg-slate-800'>
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
          {/* Top Row: KPI Cards (left) + Earning Insights (right) */}
          <div className='col-span-full grid gap-6 lg:grid-cols-12'>
            {/* KPI Cards - Left Side */}
            <div className='lg:col-span-5'>
              <KPICards />
            </div>

            {/* Earning Insights - Right Side */}
            <div className='col-span-full lg:max-xl:-order-1 lg:col-span-7'>
              <EarningInsightsCard />
            </div>
          </div>

          {/* Bottom Row: User Orders, Orders, Popular Products */}
          <div className='col-span-full grid gap-6 lg:grid-cols-12'>
            {/* User Orders Card - Left */}
            <div className='lg:col-span-3'>
              <UserOrdersCard />
            </div>

            {/* Orders Card - Middle */}
            <div className='lg:col-span-4'>
              <OrdersCard />
            </div>

            {/* Popular Products - Right */}
            <div className='lg:col-span-5'>
              <PopularProductsCard />
            </div>
          </div>

          {/* Product Table - Full Width */}
          <div className='col-span-full'>
            <ProductTable />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-slate-900 text-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-sm:flex-col sm:gap-6 sm:px-6'>
          <p className='text-sm'>
            {`©${new Date().getFullYear()}`}{' '}
            <a href='#' className='text-primary hover:underline'>
              shadcn/studio
            </a>
          </p>
          <div className='flex items-center gap-4'>
            <a href='#' className='text-sm hover:underline'>
              All Products
            </a>
            <a href='#' className='text-sm hover:underline'>
              Countries
            </a>
            <a href='#' className='text-sm hover:underline'>
              License
            </a>
            <a href='#' className='text-sm hover:underline'>
              FAQ
            </a>
            <a href='#' className='text-sm hover:underline'>
              Support
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <a href='#' className='hover:text-primary'>
              <FacebookIcon className='h-4 w-4' />
            </a>
            <a href='#' className='hover:text-primary'>
              <InstagramIcon className='h-4 w-4' />
            </a>
            <a href='#' className='hover:text-primary'>
              <TwitterIcon className='h-4 w-4' />
            </a>
            <a href='#' className='hover:text-primary'>
              <GithubIcon className='h-4 w-4' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardShell
