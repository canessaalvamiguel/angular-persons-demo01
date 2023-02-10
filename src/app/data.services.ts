import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Person } from './Person.model';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  loadPersons() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get<Person[]>(
      'https://angularapp-persons-list-default-rtdb.firebaseio.com/data.json?auth=' +
        token
    );
  }

  savePerson(persons: Person[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://angularapp-persons-list-default-rtdb.firebaseio.com/data.json?auth=' +
          token,
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
    const token = this.loginService.getIdToken();
    let url: string =
      'https://angularapp-persons-list-default-rtdb.firebaseio.com/data/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.put(url, person).subscribe(
      (response) => console.log('Result of updating Person ' + response),
      (error) => console.log('Error while updating persons: ' + error)
    );
  }

  deletePerson(index: number) {
    const token = this.loginService.getIdToken();
    let url: string =
      'https://angularapp-persons-list-default-rtdb.firebaseio.com/data/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Result of deleting Person ' + response),
      (error) => console.log('Error while deleting persons: ' + error)
    );
  }
}
