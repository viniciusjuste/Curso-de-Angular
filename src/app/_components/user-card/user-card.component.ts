import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/User';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user: User = { nome: '', idade: 0 };

  @Output() userInfoEmitter = new EventEmitter<User>();

  retornarDados(){
    this.userInfoEmitter.emit(this.user);
  }
}
