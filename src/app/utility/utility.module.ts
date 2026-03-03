import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog';

@NgModule({
  imports: [CommonModule, LoaderComponent, DialogComponent],
  exports: [LoaderComponent, DialogComponent],
})
export class UtilityModule {}
