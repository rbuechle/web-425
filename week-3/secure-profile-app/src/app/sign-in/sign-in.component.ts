 /*
=======================================
/ Title: Assignment 3.3
/ Author: Professor Itskovish
/ Date: 9/29/20
/ Modified by: Becca Buechle
/ Description: Assignment 3.3
=======================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin(){

    this.isLoggedIn=true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})

  }
}
