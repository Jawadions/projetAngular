import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/Contact';
import {ContactService} from '../shared/contact.service';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.css']
})
export class ContactezNousComponent implements OnInit {
  listContat: Contact[];
  contact: Contact;
  val: string;
  constructor(private serviceContact: ContactService) { }

  ngOnInit(): void {
    this.serviceContact.getContacts().subscribe(
      (data: Contact[]) => this.listContat = data
    );

    this.contact = new Contact();
    this.val = 'Ajouter';

  }
  save() {
    if (this.val === 'Ajouter'){
      this.serviceContact.addContact(this.contact).subscribe(
        () => this.listContat = [this.contact, ...this.listContat]
      );
    }
}}
