import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { LandingPageComponent } from '../landingPage/landingPage';
import { WorkingComponent } from '../working/working';
import { FaqsComponent } from "../faqs/faqs";
import { ExperienceComponent } from "../experience/experience";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LandingPageComponent, WorkingComponent, FaqsComponent, ExperienceComponent],
  templateUrl: './home.html',
})
export class HomeComponent {}
