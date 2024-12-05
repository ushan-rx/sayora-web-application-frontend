'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavWithSubMenu({
  menuItems,
  activeNav,
  setActiveNavName,
}: {
  menuItems: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      name: string;
      url: string;
    }[];
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
    <SidebarGroup>
      <SidebarMenu>
        {menuItems.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className='group/collapsible'
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem
                      key={subItem.name}
                      onClick={() => updateActiveNav(subItem.name)}
                    >
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          subItem.name.toLowerCase() ===
                          activeNav?.toLowerCase()
                        }
                      >
                        <Link href={subItem.url}>
                          <span>{subItem.name}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
