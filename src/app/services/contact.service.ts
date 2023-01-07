import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts(kw: string, page: number, size: number) {
    return this.http.get(
      `http://localhost:8080/searchContacts?kw=${kw}&size=${size}&page=${page}`
    );
  }
}
