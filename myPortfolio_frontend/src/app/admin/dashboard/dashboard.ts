import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface StatCard {
  label: string;
  value: string;
  sub: string;
  color: string;
}

interface QuickLink {
  label: string;
  route: string;
  desc: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [RouterLink],
})
export class Dashboard {
  stats: StatCard[] = [
    { label: 'Projects',     value: '3',     sub: 'Deployed',          color: 'from-indigo-500 to-indigo-700'  },
    { label: 'Clients',      value: '2+',    sub: 'Active',            color: 'from-cyan-500 to-cyan-700'      },
    { label: 'Tech Skills',  value: '30+',   sub: 'Languages & Tools', color: 'from-violet-500 to-violet-700'  },
    { label: 'Experience',   value: '1+ yr', sub: 'Industry',          color: 'from-pink-500 to-pink-700'      },
  ];

  quickLinks: QuickLink[] = [
    { label: 'About',                route: '/admin/about',                desc: 'Edit bio & location'          },
    { label: 'Tech Arsenal',         route: '/admin/tech-arsenal',         desc: 'Manage skills & tools'        },
    { label: 'Featured Deployments', route: '/admin/featured-deployments', desc: 'Add / update projects'        },
    { label: 'Clients',              route: '/admin/clients',              desc: 'Manage client marquee'        },
  ];
}
