import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Client {
  id: number;
  name: string;
  url: string;
  logo: string;       // path or URL — empty = use icon fallback
  category: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.html',
  styleUrl: './clients.css',
  imports: [FormsModule],
})
export class Clients {
  saved = signal(false);
  nextId = 10;

  clients: Client[] = [
    { id: 1, name: 'TCEA',             url: 'https://myassignment.infinityfreeapp.com/', logo: 'assets/tcea.png',       category: 'Education' },
    { id: 2, name: 'Universal Billing',url: 'https://unibilling.netlify.app/login',      logo: 'assets/unibilling.png', category: 'FinTech'   },
  ];

  newClient: Client = this.empty();

  empty(): Client {
    return { id: 0, name: '', url: '', logo: '', category: '' };
  }

  addClient() {
    if (!this.newClient.name.trim()) return;
    this.clients.push({ ...this.newClient, id: this.nextId++ });
    this.newClient = this.empty();
  }

  removeClient(id: number) {
    this.clients = this.clients.filter((c) => c.id !== id);
  }

  save() {
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  }
}
