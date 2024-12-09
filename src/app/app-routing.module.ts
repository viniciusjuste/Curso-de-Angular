import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  // lazy loading melhora o desempenho da aplicação, especialmente em projetos maiores. Funciona somente com modulos
  // { path: '', loadChildren: () => import('./pages/home/home.component').then(m => m.HomeModule) },
  { path: '', component: HomeComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'user/details', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
