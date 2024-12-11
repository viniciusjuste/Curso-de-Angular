import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/User';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private userService: UserService, private toastr : ToastrService) { }

  user: UserGit | undefined
  username: string = ''

  getUserGit() {
    this.userService.getGitUser(this.username).subscribe({
      next: (response: UserGit) => this.user = response,
      error: (error) => this.toastr.error(error.error.message)
    });
  }
}
