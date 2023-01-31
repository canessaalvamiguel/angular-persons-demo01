import { Component } from "@angular/core";
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

    personAdded(person: Person){
        this.persons.push(person);
    }
}