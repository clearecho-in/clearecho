import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { WorkingComponent } from './working/working';
import { ContactComponent } from './contact/contact';
import { FaqsComponent } from './faqs/faqs';
import { PrivacyComponent } from './policies/privacy/privacy';
import { TermsOfServiceComponent } from './policies/terms_of_service/terms_of_service';
import { RefundComponent } from './policies/refund/refund';
import { BenefitComponent } from './benefits/benefits';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'how-it-works',
    component: WorkingComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'benefits',
    component: BenefitComponent,
  },
  {
    path: 'privacy-policies',
    component: PrivacyComponent,
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
  },
  {
    path: 'refund-policies',
    component: RefundComponent,
  },
];
