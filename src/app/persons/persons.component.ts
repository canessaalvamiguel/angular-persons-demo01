import { Component } from "@angular/core";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonsComponent{
    disabled = true;
    message = "No person was added";
    title = "";

    addPerson(){
        this.message = "Person was added";
    }

    changeTitle(event: Event){
        console.log("changeTitle triggered");
        this.title = (<HTMLInputElement> event.target).value;
    }
}