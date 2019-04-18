import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManipDonneesService {

  var ref;
  constructor() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
    ref = firebase.firestore(); 
  }

  getDonnees() {

  }
}
