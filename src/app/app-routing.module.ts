import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonComponent } from './persons/form-person/form-person.component';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'persons/add', component: FormPersonComponent },
  { path: 'persons/:id', component: FormPersonComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
