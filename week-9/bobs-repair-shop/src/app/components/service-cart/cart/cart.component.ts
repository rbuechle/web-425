import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { MessengerService } from '../../../services/messenger.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []
  cartTotal = 0
  invoice = "";

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((ordersData: Item[]) => {
      this.clearCart()

      ordersData.forEach(item =>{
        this.cartItems.push({
          id: item.id,
          name: item.name,
          price: item.price
        })
      })

      console.log(ordersData)

      this.cartItems.forEach(item =>{
        this.cartTotal += (item.price)
      })

      this.invoice = "INVOICE: \n";
      this.cartItems.forEach(item =>{
        this.invoice += item.name;
        this.invoice += " $";
        this.invoice += item.price;
        this.invoice += '\n';
      })

      this.invoice += "\n ------------------------- \n Total: $"
      this.invoice += this.cartTotal.toFixed(2);
    })
  }


  clearCart() {
    this.cartItems = [];
    this.cartTotal = 0;
  }

  invoiceAlert() {

    Swal.fire(this.invoice)
  }
}
