import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landingPage.html',
  styleUrls: ['./landingPage.css', './landingPage.media.css'],
  imports: [CommonModule],
})
export class LandingPageComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    console.log('LandingPage Init');
    setTimeout(() => {
      console.log('Timeout triggered');
      this.isLoading = false;
    }, 3000);
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
