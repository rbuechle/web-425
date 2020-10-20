import { Component, OnInit } from '@angular/core';
  /*
============================================
; Title: Data Tables
; Author:  Peter Itskovich
; Date: October 12, 2020
; Modified By: Becca Buechle
; Description: Assignment 5.3 – Data Tables
;===========================================
*/

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }


  ngOnInit(): void {
  }

}
