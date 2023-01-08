import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/Contact';

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

  createContact(contact: Contact) {
    return this.http.post('http://localhost:8080/contacts', contact);
  }
}
