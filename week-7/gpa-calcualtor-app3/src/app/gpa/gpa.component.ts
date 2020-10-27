 /*
============================================
; Title:  6.4 – Input Properties
; Author:  Peter Itskovich
; Date: October 19, 2020
; Modified By: Becca Buechle
; Description: Assignment 6.4 – Input Properties
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
