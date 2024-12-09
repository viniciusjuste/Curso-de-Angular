import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userselecionado: User | undefined;
  userForm: FormGroup;

  users: User[] = [
    { nome: 'Vinicius', idade: 20 },
    { nome: 'Matheus', idade: 23 },
    { nome: 'Guilherme', idade: 30 },
    { nome: 'Julia', idade: 12 }
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    // Inicializa o formGroup no construtor
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(150)]],
    });
  }

  ngOnInit(): void {
    // No ngOnInit, apenas chamamos o initializeForm se necessário, mas neste caso já estamos inicializando o form no construtor.
  }

  infoUserSelecionado(user: User): void {
    this.userselecionado = user;
    this.userService.setUSer(user);
  }

  submit() {
    if (this.userForm.valid) {
      const newUser: User = {
        nome: this.userForm.value.nome,
        idade: +this.userForm.value.idade, 
      };
      this.users.push(newUser);
      console.log('Novo usuário adicionado:', newUser);
      console.log('Lista atualizada de usuários:', this.users);
  
      this.userForm.reset(); // Limpa o formulário
    } else {
      console.error('Formulário inválido');
    }
  }
  
  
}
