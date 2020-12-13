import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Contact} from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'http://localhost:3000/Contacts/';

  constructor(private http: HttpClient) { }
  putContact(c: Contact) {
    return this.http.put(this.url, c);
  }

  getContacts() {
    return this.http.get<Contact[]>(this.url);
  }
  addContact(c: Contact) {
    return this.http.post(this.url, c);
  }
}
