import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
  {path: 'contacts', component: ContactListComponent ,title: 'Contacts'},
  {path: 'contacts/edit/:id', component: EditContactComponent ,title: 'Contacts - Edit'},
  {path: 'contacts/edit', component: EditContactComponent ,title: 'Contacts - Edit'},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
];
