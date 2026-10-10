import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Skill {
  id: number;
  name: string;
  category: string;
}

@Component({
  selector: 'app-tech-arsenal',
  templateUrl: './tech-arsenal.html',
  styleUrl: './tech-arsenal.css',
  imports: [FormsModule],
})
export class TechArsenal {
  categories = ['Languages', 'Frameworks', 'Frontend', 'Backend', 'Database', 'Tools', 'Core Concepts', 'Deployment'];
  saved = signal(false);
  nextId = 100;

  newSkill = { name: '', category: 'Languages' };

  skills: Skill[] = [
    // Languages
    { id: 1, name: 'PHP',    category: 'Languages' },
    { id: 2, name: 'Java',   category: 'Languages' },
    { id: 3, name: 'Python', category: 'Languages' },
    { id: 4, name: 'C++',    category: 'Languages' },
    { id: 5, name: 'Dart',   category: 'Languages' },
    // Frameworks
    { id: 6,  name: 'Laravel',     category: 'Frameworks' },
    { id: 7,  name: 'Spring Boot', category: 'Frameworks' },
    { id: 8,  name: 'Angular',     category: 'Frameworks' },
    { id: 9,  name: 'Flutter',     category: 'Frameworks' },
    // Frontend
    { id: 10, name: 'HTML5',       category: 'Frontend' },
    { id: 11, name: 'CSS3',        category: 'Frontend' },
    { id: 12, name: 'Tailwind CSS',category: 'Frontend' },
    { id: 13, name: 'Bootstrap',   category: 'Frontend' },
    // Backend
    { id: 14, name: 'JWT',             category: 'Backend' },
    { id: 15, name: 'REST APIs',       category: 'Backend' },
    { id: 16, name: 'Token Auth',      category: 'Backend' },
    { id: 17, name: 'OTP Auth',        category: 'Backend' },
    { id: 18, name: 'Session Mgmt',    category: 'Backend' },
    { id: 19, name: 'API Integration', category: 'Backend' },
    // Database
    { id: 20, name: 'MySQL',              category: 'Database' },
    { id: 21, name: 'Query Optimization', category: 'Database' },
    { id: 22, name: 'DB Design',          category: 'Database' },
    { id: 23, name: 'Joins',              category: 'Database' },
    // Tools
    { id: 24, name: 'Git',      category: 'Tools' },
    { id: 25, name: 'GitLab',   category: 'Tools' },
    { id: 26, name: 'GitHub',   category: 'Tools' },
    { id: 27, name: 'Docker',   category: 'Tools' },
    { id: 28, name: 'VS Code',  category: 'Tools' },
    { id: 29, name: 'Postman',  category: 'Tools' },
    { id: 30, name: 'XAMPP',    category: 'Tools' },
    // Core Concepts
    { id: 31, name: 'OOP',            category: 'Core Concepts' },
    { id: 32, name: 'Data Structures',category: 'Core Concepts' },
    { id: 33, name: 'Algorithms',     category: 'Core Concepts' },
    { id: 34, name: 'DBMS',           category: 'Core Concepts' },
    { id: 35, name: 'REST',           category: 'Core Concepts' },
    { id: 36, name: 'CRUD',           category: 'Core Concepts' },
    { id: 37, name: 'Debugging',      category: 'Core Concepts' },
    { id: 38, name: 'SDLC',           category: 'Core Concepts' },
    // Deployment
    { id: 39, name: 'Apache',     category: 'Deployment' },
    { id: 40, name: 'Linux',      category: 'Deployment' },
    { id: 41, name: 'Env Config', category: 'Deployment' },
  ];

  byCategory(cat: string) {
    return this.skills.filter((s) => s.category === cat);
  }

  addSkill() {
    const name = this.newSkill.name.trim();
    if (!name) return;
    this.skills.push({ id: this.nextId++, name, category: this.newSkill.category });
    this.newSkill.name = '';
  }

  removeSkill(id: number) {
    this.skills = this.skills.filter((s) => s.id !== id);
  }

  save() {
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }
}
