import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import {Subject} from 'rxjs/Subject';
import { Query, CollectionReference } from '@firebase/firestore-types'
import { InfoFestival } from './Infofest';
import { Router } from '@angular/router';

const settings = {timestampsInSnapshots: true};
// BD de Test
// const config = {
//   apiKey: "AIzaSyAUb9j58oUSM4HAUFmrPuw91IdtyQEftjw",
//   authDomain: "testpw3-e1de4.firebaseapp.com",
//   databaseURL: "https://testpw3-e1de4.firebaseio.com",
//   projectId: "testpw3-e1de4",
//   storageBucket: "testpw3-e1de4.appspot.com",
//   messagingSenderId: "625846866119"
// };

// BD de prod
const config = {
    apiKey: "AIzaSyD76NnVhzcT3STU3UC9EpyN3rJXgrVNTAg",
    authDomain: "festivals-ftv-pw.firebaseapp.com",
    databaseURL: "https://festivals-ftv-pw.firebaseio.com",
    projectId: "festivals-ftv-pw",
    storageBucket: "festivals-ftv-pw.appspot.com",
    messagingSenderId: "992514786218"
  };

@Injectable({
  providedIn: 'root'
})
export class ManipDonneesService {
  private ref;

  tabD;
  tabDSub = new Subject();

  unFestival;
  unFestivalSub = new Subject();


  code_insee: string;
  code_postal: string;
  commentaires: string;
  commune_principale: string;
  complement_domaine: string;
  coordonnees_insee: number[] = [0,0];
  date_de_creation: string;
  date_de_debut: string;
  date_de_fin: string;
  departement: string;
  domaine: string;
  libelle_commune_pour_calcul_cp_insee: string;
  mois_habituel_de_debut: string;
  mois_indicatif_en_chiffre_y_compris_double_mois: number;
  nom_de_la_manifestation: string;
  nom_departement: string;
  periodicite: string;
  region: string;
  site_web: string;

  constructor(private goback: Router) {
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
    console.log(this.tabD);
    this.tabDSub.next(this.tabD);
  }
  emitFestival() {
    this.unFestivalSub.next(this.unFestival);
  }

