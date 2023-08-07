import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public http: HttpClient, private router: Router) {}
  sendingFileintoBucket(payload: any) {
    return this.http.post(`${environment.baseURL}/upload`, payload);
  }
  sendingSubscriptionMails(payload: Array<any>) {
    return this.http.post(`${environment.baseURL}/send/subscriptions`, payload);
  }
  updatingCount(payload: any) {
    return this.http.post(`${environment.baseURL}/countClicks`, payload);
  }
}
