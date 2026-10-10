import { Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';

export const routes: Routes = [
  {
    path: 'admin',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./admin/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./admin/about/about').then((m) => m.About),
      },
      {
        path: 'tech-arsenal',
        loadComponent: () =>
          import('./admin/tech-arsenal/tech-arsenal').then((m) => m.TechArsenal),
      },
      {
        path: 'featured-deployments',
        loadComponent: () =>
          import('./admin/featured-deployments/featured-deployments').then(
            (m) => m.FeaturedDeployments
          ),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./admin/clients/clients').then((m) => m.Clients),
      },
    ],
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin' },
];
