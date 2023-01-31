import { Component } from "@angular/core";
import { Person } from "../Person.model";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent{
    disabled = false;
    message = "";
    show = false;

    persons: Person[] = [new Person('Juan', 'Perez'), new Person('Laura', 'Alvarado'), new Person('Jose', 'Rodriguez')];

    addPerson(){
        this.show = true;
        this.message = "Person was added";
    }
}