import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
})
export class FormPersonComponent {
  @Output() newPerson = new EventEmitter<Person>();

  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('lastNameInput') lastNameInput : ElementRef;

  addPerson() {
    let person1 = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);

    this.nameInput.nativeElement.value = '';
    this.lastNameInput.nativeElement.value = '';

    this.newPerson.emit(person1);
  }
}
