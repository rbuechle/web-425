 /*
============================================
; Title:  6.3 Layouts
; Author:  Peter Itskovich
; Date: October 19, 2020
; Modified By: Becca Buechle
; Description: Assignment 6.3 – Layouts
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment  7.3 - GPA Calculator'
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
