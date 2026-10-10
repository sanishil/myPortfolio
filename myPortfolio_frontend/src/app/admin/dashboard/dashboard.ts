import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface StatCard {
  label: string;
  value: string;
  sub: string;
  icon: string;
  trend: string;
}

interface QuickLink {
  label: string;
  route: string;
  desc: string;
  icon: string;
  badge: string;
}

interface RecentDeployment {
  title: string;
  tech: string;
  status: string;
  liveUrl: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [RouterLink],
})
export class Dashboard {
  stats: StatCard[] = [
    {
      label: 'Deployments',
      value: '3',
      sub: 'Production Projects',
      icon: 'rocket',
      trend: '100% Online',
    },
    {
      label: 'Tech Arsenal',
      value: '41',
      sub: '8 Skill Categories',
      icon: 'cpu',
      trend: 'Full Stack',
    },
    {
      label: 'Featured Clients',
      value: '2',
      sub: 'Enterprise & Education',
      icon: 'briefcase',
      trend: 'Active',
    },
    {
      label: 'Experience',
      value: '1+ Yr',
      sub: 'Associate SDE',
      icon: 'award',
      trend: 'Open to Work',
    },
  ];

  quickLinks: QuickLink[] = [
    {
      label: 'About Section',
      route: '/admin/about',
      desc: 'Bio, contact links, availability status',
      icon: 'user',
      badge: 'Profile',
    },
    {
      label: 'Tech Arsenal',
      route: '/admin/tech-arsenal',
      desc: 'Languages, frameworks & engineering tools',
      icon: 'cpu',
      badge: '41 Skills',
    },
    {
      label: 'Featured Deployments',
      route: '/admin/featured-deployments',
      desc: 'Portfolio live projects, repos & tags',
      icon: 'rocket',
      badge: '3 Live',
    },
    {
      label: 'Client Marquee',
      route: '/admin/clients',
      desc: 'Partner logos, brand links & categories',
      icon: 'briefcase',
      badge: 'Partners',
    },
  ];

  recentProjects: RecentDeployment[] = [
    {
      title: 'Universal Billing System',
      tech: 'Angular • Spring Boot • PostgreSQL',
      status: 'Live Deployed',
      liveUrl: 'https://unibilling.netlify.app/login',
    },
    {
      title: 'Smart Front Page Generator for TCEA',
      tech: 'Angular • PHP • Bootstrap • MySQL',
      status: 'Live Deployed',
      liveUrl: 'https://myassignment.infinityfreeapp.com/',
    },
    {
      title: 'Web Traffic Simulation for Performance Testing',
      tech: 'Full-Stack Performance Suite',
      status: 'Active',
      liveUrl: '',
    },
  ];
}
