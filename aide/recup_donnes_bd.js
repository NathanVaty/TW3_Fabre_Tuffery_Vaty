//ex app.component.ts
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {GetBDService} from './get-bd.service';

const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyAUb9j58oUSM4HAUFmrPuw91IdtyQEftjw",
    authDomain: "testpw3-e1de4.firebaseapp.com",
    databaseURL: "https://testpw3-e1de4.firebaseio.com",
    projectId: "testpw3-e1de4",
    storageBucket: "testpw3-e1de4.appspot.com",
    messagingSenderId: "625846866119"
  };
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
    var ref = firebase.firestore();
	
    ref.collection('festivals').get().then(function(doc) {
    doc.forEach(function(res){
        console.log(res.data()); // récup données de la collection festivals
    });
});

  }
}