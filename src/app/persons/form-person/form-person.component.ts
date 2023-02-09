import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(private personsService: PersonsService) {
    this.personsService.saludate.subscribe((index: number) => {
      alert('Index ' + index);
      /*this.personsService.editPerson(
        index,
        new Person('Pepe', 'Peña')
      );*/
    });
  }

  addPerson() {
    let person1 = new Person(
      this.nameInput,
      this.lastNameInput
    );

    this.nameInput = '';
    this.lastNameInput = '';

    this.personsService.addPerson(person1);
  }
}
