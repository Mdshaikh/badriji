import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',
    name:"Bablu",
    Cost:"$70",
    Currency:"USD",
    PaymentBy:"RAZZ",
    PaymentFor:"Order Payment",
    Description:"ndhfhff",
    Date:"ddhdhdd"

  }, {
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',
    name:"Bablu",
    Cost:"$70",
    Currency:"USD",
    PaymentBy:"RAZZ",
    PaymentFor:"Order Payment",
    Description:"ndhfhff",
    Date:"ddhdhdd"
  }, {
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
    name:"Bablu",
    Cost:"$70",
    Currency:"USD",
    PaymentBy:"RAZZ",
    PaymentFor:"Order Payment",
    Description:"ndhfhff",
    Date:"ddhdhdd"
  }, ];
}
