import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  doLoginGoogle() {
    // For firestore
    let nombre, foto, email, token;
    const db = firebase.firestore();
    // Advice from the console
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    /*
    // Old:
    const date = snapshot.get('created_at');
    // New:
    const timestamp = snapshot.get('created_at');
    const date = timestamp.toDate();
    */

    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(
      (success) => {
        console.log('Login exitoso, Hola ', success.user.displayName);
        nombre = success.user.displayName;
        foto   = success.user.photoURL;
        token  = success.user.uid;
        email  = success.user.email;
        this.sendToken(token);

        db.collection('usuarios').doc(token).set({
          nombre: nombre,
          email: email,
          fotoURL: foto,
          uid: token
        }).then( function() {
          console.log('Exito');
        }).catch( (error) => {
          console.error('ERROR: ', error);
        });
      })
      .catch( (err) => {
        console.log('Error: ', err);
      }
    );
  }

  sendToken (token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }
}
