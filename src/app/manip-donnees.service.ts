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
    var t2 = [];
    var t3 = [];
    //tab.push("oui")
    this.ref.collection('festivals').get().then(function(doc) {
      doc.forEach(function(res){
        //console.log(tab.push(res.data());
        //console.log(Object.keys(res.data()))

        //tab.push(res.data());
        tab.push(res.data());

        //t2 = Object.entries(res.data()));
        //console.log(Object.entries(res.data())[1]);
        //for (var i = 0; i<t2.size() ; i++ ){
          //t3 = Object.assign({t2[i][0]} : t2[i][1]);
        //}

      });
    });
console.log(tab);
  //  var peopleArray = Object.keys(tab).map(i => tab[i]);
    //console.log(peopleArray);
const array1 = ["a", "b", "c"]
const array2 = [{a: 23, b: 22, c: 14}, {a: 78, b: 22, c: 14}, {id: 3, a: 23, b: 80, c: 14}]

let result = array1.map( letter => {
	let values = array2.map(obj => obj[letter]); // Getting [23, 78, 3] for "a"
	return {
		name : letter,
		isDifferent : !values.every(v => v===values[0]) // Checks if every value in the array equals the first one
	}
});

console.log(result)
    console.log(tab);
    return tab;
  }

}
