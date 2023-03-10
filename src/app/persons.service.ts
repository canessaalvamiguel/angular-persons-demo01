import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Person } from './Person.model';

@Injectable()
export class PersonsService {
  persons: Person[] = [];

  saludate = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataService: DataServices
  ) {}

  setPersons(persons: Person[]){
    this.persons = persons;
  }

  getPersons() {
    return this.dataService.loadPersons();
  }

  addPerson(person: Person) {
    if(this.persons == null){
      this.persons = [];
    }
    this.persons.push(person);
    this.dataService.savePerson(this.persons);
    this.loggingService.sendMessageConsole(
      'Person was added : ' + person.name + ' ' + person.lastName
    );
  }

  editPerson(index: number, newPerson: Person) {
    this.persons[index] = newPerson;
    this.dataService.updatePerson(index, newPerson);
    this.loggingService.sendMessageConsole(
      'Person was updated : ' + newPerson.name + ' ' + newPerson.lastName
    );
  }

  getPerson(index: number) {
    let person: Person = this.persons[index];
    return person;
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
    this.dataService.deletePerson(index);
    //temp change: regenerate indexes in db
    this.modifyPersons();
  }

  modifyPersons(){
    if(this.persons != null){
      this.dataService.savePerson(this.persons);
    }
  }
}
