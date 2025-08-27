import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactUsService {
  constructor(private http: HttpClient) {}

  sendMessage(payload: any) {
    return this.http.post('https://evzen.duckdns.org/jf/network-contact-page', payload);
  }
}