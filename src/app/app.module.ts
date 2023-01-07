import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { AboutComponent } from './component/about/about.component';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './component/new-contact/new-contact.component';

@NgModule({
  declarations: [AppComponent, ContactsComponent, AboutComponent, NewContactComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
