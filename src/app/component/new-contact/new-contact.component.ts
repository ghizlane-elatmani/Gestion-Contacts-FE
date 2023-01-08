import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();

  constructor() {}

  ngOnInit() {}

  saveContact() {
    console.log(this?.contact);
  }
}
