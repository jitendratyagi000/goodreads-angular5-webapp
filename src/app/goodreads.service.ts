import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class GoodreadsService {
  constructor(private http: HttpClient) { }

  searchBooks(searchTerm: string) {
    const API_URL = `${environment.API_URL}?key=${environment.API_KEY}&q=${searchTerm}`;
    return this.http.get(API_URL, { responseType: 'text' });
  }

}
