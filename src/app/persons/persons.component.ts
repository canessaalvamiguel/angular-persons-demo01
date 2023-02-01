import { Component } from "@angular/core";
import { LoggingService } from "../LoggingService.service";
import { Person } from "../Person.model";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent{
    message = "There is data";
    title = "Persons list"

    persons: Person[] = [];

    constructor(private loggingService : LoggingService){}

    personAdded(person: Person){
        this.persons.push(person);
        this.loggingService.sendMessageConsole("Person was added. " + person.name + " " + person.lastName);
    }
}