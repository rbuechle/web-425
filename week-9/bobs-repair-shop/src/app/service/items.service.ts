import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Item[] = [
    new Item(100, "Password Reset", "Did you forget your password? We'll we can remove it for you.", 39.99, "./assets/password.jpg" ),
    new Item(200, "Spyware Removal", "Are you getting a ton of popups? We can fix that.", 99.99, "./assets/spyware.jpg"),
    new Item(300, "Ram Upgrade", "Computer running a little slow? We can add memory to give it a speed boost.", 129.99, "./assets/ram.jpg"),
    new Item(400, "Software Install", "Not sure how to install software? We can get those installed for you.", 49.99, "./assets/install.png"),
    new Item(500, "Tune-Up", "Running slow? We can give your computer a tune-up so its as good as new.", 89.99, "./assets/tuneup.jpg"),
    new Item(600, "Keyboard Cleaning", "Spill your morning coffee on your keyboard? We can get those keys cleaned out for you.", 44.99, "./assets/clean.jpg"),
    new Item(700, "Disk Clean-up", "Hard drive getting a little full? We can remove un-needed stuff.", 149.99, "./assets/cleanup.jpg"),
  ]

  constructor() { }

  getItems(): Item[] {
    return this.items
  }
}


