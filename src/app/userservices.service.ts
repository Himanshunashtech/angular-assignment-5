import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor() { }
  
    isLoggedIn(): boolean {
      return false;
    }
  }

