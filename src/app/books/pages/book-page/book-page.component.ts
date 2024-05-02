import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  public books: Books[] = [];

  constructor(private booksService: BooksService){}

  ngOnInit(): void {
    this.booksService.getBooks()
      .subscribe(books => this.books = books);
  }
}
