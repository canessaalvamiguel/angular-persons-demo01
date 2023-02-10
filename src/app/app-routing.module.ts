import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonComponent } from './persons/form-person/form-person.component';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes = [
  { path: '', component: PersonsComponent, canActivate:[LoginGuardian] },
  { path: 'persons', component: PersonsComponent, canActivate:[LoginGuardian] },
  { path: 'persons/add', component: FormPersonComponent, canActivate:[LoginGuardian] },
  { path: 'persons/:id', component: FormPersonComponent, canActivate:[LoginGuardian] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
