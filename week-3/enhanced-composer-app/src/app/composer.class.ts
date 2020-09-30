/*
============================================
; Title: about
; Author:  Peter Itskovich
; Date: September 29 2020
; Modified By: Becca Buechle
; Description: Assignment 3.2 - Passing Data to Routes, Part 1
;===========================================
*/

import { IComposer } from './composer.interface';

export class Composer{
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
