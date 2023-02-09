import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './Person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [
    new Person('Miguel', 'Canessa'),
    new Person('Jose', 'Perez'),
  ];

  saludate = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}

  addPerson(person: Person) {
    this.persons.push(person);
    this.loggingService.sendMessageConsole(
      'Person was added : ' + person.name + ' ' + person.lastName
    );
  }

  editPerson(index: number, newPerson: Person){
    this.persons[index] = newPerson;
  }

  getPerson(index: number){
    let person : Person = this.persons[index];
    return person;
  }
}
