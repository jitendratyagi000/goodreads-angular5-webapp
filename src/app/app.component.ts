import { Component } from '@angular/core';
import { GoodreadsService } from './goodreads.service';
import { parseString } from 'xml2js';
import { Books } from './models/Books';
import { ColumnToDisplay } from './models/ColumnToDisplay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Books[];
  columnsToDisplay: ColumnToDisplay[] = [
    { name: 'id', header: "Book Id" },
    { name: 'title', header: "Title" },
    { name: 'author', header: "Author Name" }
  ]
  constructor(private goodReadsService: GoodreadsService) {

  }

  searchBooks = searchTerm => {
    this.goodReadsService.searchBooks(searchTerm).subscribe(res => parseString(res, (error, goodReadsResult) => {
      this.books = goodReadsResult.GoodreadsResponse.search[0].results[0].work.map(work =>
        ({
          id: work.best_book[0].id[0]._,
          title: work.best_book[0].title[0],
          author: work.best_book[0].author[0].name[0]
        })
      );
    }));
  }
}