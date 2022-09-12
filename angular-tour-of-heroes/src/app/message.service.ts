import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
  remove() {
    this.messages.pop();
  }
  clear() {
    this.messages = [];
  }
}