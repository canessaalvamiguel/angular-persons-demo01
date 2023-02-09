import { Component, OnInit } from "@angular/core";
import { Person } from "../Person.model";
import { PersonsService } from "../persons.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit{
    message = "There is data";

    persons: Person[] = [];

    constructor(private personsService: PersonsService, private router: Router){}

    //Method is executed after the constructor
    ngOnInit(): void {
        this.persons = this.personsService.persons;//Assigning reference in memory
    }

    add(){
        this.router.navigate(['persons/add']);
    }
}