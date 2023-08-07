import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent {
  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  file_selected: File | null = null;
  listOfEmails = '';
  currentSection = "subscription";

  selectionOfFile(event: Event) {
   
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
     
      this.file_selected = file;
    }
  }
  sendingSubscriptions() {
    const emails = this.listOfEmails.split(',').map(email => email.trim());

    if (emails.length > 5) {
      alert('Please enter maximum 5 email addresses');
    } else {
    
      this.authenticationService.sendingSubscriptionMails(emails).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
      console.log(emails);
    }
  }

  async fileUploading() {
    if (!this.file_selected) {
      return;
    }

    try {
      
      const formData = new FormData();
      formData.append('file', this.file_selected);
      const result: any = await this.authenticationService.sendingFileintoBucket(formData).toPromise();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
