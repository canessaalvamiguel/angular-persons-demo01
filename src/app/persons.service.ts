import { Person } from './Person.model';

export class PersonsService {
  persons: Person[] = [
    new Person('Miguel', 'Canessa'),
    new Person('Jose', 'Perez'),
  ];

  addPerson(person: Person){
    this.persons.push(person);
}
}
