import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrls: ['./faqs.css', './faqs.media.css'],
})
export class FaqsComponent {
  openIndex: number | null = null;

  faqs = [
    {
      question: 'Who handles the content creation?',
      answer:
        'You provide the core narrative or message you want to spread. Our platform ensures it is formatted and optimized for the target channels, but the brand voice remains entirely yours.',
    },
    {
      question: 'Are the engagement metrics real?',
      answer:
        'Absolutely. We provide real-time tracking of organic reach, clicks, and interactions. Every "Echo" is measurable through your dashboard with live data links.',
    },
    {
      question: 'How quickly does my content go live?',
      answer:
        'Once you submit your narrative and target, most campaigns begin appearing across our network within minutes. You can track the progress of live links directly from your dashboard.',
    },
    {
      question: 'What makes ClearEcho different from other agencies?',
      answer:
        'We focus on measurable, stress-free growth. No vanity metrics — just real results backed by expert strategists who are accountable to your outcomes.',
    },
    {
      question: 'Do I need my own marketing accounts?',
      answer:
        "No. ClearEcho utilizes our own network of high-authority profiles and established channels to amplify your message. You don't need to manage or provide your own social media or platform-specific accounts.",
    },
  ];

  toggleFAQ(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
