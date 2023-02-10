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
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, PersonComponent, FormPersonComponent, ErrorComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, PersonsService, DataServices, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
