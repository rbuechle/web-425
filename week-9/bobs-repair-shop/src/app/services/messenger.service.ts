import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }


  sendMsg(ordersData) {
    console.log(ordersData)
    this.subject.next(ordersData)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}

