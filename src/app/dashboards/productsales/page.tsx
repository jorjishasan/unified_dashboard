import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import EarningInsightsCard from '@/components/dashboards/productsales/widget-earning-insights'
import KPICards from '@/components/dashboards/productsales/kpi-cards'
import OrdersCard from '@/components/dashboards/productsales/widget-orders'
import PopularProductsCard from '@/components/dashboards/productsales/widget-popular-products'
import ProductTable from '@/components/dashboards/productsales/product-table'
import UserOrdersCard from '@/components/dashboards/productsales/widget-user-orders'
import { AppSidebar } from '@/components/dashboards/productsales/app-sidebar'
import { AppNavbar } from '@/components/dashboards/productsales/app-navbar'

const ProductSalesDashboard = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        {/* Main Content */}
        <main className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='mx-auto w-full max-w-7xl py-6'>
            <div data-slot='card-content' className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-6'>
              {/* KPI Cards Container */}
              <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:col-span-2'>
                <KPICards />
              </div>

              {/* Earning Insights Card */}
              <div className='col-span-full lg:max-xl:-order-1 xl:col-span-4'>
                <EarningInsightsCard />
              </div>

              {/* User Orders Card */}
              <UserOrdersCard />

              {/* Orders Card */}
              <OrdersCard />

              {/* Popular Products */}
              <PopularProductsCard />

              {/* Product Table - Full Width */}
              <div className='col-span-full'>
                <ProductTable />
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default ProductSalesDashboard
