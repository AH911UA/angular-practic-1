import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CardListComponent } from './card-list/card-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'drinks', component: CardListComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
