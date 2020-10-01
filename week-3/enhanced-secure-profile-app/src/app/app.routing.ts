/*
=======================================
/ Title: Assignment 3.3
/ Author: Professor Itskovish
/ Date: 9/29/20
/ Modified by: Becca Buechle
/ Description: Assignment 3.3
=======================================
*/

import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',

    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
