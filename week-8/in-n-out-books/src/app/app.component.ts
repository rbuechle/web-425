  /*
============================================
; Title: Server Side Communications
; Author:  Peter Itskovich
; Date: October 31, 2020
; Modified By: Becca Buechle
; Description: Assignment 8.2 – Server Side Communications
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books"
  }

}