  getDonnees() {
    var tab = [];
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

  getUnFestival(code) {
    var donnees;
    async function getD() {
      let campaignsRef: Query = firebase.firestore().collection('festivals');
      campaignsRef = campaignsRef.where('code_insee','==',code.toString());
      let activeRef = await campaignsRef.get();
      for (var campaign of activeRef.docs) {
        donnees = (campaign.data());
      }
    }

    return new Promise((resolve,reject) => {
      try {
        getD().then(() => {
          resolve(donnees);
        });
      } catch(err) {
        reject();
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

  rechercheAvancee(data) {
    let tab = [];
    async function getD() {
      let campaignsRef: Query = firebase.firestore().collection('festivals');
      for (let champs of Object.keys(data)) {
        if (data[champs] != "" && data[champs] != null) {
          switch(champs) {
            case 'nom_de_la_manifestation':
            case 'commune_principale':
            case 'region':
            case 'domaine':
            case 'mois_habituel_de_debut':
            campaignsRef = campaignsRef.where(champs,"==",data[champs]);
            break;
            case 'nom_departement':
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

  ajoutFestival(data) {
    let unFestival: InfoFestival;
    for (let champs of Object.keys(data)){
      switch(champs) {
        case "code_insee": this.code_insee = data[champs];
        break;
        case "code_postal": this.code_postal = data[champs];
        break;
        case "commune_principale": this.commune_principale = data[champs];
        this.libelle_commune_pour_calcul_cp_insee = data[champs];
        break;
        case "complement_domaine": this.complement_domaine = data[champs];
        break;
        case "coordonnees_insee_x": this.coordonnees_insee[0] = data[champs];
        break;
        case "coordonnees_insee_y": this.coordonnees_insee[1] = data[champs];
        break;
        case "date_de_creation": this.date_de_creation = data[champs]._i.year + "-"
        + ((data[champs]._i.month + 1) < 10? "0"+(data[champs]._i.month + 1) + "-"
        :(data[champs]._i.month + 1) + "-")
        + ((data[champs]._i.date + 1) < 10? "0"+(data[champs]._i.date + 1)
        :(data[champs]._i.date + 1) );
        break;
        case "date_de_debut": this.date_de_debut = data[champs]._i.year + "-"
        + ((data[champs]._i.month + 1) < 10? "0"+(data[champs]._i.month + 1) + "-"
        :(data[champs]._i.month + 1) + "-")
        + ((data[champs]._i.date + 1) < 10? "0"+(data[champs]._i.date + 1)
        :(data[champs]._i.date + 1) );
        break;
        case "date_de_fin": this.date_de_fin = data[champs]._i.year + "-"
        + ((data[champs]._i.month + 1) < 10? "0"+(data[champs]._i.month + 1) + "-"
        :(data[champs]._i.month + 1) + "-")
        + ((data[champs]._i.date + 1) < 10? "0"+(data[champs]._i.date + 1)
        :(data[champs]._i.date + 1) );
        break;
        case "nom_departement": this.departement = data[champs].num;
        this.nom_departement = data[champs].nom;
        break;
        case "domaine": this.domaine = data[champs];
        break;
        case "mois_habituel_de_debut": this.mois_habituel_de_debut = data[champs];
        this.mois_indicatif_en_chiffre_y_compris_double_mois = parseInt(data[champs],10);
        break;
        case "nom_de_la_manifestation": this.nom_de_la_manifestation = data[champs];
        break;
        case "periodicite": this.periodicite = data[champs];
        break;
        case "region": this.region = data[champs];
        break;
        case "site_web": this.site_web = data[champs];
        break;
        case "commentaires": this.commentaires = data[champs];
        break;

      }
    }
    unFestival = {
       code_insee: this.code_insee,
       code_postal: this.code_postal,
       commentaires: this.commentaires,
       commune_principale: this.commune_principale,
       complement_domaine: this.complement_domaine,
       coordonnees_insee: this.coordonnees_insee,
       date_de_creation: this.date_de_creation,
       date_de_debut: this.date_de_debut,
       date_de_fin: this.date_de_fin,
       departement: this.departement,
       domaine: this.domaine,
       libelle_commune_pour_calcul_cp_insee: this.libelle_commune_pour_calcul_cp_insee,
       mois_habituel_de_debut: this.mois_habituel_de_debut,
       mois_indicatif_en_chiffre_y_compris_double_mois: this.mois_indicatif_en_chiffre_y_compris_double_mois,
       nom_de_la_manifestation: this.nom_de_la_manifestation,
       nom_departement: this.nom_departement,
       periodicite: this.periodicite,
       region: this.region,
       site_web: this.site_web
   }
    console.log(unFestival);
    async function upload(data) {
      //console.log(path.join(''));
      return await firebase.firestore()
      .collection('festivals')
      .add(data)
      .then(() => alert('festival ajouté'))
      .catch(() => alert("erreur ajout"));
    }

    upload(unFestival);
    this.tabD.push(unFestival);
    this.emitTab();
  }

  updateFestival(data) {
    console.log(data);
    let unFestival: InfoFestival = {
       code_insee:  data['code_insee'],
       code_postal: data['code_postal'],
       commentaires: data['commentaires'],
       commune_principale: data['commune_principale'],
       complement_domaine: data['complement_domaine'],
       coordonnees_insee: [data['coordonnees_insee_x'],data['coordonnees_insee_y']],
       date_de_creation:  data['date_de_creation'],
       date_de_debut: data['date_de_debut'],
       date_de_fin: data['date_de_fin'],
       departement: data['nom_departement'].num,
       domaine: data['domaine'],
       libelle_commune_pour_calcul_cp_insee: data['commune_principale'],
       mois_habituel_de_debut: data['mois_habituel_de_debut'],
       mois_indicatif_en_chiffre_y_compris_double_mois: parseInt(data['domaine']),
       nom_de_la_manifestation: data['nom_de_la_manifestation'],
       nom_departement: data['nom_departement'].nom,
       periodicite: data['periodicite'],
       region: data['region'],
       site_web: data['site_web']
   };
console.log(unFestival);
    async function update(donnees) {
      return await firebase.firestore()
      .collection('festivals')
      .add(donnees)
      .then(() => alert('festival modifié'))
      .catch(() => alert("erreur ajout"));
    }
    console.log(unFestival);

    async function modif(festival) {
      let campaignsRef: any = firebase.firestore().collection('festivals');
      campaignsRef = campaignsRef.where('code_insee','==',unFestival.code_insee);
      let activeRef = await campaignsRef.get();
      for (var campaign of activeRef.docs) {
        let idDoc = campaign.id;
        let query = await firebase.firestore().collection('festivals').doc(idDoc).update(festival);

      }
    }

    return new Promise((resolve,reject) => {
      try {
        modif(unFestival).then(() => {
          this.getDonnees().then((value)=> {
            this.tabD = value;
            resolve(this.tabD);
            this.emitTab();
            this.goback.navigate(['','']);
          })
        });
      } catch(err) {
        reject([]);
      }
    });
    // modif(unFestival);
    // this.getDonnees().then((value) => {
    //   alert('festival modifié');
    //   this.tabD = [];
    //   this.emitTab();
    //   this.tabD = value;
    //   this.emitTab();
    //   this.goback.navigate(['','']);
    // });
  }
  deteleFestival(code){
    var donnees;
    async function deleteD() {
      let campaignsRef: any = firebase.firestore().collection('festivals');
      campaignsRef = campaignsRef.where('code_insee','==',code.toString());
      let activeRef = await campaignsRef.get();
      for (var campaign of activeRef.docs) {
        let idDoc = campaign.id;
        let query = await firebase.firestore().collection('festivals').doc(idDoc).delete();
      }
    }

    return new Promise((resolve,reject) => {
      try {
        deleteD().then(() => {
          this.getDonnees().then((value)=> {
            this.tabD = value;
            resolve(this.tabD);
            this.emitTab();
            alert('suppression réussi');
          })
        });
      } catch(err) {
        reject([]);
      }
    });
  }
}
