import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

@Input() cartItem: any

  constructor() { }

  ngOnInit(): void {
  }

}
