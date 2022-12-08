import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  name: string = 'Miguel';
  lastName: string = 'Canessa';
  age: number = 30;


}
