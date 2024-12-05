'use client';
import { useEffect, useState } from 'react';

import { NavWithSubMenu } from '@/components/sideBar/nav-with-sub-menu';
import { NavMain } from '@/components/sideBar/nav-menu';
import { NavUser } from '@/components/sideBar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { data } from './navData/doctorNavData';
import { usePathname } from 'next/navigation';

//dummy user data
const user = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '',
};
/**
 * sidebar has two type of navitems ---> single nav items , nav items with sub menu items
 * <NavMain/> handles single nav items
 * <NavWithSubMenu/> handles nav items with sub menu items
 */
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  /**
   * get pageName when sidebar is rendered first time.(replace '-' in path with ' ' when the name has more than 1 words)
   * set the pageName to find active navigation name in the sidebar.
   */
  const pageName = usePathname().split('/')[2]?.replaceAll('-', ' ');
  const [activeNavName, setActiveNavName] = useState(
    pageName !== undefined ? pageName : 'Overview'
  );
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='ml-2 flex flex-row items-center gap-2'>
          <span>
            <Image
              src={'/images/sayora-logo.png'}
              width={50}
              height={50}
              priority
              alt='sayora logo'
            />
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className='my-2'></div>
        <NavMain
          menuItems={data.navMain}
          activeNav={activeNavName}
          setActiveNavName={setActiveNavName}
        />
        <NavWithSubMenu
          menuItems={data.navWithSub}
          activeNav={activeNavName}
          setActiveNavName={setActiveNavName}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail className='border-ring'/>
    </Sidebar>
  );
}
