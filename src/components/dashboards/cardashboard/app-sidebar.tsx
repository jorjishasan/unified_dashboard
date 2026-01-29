import { User, Truck, Box, MapPin, House, ShoppingCart, LockKeyhole, Bell, Settings, Ship, MapPinned } from "lucide-react"

const pages = [
  {
    name: "User Profile",
    url: "#",
    icon: User,
  },
  {
    name: "Vehicle",
    url: "#",
    icon: Truck,
  },
  {
    name: "Inventory",
    url: "#",
    icon: Box,
  },
  {
    name: "Tracking",
    url: "#",
    icon: MapPin,
  },
  {
    name: "Warehouse",
    url: "#",
    icon: House,
  },
  {
    name: "Order",
    url: "#",
    icon: ShoppingCart,
  },
]

const settings = [
  {
    name: "User Profile",
    url: "#",
    icon: User,
  },
  {
    name: "Change Password",
    url: "#",
    icon: LockKeyhole,
  },
  {
    name: "Notification Settings",
    url: "#",
    icon: Bell,
  },
  {
    name: "App Settings",
    url: "#",
    icon: Settings,
  },
  {
    name: "Create Shipment",
    url: "#",
    icon: Ship,
  },
  {
    name: "Fleet Status Overview",
    url: "#",
    icon: MapPinned,
  },
]

export function AppSidebar() {
  return (
    <div className="bg-muted sticky top-0 flex h-dvh w-72 flex-col border-r max-lg:hidden">
      <div className="px-4 py-3.5 text-lg font-semibold">Logistics</div>
      <div className="mt-5 flex flex-col px-4">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-2 rounded-md border border-gray-300 border-dashed p-2">
            <p className="text-sm">Deliveries</p>
            <p className="text-chart-1 text-lg font-semibold">25.9k</p>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-md border border-gray-300 border-dashed p-2">
            <p className="text-sm">On the way</p>
            <p className="text-chart-2 text-lg font-semibold">4.6k</p>
          </div>
        </div>
        <div className="mb-6 flex flex-col">
          <p className="mb-2.5 text-sm">Delivery Process</p>
          <div
            aria-valuemax={100}
            aria-valuemin={0}
            role="progressbar"
            data-state="indeterminate"
            data-max={100}
            data-slot="progress"
            className="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full [&>div]:bg-chart-1 mb-1"
          >
            <div
              data-state="indeterminate"
              data-max={100}
              data-slot="progress-indicator"
              className="bg-primary h-full w-full flex-1 transition-all"
              style={{ transform: "translateX(-70%)" }}
            />
          </div>
          <p className="text-sm">Reached 30% from target</p>
        </div>
      </div>
      <div className="overflow-y-auto px-4 pb-3.5">
        <div className="mb-6 flex flex-col">
          <p className="text-foreground/70 mb-2 text-sm">Pages</p>
          <div className="grid grid-cols-2 gap-4">
            {pages.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4"
              >
                <item.icon className="lucide lucide-user size-7" aria-hidden="true" />
                <p className="text-sm">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-foreground/70 mb-4 text-sm">Settings & Profile</p>
          <div className="flex flex-col gap-5">
            {settings.map((item) => (
              <a key={item.name} href={item.url} className="flex items-center gap-2">
                <item.icon className="lucide size-4" aria-hidden="true" />
                <p className="text-sm">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
