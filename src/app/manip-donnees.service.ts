import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import {Subject} from 'rxjs/Subject';
import { Query } from '@firebase/firestore-types'
import { InfoFestival } from './Infofest';

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


  code_insee: string;
  code_postal: string;
  commentaires: string;
  commune_principale: string;
  complement_domaine: string;
  coordonnees_insee: number[];
  date_de_creation: string;
  date_de_debut: string;
  date_de_fin: string;
  departement: string;
  domaine: string;
  libelle_commune_pour_calcul_cp_insee: string;
  mois_habituel_de_debut: string;
  mois_indicatif_en_chiffre_y_compris_double_mois: string;
  ndeg_de_l_edition_2019: number;
  ndeg_identification: string;
  nom_de_la_manifestation: string;
  nom_departement: string;
  periodicite: string;
  region: string;
  site_web: string;

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



  ajoutFestival(data) {
    // "fields": {"departement": "51", "code_postal": "51220", "mois_habituel_de_debut": "03 (mars)",
    // "mois_indicatif_en_chiffre_y_compris_double_mois": 3.0,
    // "commune_principale": "COURCY", "date_de_creation": "2010-01-01",
    // "region": "Grand Est", "nom_departement": "Marne",
    // "domaine": "Musiques actuelles", "ndeg_de_l_edition_2019": 10.0,
    // "date_de_debut": "2019-03-08", "code_insee": "51183", "nom_de_la_manifestation":
    // "COURZIK FESTIVAL", "ndeg_identification": "FD018", "site_web": "http://www.courzik.fr/",
    // "date_de_fin": "2019-03-10",
    // "commentaires": "10\u00e8me \u00e9dition.
    //   Le COURZIK' Festival vous propose deux soir\u00e9es de concerts les vendredi 08 et samedi 09 mars et un concert jeune public le dimanche 10 mars.",
    //   "periodicite": "Annuelle", "libelle_commune_pour_calcul_cp_insee":
    //   "COURCY", "coordonnees_insee": [49.3196081983, 4.0061261454],
    //   "complement_domaine": "Musiques amplifi\u00e9es ou \u00e9lectroniques"},
    //   "geometry": {"type": "Point", "coordinates": [4.0061261454, 49.3196081983]}

    let unFestival: InfoFestival;
    for (let champs of Object.keys(data)){
      console.log(champs);
      console.log(data[champs]);
      switch(champs) {
        case "code_insee": unFestival['fields'].code_insee = data[champs];
        break;
        case "code_postal": unFestival.fields.code_postal = data[champs];
        break;
        case "commune_principale": unFestival.fields.commune_principale = data[champs];
                  unFestival.fields.libelle_commune_pour_calcul_cp_insee = data[champs];
        break;
        case "complement_domaine": unFestival.fields.complement_domaine = data[champs];
        break;
        case "coordonnees_insee_x": unFestival.fields.coordonnees_insee[0] = data[champs];
        break;
        case "coordonnees_insee_y": unFestival.fields.coordonnees_insee[1] = data[champs];
        break;
        case "date_de_creation": unFestival.fields.date_de_creation = data[champs];
        break;
        case "date_de_debut": unFestival.fields.date_de_debut = data[champs];
        break;
        case "date_de_fin": unFestival.fields.date_de_fin = data[champs];
        break;
        case "departement": unFestival.fields.departement = data[champs].num;
                            unFestival.fields.nom_departement = data[champs].nom;
        break;
        case "domaine": unFestival.fields.domaine = data[champs];
        break;
        case "mois_habituel_de_debut": unFestival.fields.mois_habituel_de_debut = data[champs];
        unFestival.fields.mois_indicatif_en_chiffre_y_compris_double_mois = data[champs];
        break;
        case "nom_de_la_manifestation": unFestival.fields.nom_de_la_manifestation = data[champs];
        break;
        case "periodicite": unFestival.fields.periodicite = data[champs];
        break;
        case "region": unFestival.fields.region = data[champs];
        break;
        case "site_web": unFestival.fields.site_web = data[champs];
        break;
      }
    }

    console.log(unFestival);
  }

}
