import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode: number = 1;

  constructor(private contactService: ContactService) {}

  ngOnInit() {}

  saveContact() {
    this.contactService.createContact(this.contact).subscribe((data: any) => {
      this.contact = data;
      this.mode = 2;
    });
  }
}
