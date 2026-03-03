import { NgModule } from '@angular/core';
import { PrivacyComponent } from './privacy/privacy';
import { RefundComponent } from './refund/refund';
import { TermsOfServiceComponent } from './terms_of_service/terms_of_service';

@NgModule({
  imports: [PrivacyComponent, RefundComponent, TermsOfServiceComponent],
  exports: [PrivacyComponent, RefundComponent, TermsOfServiceComponent],
})
export class PoliciesModule {}
