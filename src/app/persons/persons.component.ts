import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../LoggingService.service";
import { Person } from "../Person.model";
import { PersonsService } from "../persons.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit{
    message = "There is data";
    title = "Persons list"

    persons: Person[] = [];

    constructor(private loggingService : LoggingService, private personsService: PersonsService){}

    //Method is executed after the constructor
    ngOnInit(): void {
        this.persons = this.personsService.persons;//Assigning reference in memory
    }
}