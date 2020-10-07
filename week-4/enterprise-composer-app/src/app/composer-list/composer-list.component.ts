/*
============================================
; Title: about
; Author:  Peter Itskovich
; Date: September 22 2020
; Modified By: Becca Buechle
; Description: Assignment 2.4 Routing in Action
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  filterComposers(name: string){
    this.composers=this.composerService.filterComposers(name);
  }

  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val=>this.filterComposers(val));

  }
  ngOnInit(): void {
  }

}
