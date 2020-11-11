import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../service/items.service';
import { Item } from '../../../models/item'


@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {

  itemsList: Item[] = []

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsList = this.itemsService.getItems()
  }

}


