import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'http://localhost:8080/searchContacts?kw=A&size=5&page=0'
    );
  }
}
