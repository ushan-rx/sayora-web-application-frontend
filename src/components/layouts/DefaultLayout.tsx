import { AppSidebar } from '@/components/sideBar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import { ReactNode } from 'react';
import { ThemeModeToggle } from '../ThemeModeToggle';

export default function DefaultLayout({
  children,
}: {
  children: ReactNode | undefined;
}) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='dark:bg-background'>
        <header className='flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-accent'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='mr-4'><ThemeModeToggle /></div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          {/* <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='aspect-video rounded-xl bg-slate-100/100 dark:bg-slate-800/50' />
            <div className='aspect-video rounded-xl bg-slate-100/50 dark:bg-slate-800/50' />
            <div className='aspect-video rounded-xl bg-slate-100/50 dark:bg-slate-800/50' />
          </div>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-slate-100/50 md:min-h-min dark:bg-slate-800/50' /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
