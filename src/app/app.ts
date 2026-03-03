import { Component, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer';
import { UtilityModule } from './utility/utility.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, UtilityModule, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isLoading = signal(true);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading.set(false);
        }, 400);
      }
    });
  }
}
