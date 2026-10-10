import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AboutForm {
  name: string;
  title: string;
  bio: string;
  location: string;
  timezone: string;
  github: string;
  linkedin: string;
  cv: string;
  email: string;
  available: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  imports: [FormsModule],
})
export class About {
  saved = signal(false);

  form: AboutForm = {
    name: 'Sani Shil',
    title: 'Associate Software Development Engineer',
    bio: 'As an ASDE, I bridge the gap between complex backend logic and smooth user interfaces. I specialize in full-stack architecture, writing clean, maintainable code, and optimizing application performance.',
    location: 'Agartala, Tripura, India',
    timezone: 'IST (UTC +5:30)',
    github: 'https://github.com/sanishil',
    linkedin: 'https://www.linkedin.com/in/sanishil/',
    cv: 'https://drive.google.com/file/d/1RmA_7l5aLWJE9pKERu2o6kyiapoCjXQ5/view?usp=sharing',
    email: 'sanishil.cse@gmail.com',
    available: true,
  };

  save() {
    // TODO: wire to a real API / JSON data file
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }
}
