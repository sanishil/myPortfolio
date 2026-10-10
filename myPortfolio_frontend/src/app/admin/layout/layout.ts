import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class Layout {
  sidebarOpen = signal(true);

  navItems: NavItem[] = [
    { label: 'Dashboard',            icon: 'grid',         route: '/admin/dashboard'             },
    { label: 'About',                icon: 'user',         route: '/admin/about'                 },
    { label: 'Tech Arsenal',         icon: 'cpu',          route: '/admin/tech-arsenal'          },
    { label: 'Featured Deployments', icon: 'rocket',       route: '/admin/featured-deployments'  },
    { label: 'Clients',              icon: 'briefcase',    route: '/admin/clients'               },
  ];

  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
}
