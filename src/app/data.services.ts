import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './Person.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  loadPersons() {
    return this.httpClient.get<Person[]>(
      'https://angularapp-persons-list-default-rtdb.firebaseio.com/data.json'
    );
  }

  savePerson(persons: Person[]) {
    this.httpClient
      .put(
        'https://angularapp-persons-list-default-rtdb.firebaseio.com/data.json',
        persons
      )
      .subscribe(
        (response) => {
          console.log('Result of saving persons: ' + response);
        },
        (error) => console.log('Error while saving persons: ' + error)
      );
  }

  updatePerson(index: number, person: Person) {
    let url: string =
      'https://angularapp-persons-list-default-rtdb.firebaseio.com/data/' +
      index +
      '.json';
    this.httpClient.put(url, person).subscribe(
      (response) => console.log('Result of updating Person ' + response),
      (error) => console.log('Error while updating persons: ' + error)
    );
  }
}
