import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyAUb9j58oUSM4HAUFmrPuw91IdtyQEftjw",
    authDomain: "testpw3-e1de4.firebaseapp.com",
    databaseURL: "https://testpw3-e1de4.firebaseio.com",
    projectId: "testpw3-e1de4",
    storageBucket: "testpw3-e1de4.appspot.com",
    messagingSenderId: "625846866119"
  };

@Injectable({
  providedIn: 'root'
})
export class ManipDonneesService {
  private ref;
  constructor() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
    this.ref = firebase.firestore();
  }

  getDonnees() {
    var tab = [];
    this.ref.collection('festivals').get().then(function(doc) {
      doc.forEach(function(res){
        tab.push(res.data());
      });
    });
    console.log("tab renvoyé par getDonnees dans la fct :", tab);
    console.log("taille tab :", tab.length);
    return tab;
  }

  getDataSnap(){
    var tabSnap = [];
    var tabCoord = [];

    this.ref.collection('festivals').get().then(function(doc){
      if (doc.exists) {
        doc.forEach(function(res){
          tabSnap.push(res.data());
        });
        console.log("tab renvoyé par getDataSnap T dans la fct :", tabSnap);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        doc.forEach(function(res){
          var item = res.data();
          var testCoord = res.data().coordonnees_insee;
          console.log("test :", testCoord);
          console.log("item de la bd:", item);
          tabSnap.push(item);
          tabCoord.push(testCoord);
        });
        console.log("tab renvoyé par getDataSnap F dans la fct :", tabSnap);
        console.log("tab des Coordonnée :", tabCoord);
    }
    });
  }


}
