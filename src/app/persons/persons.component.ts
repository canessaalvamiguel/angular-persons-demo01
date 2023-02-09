import { Component, OnInit } from "@angular/core";
import { Person } from "../Person.model";
import { PersonsService } from "../persons.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit{
    message = "There is data";

    persons: Person[] = [];

    constructor(private personsService: PersonsService){}

    //Method is executed after the constructor
    ngOnInit(): void {
        this.persons = this.personsService.persons;//Assigning reference in memory
    }
}