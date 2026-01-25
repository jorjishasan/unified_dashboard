'use client'

import * as React from 'react'
import {
  LayoutDashboard,
  LineChart,
  Users,
  History,
  Hash,
  Repeat,
  Clock,
  ClipboardList,
  Crown,
  Monitor,
  CalendarDays,
  Undo2,
  Settings,
  UserCog
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: LayoutDashboard,
      badge: '5'
    }
  ],
  pages: [
    {
      title: 'Content Performance',
      url: '#',
      icon: LineChart
    },
    {
      title: 'Audience Insight',
      url: '#',
      icon: Users
    },
    {
      title: 'Engagement Metrics',
      url: '#',
      icon: History
    },
    {
      title: 'Hashtag Performance',
      url: '#',
      icon: Hash,
      badge: '3'
    },
    {
      title: 'Competitor Analysis',
      url: '#',
      icon: Repeat
    },
    {
      title: 'Campaign Tracking',
      url: '#',
      icon: Clock
    },
    {
      title: 'Sentiment Tracking',
      url: '#',
      icon: ClipboardList
    },
    {
      title: 'Influencer',
      url: '#',
      icon: Crown
    }
  ],
  supportingFeatures: [
    {
      title: 'Real Time Monitoring',
      url: '#',
      icon: Monitor
    },
    {
      title: 'Schedule Post & Calendar',
      url: '#',
      icon: CalendarDays
    },
    {
      title: 'Report & Export',
      url: '#',
      icon: Undo2
    },
    {
      title: 'Settings & Integrations',
      url: '#',
      icon: Settings
    },
    {
      title: 'User Management',
      url: '#',
      icon: UserCog
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
              {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.pages.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.supportingFeatures.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
