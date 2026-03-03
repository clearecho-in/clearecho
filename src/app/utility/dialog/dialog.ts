import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css'],
})
export class DialogComponent {
  constructor(public dialog: DialogService) {}
}
