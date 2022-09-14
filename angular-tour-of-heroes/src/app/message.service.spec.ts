import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
    service.messages = ["message1", "message2", "message3"]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add message to messages', () => {
    service.add("new message");
    expect(service.messages.indexOf("new message") != -1).toBeTruthy();
  });
  it('should remove latest message', () => {
    const latest_message = service.messages[service.messages.length -1]
    service.remove();
    expect(service.messages.indexOf("latest_message") == -1).toBeTruthy();
  });
  it('should clear all messages', () => {
    service.clear();
    expect(service.messages.length == 0).toBeTruthy();
  });

});
