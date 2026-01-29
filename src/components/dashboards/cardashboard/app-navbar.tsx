'use client'

import { useState } from 'react'
import { Activity, Bell, Languages, Search, BarChart3, FileText, TrendingUp, LayoutDashboard } from "lucide-react"

import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import ProfileDropdown from "@/components/dashboards/productsales/dropdown-profile"

export function AppNavbar() {
  const [language, setLanguage] = useState('english')
  const [insight, setInsight] = useState('overview')

  return (
    <header className="bg-card sticky top-0 z-50 flex items-center justify-between gap-6 border-b px-4 py-2 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-4 flex-1">
          <SidebarTrigger className="md:hidden" />
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Type to search..."
              className="w-full appearance-none bg-transparent pl-8 shadow-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-9 bg-background shadow-xs dark:bg-input/30 dark:border-input">
                  <Languages className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-50">
                <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                  <DropdownMenuRadioItem
                    value='english'
                    className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden'
                  >
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value='german'
                    className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden'
                  >
                    Deutsch
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value='spanish'
                    className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden'
                  >
                    Española
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value='portuguese'
                    className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden'
                  >
                    Português
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value='korean'
                    className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground pl-2 text-base [&>span]:hidden'
                  >
                    한국인
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-9 bg-background shadow-xs dark:bg-input/30 dark:border-input">
                  <Activity className="h-4 w-4" />
                  <span className="sr-only">Activity</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Insights</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className="px-3 py-2.5 cursor-pointer"
                    onClick={() => setInsight('overview')}
                  >
                    <LayoutDashboard className="mr-3 h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium">Overview</span>
                      <span className="text-xs text-muted-foreground">Dashboard summary</span>
                    </div>
                    {insight === 'overview' && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="px-3 py-2.5 cursor-pointer"
                    onClick={() => setInsight('analytics')}
                  >
                    <BarChart3 className="mr-3 h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium">Analytics</span>
                      <span className="text-xs text-muted-foreground">Data analysis</span>
                    </div>
                    {insight === 'analytics' && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="px-3 py-2.5 cursor-pointer"
                    onClick={() => setInsight('reports')}
                  >
                    <FileText className="mr-3 h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium">Reports</span>
                      <span className="text-xs text-muted-foreground">Generated reports</span>
                    </div>
                    {insight === 'reports' && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="px-3 py-2.5 cursor-pointer"
                    onClick={() => setInsight('performance')}
                  >
                    <TrendingUp className="mr-3 h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium">Performance</span>
                      <span className="text-xs text-muted-foreground">Metrics & KPIs</span>
                    </div>
                    {insight === 'performance' && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative size-9 bg-background shadow-xs dark:bg-input/30 dark:border-input"
                >
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="px-4 py-2.5">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">New order received</span>
                      <span className="text-xs text-muted-foreground">2 minutes ago</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2.5">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Vehicle status updated</span>
                      <span className="text-xs text-muted-foreground">15 minutes ago</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2.5">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium">System maintenance scheduled</span>
                      <span className="text-xs text-muted-foreground">1 hour ago</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-4 py-2.5 text-center justify-center">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ProfileDropdown
            trigger={
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 shrink-0 rounded-md p-0 overflow-hidden hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              >
                <Avatar className="h-9 w-9 rounded-md">
                  <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="@jorjishasan" className="object-cover" />
                  <AvatarFallback className="rounded-md">JH</AvatarFallback>
                </Avatar>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}
