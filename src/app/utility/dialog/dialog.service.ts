import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  isOpen = signal(false);
  message = signal('');
  type = signal<'success' | 'error'>('success');

  show(message: string, type: 'success' | 'error' = 'success') {
    this.message.set(message);
    this.type.set(type);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }
}
