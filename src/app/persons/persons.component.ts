import { Component } from "@angular/core";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent{
    disabled = false;
    message = "";
    title = "";
    show = false;

    addPerson(){
        this.show = true;
        this.message = "Person was added";
    }
}