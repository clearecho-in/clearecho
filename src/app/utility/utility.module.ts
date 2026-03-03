import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, LoaderComponent],
  exports: [LoaderComponent],
})
export class UtilityModule {}
