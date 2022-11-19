import { Component } from "@angular/core";

@Component({
    selector: 'app-persons',
    template: `<h1>Persons list</h1>
    <app-person></app-person>
    <app-person></app-person>`
})
export class PersonsComponent{

}