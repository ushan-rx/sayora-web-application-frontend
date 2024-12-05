'use client';

import { type LucideIcon } from 'lucide-react';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavMain({
  menuItems,
  activeNav,
  setActiveNavName,
}: {
  menuItems: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
  activeNav: string;
  setActiveNavName: React.Dispatch<React.SetStateAction<string>>;
}) {
  /**
   * Updates the active navigation based on the clicked item name & current active name in state.
   * @param name - The name of the clicked navigation item to update.
   */
  const updateActiveNav = (name: string) => {
    const lowerCaseName = name?.toLowerCase();
    if (activeNav.toLowerCase() !== lowerCaseName) {
      setActiveNavName(name);
    }
  };
  return (
    <SidebarGroup className=''>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.name}
            onClick={() => updateActiveNav(item.name)}
          >
            <SidebarMenuButton
              asChild
              isActive={item.name.toLowerCase() === activeNav?.toLowerCase()}
            >
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
