import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  keyword: string = '';
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number> | undefined;

  constructor(private contactService: ContactService) {}

  ngOnInit() {}

  search() {
    this.contactService
      .getContacts(this.keyword, this.currentPage, this.size)
      .subscribe((data: any) => {
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
      });
  }

  goToPage(i: number) {
    this.currentPage = i;
    this.search();
  }
}
