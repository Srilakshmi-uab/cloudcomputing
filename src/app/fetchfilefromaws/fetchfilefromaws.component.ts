import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-fetchfilefromaws',
  templateUrl: './fetchfilefromaws.component.html',
  styleUrls: ['./fetchfilefromaws.component.scss']
})
export class FetchfilefromawsComponent {
  baseurl = "https://smalempabucket.s3.us-east-2.amazonaws.com/"
  textReplace = "id%3D"
  slash = '/'
  splitFetch = 'fetch'
  splitUrl = '_url'
constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.processFileDownload();
  }

  processFileDownload() {
    const urlParts = this.router.url.split(this.splitFetch)[1].split(this.splitUrl);
    const userId = urlParts[0].replace(this.textReplace, '').replace(this.slash, '');
    const fileUrl = `${this.baseurl}${urlParts[1]}`;

    this.authenticationService.updatingCount({ url: fileUrl, userId: userId }).subscribe({
      next: (response: any) => {
        if (response.data === true) {
          this.getFile(fileUrl);
        } else {
          alert('Error: Unable to download the file. Click limit reached.');
        }
      },
      error: (error: any) => {
        console.log('Error updating click:', error);
      },
    });
  }

 getFile(url: string) {
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = url;
    anchor.download = 'downloaded_file';
    anchor.addEventListener('error', (event: Event) => {
      console.log('Error: Unable to download the file.');
    });
    anchor.addEventListener('load', (event: Event) => {
      document.body.removeChild(anchor);
    });
    document.body.appendChild(anchor);
    anchor.click();
  }

}

