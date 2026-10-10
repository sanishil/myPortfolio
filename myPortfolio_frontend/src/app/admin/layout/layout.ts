import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemeService } from '../theme.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class Layout {
  router = inject(Router);
  themeService = inject(ThemeService);
  sidebarOpen = signal(true);
  mobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Dashboard',            icon: 'grid',         route: '/admin/dashboard'            },
    { label: 'About',                icon: 'user',         route: '/admin/about'                },
    { label: 'Tech Arsenal',         icon: 'cpu',          route: '/admin/tech-arsenal',         badge: '41' },
    { label: 'Featured Deployments', icon: 'rocket',       route: '/admin/featured-deployments', badge: '3'  },
    { label: 'Clients',              icon: 'briefcase',    route: '/admin/clients',              badge: '2'  },
  ];

  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
