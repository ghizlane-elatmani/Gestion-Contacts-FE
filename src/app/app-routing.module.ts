import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { NewContactComponent } from './component/new-contact/new-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
