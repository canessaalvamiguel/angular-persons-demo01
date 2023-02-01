import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { FormPersonComponent } from './form-person/form-person.component';
import { LoggingService } from './LoggingService.service';
import { PersonsService } from './persons.service';

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, PersonComponent, FormPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
