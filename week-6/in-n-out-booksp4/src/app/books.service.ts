  /*
============================================
; Title: Data Tables
; Author:  Peter Itskovich
; Date: October 12, 2020
; Modified By: Becca Buechle
; Description: Assignment 5.3 – Data Tables
;===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from'./book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>

  constructor() { this.books = [
    {
      isbn: '9780544336261',
      title: 'The Giver',
      description: 'The haunting story centers on twelve-year-old Jonas, who lives in a seemingly ideal, if colorless, world of conformity and contentment. Not until he is given his life assignment as the Receiver of Memory ',
      numOfPages: 240,
      authors: ['Lois Lowry']
    },
    {
      isbn: ' 9780316360166',
      title: 'Fruit Basket',
      description: "After a family tragedy turns her life upside down, plucky high schooler Tohru Honda takes matters into her own hands and moves out.",
      numOfPages: 350,
      authors: ['Natsuki Takaya']
    },
    {
      isbn: '0545002850',
      title: 'Green Eggs and Ham',
      description: "I do not like green eggs and ham.",
      numOfPages: 65,
      authors: ['Dr. Seuss']
    },
    {
      isbn: '0307476073',
      title: 'Wild',
      description: "At twenty-two, Cheryl Strayed thought she had lost everything. In the wake of her mother’s death, her family scattered and her own marriage was soon destroyed.",
      numOfPages: 315,
      authors: ['Cheryl Strayed']
    },
    {
      isbn: '0689821867',
      title: 'Just Ella',
      description: "It's a familiar story: In spite of the obstacles put in her way by her wicked stepmother, Ella goes to the ball, sweeps Prince Charming off his feet, and is chosen to be his bride.",
      numOfPages: 240,
      authors: ['Margaret Peterson Haddix']
    }
  ]
}

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
    if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
