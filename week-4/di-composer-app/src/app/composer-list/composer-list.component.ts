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

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
   this.composers = composerService.getComposers();
  }
  ngOnInit(): void {
  }

}
