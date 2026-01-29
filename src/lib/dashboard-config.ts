export interface DashboardConfig {
  id: string
  title: string
  description: string
  route: string
  color: string
  status: 'active' | 'development' | 'planned'
}

export const dashboards: DashboardConfig[] = [
  {
    id: 'productsales',
    title: 'Product Sales',
    description: 'Monitor product sales performance, inventory, and revenue analytics',
    route: '/dashboards/productsales',
    color: 'slate',
    status: 'active'
  },
  {
    id: 'vehiclesales',
    title: 'Vehicle Sales',
    description: 'Track vehicle inventory, sales metrics, and customer analytics',
    route: '/dashboards/vehiclesales',
    color: 'blue',
    status: 'development'
  },
  {
    id: 'socialanalytics',
    title: 'Social Analytics',
    description: 'Monitor social media performance, engagement, and campaign metrics',
    route: '/dashboards/socialanalytics',
    color: 'violet',
    status: 'development'
  }
]

export const getActiveDashboards = () => dashboards.filter(d => d.status === 'active')
export const getAllDashboards = () => dashboards
export const getDashboardById = (id: string) => dashboards.find(d => d.id === id)