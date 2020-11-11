 /*
============================================
; Title:  Dyanamic Checkbox List
; Author:  Cory Rylan
; Modified By: Becca Buechle
; Date: Nov 06, 2020
; Description: Reactive Forms API
; Link: https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { MessengerService } from '../../../services/messenger.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  form: FormGroup;
  ordersData = [];
  selectedItems = [];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private msg: MessengerService) {
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1))
    });

    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.ordersData = orders;
      this.addCheckboxes();
    });

    // synchronous orders
    // this.ordersData = this.getOrders();
    // this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  getOrders() {
    return [
      { id: 100, name: 'Password Reset', price: 39.99},
      { id: 200, name: 'Spyware Removal', price: 99.99 },
      { id: 300, name: 'Ram Upgrade', price: 129.99 },
      { id: 400, name: 'Software Install', price: 49.99 },
      { id: 500, name: 'Tune-Up', price: 89.99 },
      { id: 600, name: 'Keyboard Cleaning', price: 44.99 },
      { id: 700, name: 'Disk Clean-up', price: 149.99 },
    ];
  }

  submit() {
    var partsPrice = Number((document.getElementById('parts') as HTMLInputElement).value);
    var laborPrice = Number((document.getElementById('labor') as HTMLInputElement).value);

    this.selectedItems = this.form.value.orders
      .map((checked, i) => checked ? this.ordersData[i] : null)
      .filter(v => v !== null);

    this.selectedItems.push({
      name: "Parts",
      price: partsPrice
    })

    this.selectedItems.push({
      name: "Labor",
      price: laborPrice
    })

    console.log(this.selectedItems);
    this.msg.sendMsg(this.selectedItems)
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
