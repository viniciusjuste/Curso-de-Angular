import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/User';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private userService: UserService) { }
ngOnInit(): void {
  this.getUserGit();
}

user : UserGit | undefined

getUserGit(){
  this.userService.getGitUser('bitcoin').subscribe((response : UserGit) => {
   this.user = response;
  }); 
 }
}
