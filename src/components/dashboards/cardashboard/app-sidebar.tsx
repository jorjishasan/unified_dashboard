import {
  Archive,
  Bell,
  Box,
  CreditCard,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Map,
  MapPinned,
  Settings,
  Ship,
  ShoppingCart,
  Truck,
  User,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"

const data = {
  pages: [
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
      icon: Map,
    },
    {
      name: "Warehouse",
      url: "#",
      icon: Archive,
    },
    {
      name: "Order",
      url: "#",
      icon: ShoppingCart,
    },
  ],
  settings: [
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
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-r">
      <SidebarHeader className="border-b h-14">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Truck className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate text-xl font-semibold">Logistics</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-4 py-4 border-b">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col items-start gap-2 rounded-md border border-dashed p-2">
              <div className="text-sm">Deliveries</div>
              <div className="text-lg font-semibold text-orange-500">25.9k</div>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-md border border-dashed p-2">
              <div className="text-sm">On the way</div>
              <div className="text-lg font-semibold text-teal-500">4.6k</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm mb-2.5">Delivery Process</div>
            <Progress value={30} className="h-2 bg-primary/20 [&>div]:bg-orange-500 mb-1" />
            <div className="text-sm text-muted-foreground">Reached 30% from target</div>
          </div>
        </div>
        <SidebarGroup className="px-4">
          <SidebarGroupLabel className="text-foreground/70 text-sm mb-2 px-0">Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="grid grid-cols-2 gap-4">
              {data.pages.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="hover:bg-primary/5 flex flex-col items-center gap-2 rounded-md border px-2 py-4 h-auto">
                    <a href={item.url}>
                      <item.icon className="size-7" />
                      <span className="text-sm">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="px-4">
          <SidebarGroupLabel className="text-foreground/70 text-sm mb-4 px-0">Settings & Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-1">
              {data.settings.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="flex items-center gap-2">
                    <a href={item.url}>
                      <item.icon className="size-4" />
                      <span className="text-sm">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
