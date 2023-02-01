import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
})
export class FormPersonComponent {
  @Output() newPerson = new EventEmitter<Person>();


  addPerson(nameInput: HTMLInputElement, lastNameInput: HTMLInputElement) {
    let person1 = new Person(nameInput.value, lastNameInput.value);
    nameInput.value = '';
    lastNameInput.value = '';

    this.newPerson.emit(person1);
  }
}
