import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import {Subject} from 'rxjs/Subject';

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
    var realTab= [];
      async function getD() {
          let campaignsRef = firebase.firestore().collection('festivals');
          let activeRef = await campaignsRef.get();
          for (var campaign of activeRef.docs) {
              tab.push(campaign.data());
              console.log(campaign.data());
          }
      }

  return new Promise((resolve,reject) => {
    try {
    getD().then(() => {
        console.log(tab.length);
        resolve(tab);
      });
    } catch(err) {
      reject("erreur chargement");
    }
  });
  }
}
