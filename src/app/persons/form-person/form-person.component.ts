import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../Person.model';
import { PersonsService } from '../../persons.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
  providers: [],
})
export class FormPersonComponent {

  nameInput : string;
  lastNameInput : string;

  constructor(private personsService: PersonsService, private router: Router) {
    this.personsService.saludate.subscribe((index: number) => {
      
      /*this.personsService.editPerson(
        index,
        new Person('Pepe', 'Peña')
      );*/
    });
  }

  savePerson() {
    let person1 = new Person(
      this.nameInput,
      this.lastNameInput
    );

    this.nameInput = '';
    this.lastNameInput = '';

    this.personsService.addPerson(person1);
    this.router.navigate(['persons']);
  }
}
