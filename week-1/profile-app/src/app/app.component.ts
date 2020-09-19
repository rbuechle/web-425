/*
============================================
; Title: Assignment 1.5
; Author:  Peter Itskovich
; Date: September 15 2020
; Modified By: Becca Buechle
; Description: component
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
