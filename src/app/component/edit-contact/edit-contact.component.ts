import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  mode: number = 1;
  contact: Contact = new Contact();
  idContact: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {
    this.idContact = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact).subscribe((data: any) => {
      this.contact = data;
    });
  }

  updateContact() {
    this.contactService.updateContact(this.contact).subscribe((data) => {
      alert('Mise a jour effectuée');
      this.router.navigate(['contacts']);
    });
  }
}
