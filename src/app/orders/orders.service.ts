import { Injectable } from '@angular/core';

import { Message } from './message';
import { MESSAGES } from './mock-orders';

@Injectable()
export class OrdersService {
  getMessages(): Promise<Message[]> {
    return Promise.resolve(MESSAGES);
  }
}
