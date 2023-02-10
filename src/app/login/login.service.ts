import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const auth = firebase.getAuth();
    firebase
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        userCredential.user.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['/']);
        });
      });
  }

  getIdToken() {
    return this.token;
  }
}
