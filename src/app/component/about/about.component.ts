import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  infos = { name: 'Mohamed', email: 'Mohamed@gmail.com' };

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
