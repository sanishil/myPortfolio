import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubFrontend: string;
  githubBackend: string;
  tags: string;
}

@Component({
  selector: 'app-featured-deployments',
  templateUrl: './featured-deployments.html',
  styleUrl: './featured-deployments.css',
  imports: [FormsModule],
})
export class FeaturedDeployments {
  saved = signal(false);
  editing = signal<number | null>(null);
  nextId = 10;

  projects: Project[] = [
    {
      id: 1,
      title: 'Universal Billing System',
      description:
        'A smart billing solution that allows users to generate bills, manage customer details, and process payments seamlessly. Automatically generates PDF invoices with email and SMS notifications.',
      image: 'assets/unibilling.png',
      liveUrl: 'https://unibilling.netlify.app/login',
      githubFrontend: 'https://github.com/sanishil/universal-billing-system_frontend',
      githubBackend: 'https://github.com/sanishil/universal-billing-system_backend',
      tags: 'Angular, Spring Boot, Tailwind CSS, PostgreSQL, REST APIs',
    },
    {
      id: 2,
      title: 'Smart Front Page Generator for TCEA',
      description:
        'A fully automated solution where students fill out details once, then use their Student ID to instantly regenerate professional cover pages anytime, anywhere.',
      image: 'assets/tcea.png',
      liveUrl: 'https://myassignment.infinityfreeapp.com/',
      githubFrontend: 'https://github.com/sanishil/tcea-assignment-front-page-generator',
      githubBackend: '',
      tags: 'Angular, PHP, Bootstrap, MySQL, XAMPP',
    },
    {
      id: 3,
      title: 'Web Traffic Simulation for Performance Testing',
      description: 'Simulates web traffic to benchmark and test web application performance under load.',
      image: '',
      liveUrl: '',
      githubFrontend: '',
      githubBackend: '',
      tags: '',
    },
  ];

  draft: Project = this.emptyProject();

  emptyProject(): Project {
    return { id: 0, title: '', description: '', image: '', liveUrl: '', githubFrontend: '', githubBackend: '', tags: '' };
  }

  startEdit(p: Project) {
    this.draft = { ...p };
    this.editing.set(p.id);
  }

  startNew() {
    this.draft = { ...this.emptyProject(), id: this.nextId++ };
    this.editing.set(this.draft.id);
    this.projects.push({ ...this.draft });
  }

  saveEdit() {
    const idx = this.projects.findIndex((p) => p.id === this.draft.id);
    if (idx !== -1) this.projects[idx] = { ...this.draft };
    this.editing.set(null);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }

  cancelEdit() {
    // If it was a new unsaved project, remove it
    const idx = this.projects.findIndex((p) => p.id === this.draft.id);
    if (idx !== -1 && !this.draft.title) this.projects.splice(idx, 1);
    this.editing.set(null);
  }

  deleteProject(id: number) {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
