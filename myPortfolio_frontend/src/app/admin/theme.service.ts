import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  isDark = signal<boolean>(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('portfolio_admin_theme');
      const isDarkMode = saved === 'light' ? false : true;
      this.isDark.set(isDarkMode);
      this.applyTheme(isDarkMode);
    }
  }

  toggleTheme() {
    this.setTheme(!this.isDark());
  }

  setTheme(dark: boolean) {
    this.isDark.set(dark);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio_admin_theme', dark ? 'dark' : 'light');
      this.applyTheme(dark);
    }
  }

  private applyTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', dark ? '#000000' : '#f8fafc');
    }
  }
}
