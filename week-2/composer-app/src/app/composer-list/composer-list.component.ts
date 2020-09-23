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

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("AC/DC", "Rock"),
      new Composer("Aerosmith", "Rock"),
      new Composer("Def Leppard", "Rock"),
      new Composer("Madonna", "Pop"),
      new Composer("The Scorpions", "Rock")
    ]
  }

  ngOnInit(): void {
  }

}
