import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { OrdersService } from './orders.service';
import { Message } from './message';
const SMALL_WIDTH_BREAKPOINT = 960;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  public config: PerfectScrollbarConfigInterface = {};
  displayMode = 'default';
  multi = false;
  hideToggle = true;

  messages: Message[];
  selectedMessage: Message;
  sidePanelOpened = true;
  constructor(private ordersService: OrdersService) { }
  
  isOver(): boolean {
    return this.mediaMatcher.matches;
  }
  
  getMessages(): void {
    this.ordersService.getMessages().then(messages => this.messages = messages);
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
