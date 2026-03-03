import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { LandingPageComponent } from '../landingPage/landingPage';
import { WorkingComponent } from '../working/working';
import { FaqsComponent } from "../faqs/faqs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LandingPageComponent, WorkingComponent, FaqsComponent],
  templateUrl: './home.html',
})
export class HomeComponent {}
