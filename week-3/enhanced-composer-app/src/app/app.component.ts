/*
============================================
; Title: about
; Author:  Peter Itskovich
; Date: September 29 2020
; Modified By: Becca Buechle
; Description: Assignment 3.2 - Passing Data to Routes, Part 1
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
