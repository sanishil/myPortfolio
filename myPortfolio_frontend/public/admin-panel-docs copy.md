# myPortfolio Admin Panel — Project Documentation

## Overview

A modern, high-performance Angular 22 admin management console for managing portfolio content (About, Tech Arsenal, Featured Deployments, and Client Marquee). Built with Angular standalone components, lazy-loaded routing, Tailwind CSS v4, and a **dual-theme engine (Pitch Black OLED & Clean Light Mode)** with zero-FOUC pre-paint script.

---

## Tech Stack

| Layer          | Technology                                                 |
|----------------|------------------------------------------------------------|
| **Framework**  | Angular 22 (standalone components, signals)               |
| **Styling**    | Tailwind CSS v4 (via PostCSS)                             |
| **Typography** | Plus Jakarta Sans & JetBrains Mono (Google Fonts)          |
| **Theming**    | Custom Dual-Theme Engine (Pitch Black / Clean Light Mode)  |
| **Routing**    | Angular Router (lazy-loaded routes)                       |
| **Forms**      | Angular FormsModule (two-way binding)                     |
| **State**      | Angular Signals (`signal`, reactive updates)               |
| **Rendering**  | SSR-ready (@angular/ssr + Express)                         |
| **Build tool** | @angular/build (Vite-based application bundler)           |

---

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── theme.service.ts          ← Theme management (dark/light, localStorage, SSR-safe)
│   │   ├── layout/                   ← Shell: responsive sidebar + topbar + <router-outlet>
│   │   │   ├── layout.ts
│   │   │   ├── layout.html
│   │   │   └── layout.css
│   │   ├── dashboard/                ← KPI stats, quick actions, profile preview
│   │   │   ├── dashboard.ts
│   │   │   └── dashboard.html
│   │   ├── about/                    ← Bio, location, professional links + Live Card
│   │   │   ├── about.ts
│   │   │   └── about.html
│   │   ├── tech-arsenal/             ← Real-time search, category filters & skill chips
│   │   │   ├── tech-arsenal.ts
│   │   │   └── tech-arsenal.html
│   │   ├── featured-deployments/     ← Project showcase cards & CRUD editor
│   │   │   ├── featured-deployments.ts
│   │   │   └── featured-deployments.html
│   │   └── clients/                  ← Partner marquee cards & add form
│   │       ├── clients.ts
│   │       └── clients.html
│   ├── app.ts                        ← Root component (<router-outlet />)
│   ├── app.routes.ts                 ← Route definitions (lazy-loaded)
│   ├── app.config.ts                 ← Application configuration (provideRouter, SSR)
│   └── styles.css                    ← Tailwind v4 import, @custom-variant dark, custom scrollbars
├── index.html                        ← Pre-paint inline theme script, Google Fonts
├── main.ts                           ← Browser entry point
├── main.server.ts                    ← SSR entry point
└── server.ts                         ← Express SSR server
public/
└── admin-panel-docs.md               ← This documentation file
```

---

## Routes

| URL                           | Component            | Description                                  |
|-------------------------------|----------------------|----------------------------------------------|
| `/`                           | → `/admin`           | Redirect                                     |
| `/admin`                      | → `/admin/dashboard` | Redirect                                     |
| `/admin/dashboard`            | Dashboard            | KPI metrics, quick actions & profile card    |
| `/admin/about`                | About                | Bio, location, social links & Live Card      |
| `/admin/tech-arsenal`         | TechArsenal          | Search, category filters & skill tags        |
| `/admin/featured-deployments` | FeaturedDeployments  | Case study showcase & project CRUD editor    |
| `/admin/clients`              | Clients              | Client marquee cards & partner creation form |

All child routes are **lazy-loaded** via `loadComponent()`.

---

## Theming & UI Architecture

### 1. Dual-Theme Engine (Dark & Light)
- **Dark Mode (Default)**: Eye-friendly, high-contrast Pitch Black OLED aesthetic (`#000000` body, `#09090b` sidebar/header, `#0e0e11` cards, `#1c1c20`/`#1f1f24` subtle borders). Avoids aggressive blue/cyan glares.
- **Light Mode**: Clean, minimalist SaaS aesthetic (`#f8fafc` slate body, `#ffffff` pure white cards and panels, `#e4e4e7` neutral borders, `#09090b` high-contrast typography).
- **Theme Switcher**: An interactive button in the topbar header with reactive Sun (☀️) and Moon (🌙) icons toggles the theme instantly.
- **Zero-FOUC (Flash-Free Refresh)**: An inline synchronous `<script>` in the `<head>` of `index.html` inspects `localStorage` (`portfolio_admin_theme`) and applies the appropriate `.light` or `.dark` class **before the browser paints the first pixel**.

