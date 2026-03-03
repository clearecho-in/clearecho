import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landingPage.html',
  styleUrls: ['./landingPage.css', './landingPage.media.css'],
  imports: [CommonModule],
})
export class LandingPageComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
