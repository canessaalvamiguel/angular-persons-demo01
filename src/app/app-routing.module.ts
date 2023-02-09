import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormPersonComponent } from './persons/form-person/form-person.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  {
    path: 'persons',
    component: PersonsComponent,
    children: [
      { path: 'add', component: FormPersonComponent },
      { path: ':id', component: FormPersonComponent },
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
