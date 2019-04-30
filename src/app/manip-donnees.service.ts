import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import {Subject} from 'rxjs/Subject';
import { Query } from '@firebase/firestore-types'

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

  private tabD;
  tabDSub = new Subject();
  constructor() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
    this.ref = firebase.firestore();
    if(typeof(this.tabD) == undefined) {
      if (this.tabD.length != 0) {
        this.emitTab();
      } else {
        this.getDonnees().then((value) => {
          this.tabD = value;
          this.emitTab();
        });
      }
    } else {
      this.getDonnees().then((value) => {
        this.tabD = value;
        this.emitTab();
      });
    }
    }


  emitTab() {
    this.tabDSub.next(this.tabD);
  }

  getDonnees() {
    var tab = [];
    var realTab= [];
      async function getD() {
          let campaignsRef = firebase.firestore().collection('festivals');
          let activeRef = await campaignsRef.get();
          for (var campaign of activeRef.docs) {
              tab.push(campaign.data());
          }
      }

  return new Promise((resolve,reject) => {
    try {
    getD().then(() => {
        resolve(tab);
      });
    } catch(err) {
      reject([]);
    }
  });
  }

  rechercheRapide(data) {
    let tab = [];
    async function getD() {
        let campaignsRef: Query = firebase.firestore().collection('festivals');
        for (let champs of Object.keys(data)) {
          if (data[champs] != "" && data[champs] != null) {
            switch(champs) {
              case 'domaine':
              case 'mois_habituel_de_debut':
                    campaignsRef = campaignsRef.where(champs,"==",data[champs]);
                    break;
              case 'departement':
                    if (data[champs].num != ''){
                      campaignsRef = campaignsRef.where('departement',"==",data[champs].num);
                    }
                    break;
            }

          }
        }
        let activeRef = await campaignsRef.get();
        for (var campaign of activeRef.docs) {
            tab.push(campaign.data());
        }
    }

return new Promise((resolve,reject) => {
  try {
  getD().then(() => {
      resolve(tab);
      this.tabD = tab;
      this.emitTab();
    });
  } catch(err) {
    reject([]);
  }
});
    }

}
