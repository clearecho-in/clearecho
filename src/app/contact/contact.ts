import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css', './contact.media.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
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

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        alert('Message sent successfully');
        this.contactForm.reset();
      },
      error: () => {
        alert('Something went wrong!');
      },
    });
  }
}
