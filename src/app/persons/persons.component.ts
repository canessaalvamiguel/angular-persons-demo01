import { Component } from "@angular/core";
import { Person } from "../Person.model";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent{
    message = "Persons added";
    show = false;
    title = "Persons list"

    persons: Person[] = [];
    nameInput: string = "";
    lastNameInput: string = "";

    addPerson(){
        this.show = true;
        this.message = "Person was added";
        let person1 = new Person(this.nameInput, this.lastNameInput);
        this.persons.push(person1);
        this.nameInput = "";
        this.lastNameInput = "";
    }
}