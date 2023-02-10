import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Persons list';

  constructor(private loginService : LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCCd_z32VSr14B9wo38RwmQRJrj7TIZ5Do',
      authDomain: 'angularapp-persons-list.firebaseapp.com',
    });
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }

  logOut(){
    this.loginService.logOut();
  }
}
