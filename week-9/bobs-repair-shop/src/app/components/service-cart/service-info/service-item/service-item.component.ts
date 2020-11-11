import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../../models/item';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() serviceItem: Item

  constructor() { }

  ngOnInit(): void {
  }

}
