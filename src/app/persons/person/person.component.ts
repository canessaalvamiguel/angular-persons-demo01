import { Component, Input } from '@angular/core';
import { Person } from '../../Person.model';
import { PersonsService } from '../../persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: Person;
  @Input() index: number;

  constructor(private personasService: PersonsService) {}

  ngOnInit() {}

  edit(){
    this.personasService.saludate.emit(this.index);
  }
}
