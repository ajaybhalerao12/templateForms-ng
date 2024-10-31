import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent implements OnInit {
  contact: any = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: 0,
    phone: {
      phoneNumber: '',
      phoneType: '',
    },
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
  };

  constructor(private route: ActivatedRoute, private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;
    // this.contactService.getContact(contactId).subscribe((contact)=>{
    //   console.log('Contact', contact);
    //   this.contact = contact;
    // });

    this.contactService.getContact(contactId).subscribe({
      next: (contact) => {this.contact = contact;},
      error: (error) => {console.log('Error', error);},
      complete: () => {console.log('Complete');},
    });
  }

  saveContact(form:NgForm) {
    console.log('Save contact', form.value);
    // console.log('Save contact', this.contact);
    this.contactService.saveContact(form.value).subscribe({
    // this.contactService.saveContact(this.contact).subscribe({
      next: (contact) => {
        console.log('Contact saved', contact);
        this.router.navigate(['/contacts']);
      },
    })
  }
}
