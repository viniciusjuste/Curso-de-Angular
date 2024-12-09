import { Injectable } from '@angular/core';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;

  constructor() { }

  setUSer(user : User ){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user
  }

  getUser(){
    return this.user
  }
}
