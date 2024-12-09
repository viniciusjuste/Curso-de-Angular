import { Component, DoCheck, OnDestroy } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  user : User | undefined
constructor(private userService: UserService) {
  this.user = this.userService.getUser()
}
}