### 2. Styling Tokens
- **Tailwind v4 Integration**: Uses `@custom-variant dark (&:where(.dark, .dark *));` to drive class-based dark overrides.
- **Typography**: `Plus Jakarta Sans` for clean, legible interface text; `JetBrains Mono` for IDs, code snippets, tags, and URLs.
- **Scrollbars**: Ultra-minimal 5px scrollbars styled for both light (`#d4d4d8`) and dark (`#27272a`) modes.

---

## Component Details

### Layout (`Layout`)
- **Responsive Navigation**: Collapsible sidebar with icon mode for desktop, overlay mobile drawer for small screens.
- **Brand Emblem**: Minimalist `SS` badge with online status indicator dot.
- **Navigation Items**: Route links with left accent borders, active route highlighting, and count badges (e.g. `41 Skills`, `3 Projects`).
- **Topbar**: Sidebar toggles, navigation breadcrumbs, live sync status badge, theme switcher button, public site shortcut, and administrator profile pill.

### Dashboard (`Dashboard`)
- **Key Metric KPIs**: 4 elevated cards displaying live deployments, skills, client count, and industry experience with trend badges.
- **Quick Action Grid**: Interactive shortcut cards with icon indicators, descriptions, and directional arrows.
- **Recent Deployments Widget**: Overview of live projects with direct external links.
- **Developer Profile Card**: Live status summary displaying avatar, "Available for New Roles" indicator, location, and primary tech stack.

### About (`About`)
- **Two-Column Split Layout**:
  - **Left Form**: Sectioned inputs for Identity (Name, Title, Executive Bio), Availability toggle switch, Location (City, Timezone), and Professional Links (Email, GitHub, LinkedIn, CV).
  - **Right Sticky Card**: Real-time **Live Recruiter Preview Card** that updates dynamically as the user types.
- **Save State**: Reactive button with checkmark feedback.

### Tech Arsenal (`TechArsenal`)
- **Live Search**: Instant keyword filtering across all 41+ technical skills.
- **Category Filter Pills**: Quick category tabs (`All`, `Languages`, `Frameworks`, `Frontend`, `Backend`, `Database`, `Tools`, `Core Concepts`, `Deployment`).
- **Add Skill Widget**: Compact form for entering skill name and category.
- **Categorized Cards & Tags**: Grouped cards with skill chips featuring hover-to-delete (✕) buttons.

### Featured Deployments (`FeaturedDeployments`)
- **Project Showcase**: Visual cards with preview thumbnail frames, live URL triggers, descriptions, tag chips, and repository links (Frontend & Backend).
- **CRUD Editor**: In-place editor with two-column layout for title, description, image path, live URL, GitHub repos, and comma-separated tags.
- **State Handling**: Add new project, edit existing, cancel unsaved changes, and delete.

### Clients (`Clients`)
- **Add Client Drawer**: Form with inputs for client/organization name, website URL, logo path, and industry category.
- **Client Cards Grid**: Modern responsive card grid with company logo avatar previews (initials fallback), category badges, and external site launch links.
- **Empty State**: Friendly illustration and guidance when no clients are present.

---

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# → Open: http://localhost:4200/admin

# 3. Production build (Browser + SSR bundles)
npm run build

# 4. Run SSR production server
npm run serve:ssr:myPortfolio_frontend
```

---

## State & Data Persistence

- **Theme State**: Persisted across browser sessions using `localStorage` key `portfolio_admin_theme`.
- **Form & Portfolio Content**: Currently held in reactive component memory (`signal` and class state).
- **Connecting to Backend API**: Stubs in `save()` can be wired to Angular's `HttpClient`:
  ```ts
  import { HttpClient } from '@angular/common/http';
  import { inject } from '@angular/core';

  export class About {
    private http = inject(HttpClient);
    // ...
    save() {
      this.http.put('/api/about', this.form).subscribe({
        next: () => {
          this.saved.set(true);
          setTimeout(() => this.saved.set(false), 3000);
        }
      });
    }
  }
  ```

---

*Last updated: Current Session — Sani Shil Portfolio Management Console*
