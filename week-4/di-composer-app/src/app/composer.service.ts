/*
============================================
; Title: Composer
; Author:  Peter Itskovich
; Date: October 06 2020
; Modified By: Becca Buechle
; Description: Assignment 4.2 Inversion of Control and Dependency Injection
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';


@Injectable({
  providedIn: 'root'
})

export class ComposerService{
  composers: Array<IComposer>;

  constructor(){
    this.composers= [
      {
        composerId: 100, fullName: "AC/DC", genre: "Rock"
      },
      {
        composerId: 101, fullName: "Aerosmith", genre: "Rock"
      },
      {
        composerId: 102, fullName: "Def Leppard", genre: "Rock"
      },
      {
        composerId: 103, fullName: "Madonna", genre: "Pop"
      },
      {
        composerId: 104, fullName: "The Scorpions", genre: "Rock"
      }
    ]
  }

  getComposers(){
    return this.composers;
  }

  getComposer(composerId: number){
    for (let composer of this.composers){
      if(composer.composerId === composerId){
        return composer;
      }
    }
  }

}
