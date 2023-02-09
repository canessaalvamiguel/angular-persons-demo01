import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './persons/person/person.component';
import { FormsModule } from '@angular/forms';
import { FormPersonComponent } from './persons/form-person/form-person.component';
import { LoggingService } from './LoggingService.service';
import { PersonsService } from './persons.service';

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, PersonComponent, FormPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
