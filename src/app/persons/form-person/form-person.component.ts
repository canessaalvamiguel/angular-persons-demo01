import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../../Person.model';
import { PersonsService } from '../../persons.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css'],
  providers: [],
})
export class FormPersonComponent implements OnInit{
  nameInput: string;
  lastNameInput: string;
  index: number;

  constructor(
    private personsService: PersonsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    /*
    this.personsService.saludate.subscribe((index: number) => {      
      this.personsService.editPerson(
        index,
        new Person('Pepe', 'Peña')
      );
    });
    */
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    if(this.index != null){
      let person: Person = this.personsService.getPerson(this.index);
      this.nameInput = person.name;
      this.lastNameInput = person.lastName;
    }
  }

  savePerson() {
    let person1 = new Person(this.nameInput, this.lastNameInput);

    this.nameInput = '';
    this.lastNameInput = '';

    if(this.index){
      this.personsService.editPerson(this.index, person1);
    }else{
      this.personsService.addPerson(person1);
    }

    this.router.navigate(['persons']);
  }
}
