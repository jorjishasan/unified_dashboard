'use client'

import { Search, Languages } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

import LanguageDropdown from './dropdown-language'
import ProfileDropdown from './dropdown-profile'

export function AppNavbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem>
                <BreadcrumbPage>Free</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' className='size-9'>
            <Search className='size-5' />
          </Button>
          <LanguageDropdown
            trigger={
              <Button variant='ghost' size='icon' className='size-9'>
                <Languages className='size-5' />
              </Button>
            }
          />
          <ProfileDropdown
            trigger={
              <Button variant='ghost' size='icon' className='size-9 overflow-hidden rounded-full'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
                  alt='User'
                  className='size-full object-cover'
                />
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}
