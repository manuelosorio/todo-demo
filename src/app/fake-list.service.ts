import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeListService {
  constructor(private http: HttpClient) {}

  getLists() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos', {
      withCredentials: true,
    });
  }
}
