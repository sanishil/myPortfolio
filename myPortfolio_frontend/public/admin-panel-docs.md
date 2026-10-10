# myPortfolio Admin Panel — Project Documentation

## Overview

A fully client-side Angular 22 admin panel for managing portfolio content (About, Tech Arsenal, Featured Deployments, and Clients). Built with Angular standalone components, lazy-loaded routing, and Tailwind CSS v4.

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | Angular 22 (standalone components)  |
| Styling    | Tailwind CSS v4 (via PostCSS)       |
| Routing    | Angular Router (lazy-loaded)        |
| Forms      | Angular FormsModule (two-way)       |
| Rendering  | SSR-ready (@angular/ssr + Express)  |
| Build tool | @angular/build (Vite-based)         |

---

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout/               ← Shell: sidebar + topbar + <router-outlet>
│   │   │   ├── layout.ts
│   │   │   ├── layout.html
│   │   │   └── layout.css
│   │   ├── dashboard/            ← Landing page with stats & quick links
│   │   │   ├── dashboard.ts
│   │   │   └── dashboard.html
│   │   ├── about/                ← Edit bio, location, social links
│   │   │   ├── about.ts
│   │   │   └── about.html
│   │   ├── tech-arsenal/         ← Add/remove skills by category
│   │   │   ├── tech-arsenal.ts
│   │   │   └── tech-arsenal.html
│   │   ├── featured-deployments/ ← CRUD for portfolio projects
│   │   │   ├── featured-deployments.ts
│   │   │   └── featured-deployments.html
│   │   └── clients/              ← Manage marquee clients (table + add form)
│   │       ├── clients.ts
│   │       └── clients.html
│   ├── app.ts                    ← Root component (router-outlet only)
│   ├── app.routes.ts             ← Route definitions (lazy-loaded)
│   ├── app.config.ts             ← Application config (provideRouter, SSR)
│   └── styles.css                ← Global styles + Tailwind import
├── index.html
├── main.ts
└── main.server.ts
public/
└── admin-panel-docs.md           ← This file
```

---

## Routes

| URL                              | Component            | Description                      |
|----------------------------------|----------------------|----------------------------------|
| `/`                              | → `/admin`           | Redirect                         |
| `/admin`                         | → `/admin/dashboard` | Redirect                         |
| `/admin/dashboard`               | Dashboard            | Stats overview + quick links     |
| `/admin/about`                   | About                | Edit bio, links, availability    |
| `/admin/tech-arsenal`            | TechArsenal          | Add / remove skills by category  |
| `/admin/featured-deployments`    | FeaturedDeployments  | CRUD for portfolio projects      |
| `/admin/clients`                 | Clients              | Manage marquee clients           |

All child routes are **lazy-loaded** via `loadComponent`.

---

## Components

### Layout (`app-layout`)
- Collapsible sidebar with icon-only mode
- Topbar with hamburger toggle and user badge
- Uses Angular `signal()` for sidebar open state
- Navigation built from a `navItems` array (easy to extend)

### Dashboard (`app-dashboard`)
- Stat cards: Projects, Clients, Tech Skills, Experience
- Quick-action cards linking to each section
- Live portfolio link banner

### About (`app-about`)
- Fields: Name, Title, Bio, Location, Timezone
- Social links: Email, GitHub, LinkedIn, CV URL
- Availability toggle (green pill switch)
- Two-way binding via `FormsModule` + `ngModel`
- "Save" button with 3-second success feedback via `signal()`

### Tech Arsenal (`app-tech-arsenal`)
- Displays skills grouped by 8 categories
- Inline "Add Skill" form with category select
- Remove individual skills with ✕ button
- Save button with feedback signal

### Featured Deployments (`app-featured-deployments`)
- List view: thumbnail, title, tags, Edit/Delete actions
- Inline edit form with all fields (title, description, image, URLs, tags)
- Add new project button
- Comma-separated tags rendered as badge pills

### Clients (`app-clients`)
- Add-client form: Name, URL, Logo path, Category
- Table view with logo preview, URL link, category badge
- Remove button per row
- Save button with feedback signal

---

## How to Run

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start
# → http://localhost:4200/admin

# Production build
npm run build
```

---

## Styling Conventions

- **Dark theme**: `bg-gray-950` body, `bg-gray-900` cards/sidebar
- **Accent**: Indigo-600 (`bg-indigo-600`) for primary actions
- **Borders**: `border-gray-800` for panels; `border-indigo-500/50` for active edit
- **Text hierarchy**: `text-white` headings → `text-gray-300` labels → `text-gray-400/500` secondary
- **Rounded**: `rounded-xl` inputs, `rounded-2xl` cards
- All components use **Tailwind utility classes only** — no custom CSS

---

## Extending the Panel

### Add a new section
1. Run `ng generate component admin/<name> --skip-tests`
2. Add a route in `app.routes.ts` under the `admin` children array
3. Add a `navItems` entry in `layout.ts` with an icon key
4. Add a matching `@case` in `layout.html` for the SVG icon

### Connect to a real API
Replace the `save()` stubs in each component with an `HttpClient` call:
```ts
// app.config.ts — add provideHttpClient()
import { provideHttpClient } from '@angular/common/http';

// component
constructor(private http: HttpClient) {}

save() {
  this.http.put('/api/about', this.form).subscribe(() => {
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
  });
}
```

---

## Notes

- All data is currently **in-memory** (component state). Refreshing the page resets to defaults.
- No authentication is implemented — add a route guard (`CanActivate`) before deploying.
- SSR is configured; ensure data fetching uses Angular's `HttpClient` (not `fetch`) for hydration compatibility.

---

*Last updated: October 2026 — Sani Shil*
