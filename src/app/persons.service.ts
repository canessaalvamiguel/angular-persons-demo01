import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './Person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [
    new Person('Miguel', 'Canessa'),
    new Person('Jose', 'Perez'),
  ];

  constructor(private loggingService : LoggingService){}

  addPerson(person: Person){
    this.persons.push(person);
    this.loggingService.sendMessageConsole("Person was added : " + person.name + " " + person.lastName);
}
}
