import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
})
export class FormPersonComponent {
  @Output() newPerson = new EventEmitter<Person>();

  nameInput: string = '';
  lastNameInput: string = '';

  addPerson() {
    let person1 = new Person(this.nameInput, this.lastNameInput);

    this.newPerson.emit(person1);

    this.nameInput = '';
    this.lastNameInput = '';
  }
}
