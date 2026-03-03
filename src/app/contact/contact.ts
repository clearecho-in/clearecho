import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../utility/utility.module';
import { DialogService } from '../utility/dialog/dialog.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, UtilityModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css', './contact.media.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private dialog: DialogService,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: [''],
      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.dialog.show('Thank you! Your message has been sent successfully.', 'success');
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        this.isSubmitting = false;
      },
    });
  }
}
