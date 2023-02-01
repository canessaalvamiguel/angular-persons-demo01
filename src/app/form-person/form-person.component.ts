import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Person } from '../Person.model';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
  providers: []
})
export class FormPersonComponent {
  @Output() newPerson = new EventEmitter<Person>();

  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('lastNameInput') lastNameInput : ElementRef;

  constructor(private loggingService: LoggingService){}

  addPerson() {
    let person1 = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);

    this.nameInput.nativeElement.value = '';
    this.lastNameInput.nativeElement.value = '';

    this.loggingService.sendMessageConsole("Send person: "+person1.name + " " + person1.lastName);

    this.newPerson.emit(person1);
  }
}
