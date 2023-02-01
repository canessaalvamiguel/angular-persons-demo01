import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Person } from '../Person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
  providers: []
})
export class FormPersonComponent {

  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('lastNameInput') lastNameInput : ElementRef;

  constructor(private loggingService: LoggingService, private personsService : PersonsService){}

  addPerson() {
    let person1 = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);

    this.nameInput.nativeElement.value = '';
    this.lastNameInput.nativeElement.value = '';

    this.personsService.addPerson(person1);
    this.loggingService.sendMessageConsole("Person added " + person1.name + person1.lastName);
  }
}
