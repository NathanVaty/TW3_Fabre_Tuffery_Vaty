import { Injectable } from '@angular/core';

export class Departement {
  nom: string;
  num: number;
}

@Injectable({
  providedIn: 'root'
})
export class InfoUtileService {

  constructor() { }
  domaines = [
    '',
    'Arts plastiques et visuels',
    'Cinéma et audiovisuel',
    'Cirque et Arts de la rue',
    'Danse',
    'Divers Spectacle vivant',
    'Domaines divers',
    'Livre et littérature',
    'Musiques actuelles',
    'Musiques classiques',
    'Pluridisciplinaire Spectacle vivant',
    'Théâtre',
    'Transdisciplinaire'
  ];
  mois  =[
    '',
    '01 (janvier)',
    '02 (février)',
    '03 (mars)',
    '04 (avril)',
    '05 (mai)',
    '06 (juin)',
    '07 (juillet)',
    '08 (août)',
    '09 (septembre)',
    '10 (octobre)',
    '11 (novembre)',
    '12 (décembre)'
  ];

  regions =[
    '',
    'Auvergne-Rhône-Alpes',
    'Bougogne-Franche-Comté',
    'Bretagne',
    'Centre-Val de Loire',
    'Corse',
    'Grand Est',
    'Guadeloupe',
    'Guyane',
    'Hauts-de-France',
    'Île-de-France',
    'Martinique',
    'Mayotte',
    'Normandie',
    'Nouvelle-Aquitaine',
    'Occitanie',
    'Pays de la Loire',
    'Provence-Alpes-Côte d Azur',
    'La Réunion'
  ];
  departements: Departement[];
  departementsBazard = [
    {
      "departmentCode" : "",
      "departmentName" : "",
      "regionCode" : "",
      "regionName" : ""
    },
  {
    "departmentCode" : "01",
    "departmentName" : "Ain",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "02",
    "departmentName" : "Aisne",
    "regionCode" : "32",
    "regionName" : "Nord-Pas-de-Calais-Picardie"
  },
  {
    "departmentCode" : "03",
    "departmentName" : "Allier",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "04",
    "departmentName" : "Alpes-de-Haute-Provence",
    "regionCode" : "93",
    "regionName" : "Provence-Alpes-Côte d\'Azur"
  },
  {
    "departmentCode" : "05",
    "departmentName" : "Hautes-Alpes",
    "regionCode" : "93",
    "regionName" : "Provence-Alpes-Côte d\'Azur"
  },
  {
    "departmentCode" : "06",
    "departmentName" : "Alpes-Maritimes",
    "regionCode" : "93",
    "regionName" : "Provence-Alpes-Côte d\'Azur"
  },
  {
    "departmentCode" : "07",
    "departmentName" : "Ardèche",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "08",
    "departmentName" : "Ardennes",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "09",
    "departmentName" : "Ariège",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "10",
    "departmentName" : "Aube",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "11",
    "departmentName" : "Aude",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "12",
    "departmentName" : "Aveyron",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "13",
    "departmentName" : "Bouches-du-Rhône",
    "regionCode" : "93",
    "regionName" : "Provence-Alpes-Côte d\'Azur"
  },
  {
    "departmentCode" : "14",
    "departmentName" : "Calvados",
    "regionCode" : "28",
    "regionName" : "Normandie"
  },
  {
    "departmentCode" : "15",
    "departmentName" : "Cantal",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "16",
    "departmentName" : "Charente",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "17",
    "departmentName" : "Charente-Maritime",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "18",
    "departmentName" : "Cher",
    "regionCode" : "24",
    "regionName" : "Centre-Val de Loire"
  },
  {
    "departmentCode" : "19",
    "departmentName" : "Corrèze",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "21",
    "departmentName" : "Côte-d\'or",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "22",
    "departmentName" : "Côtes-d\'armor",
    "regionCode" : "53",
    "regionName" : "Bretagne"
  },
  {
    "departmentCode" : "23",
    "departmentName" : "Creuse",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "24",
    "departmentName" : "Dordogne",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "25",
    "departmentName" : "Doubs",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "26",
    "departmentName" : "Drôme",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "27",
    "departmentName" : "Eure",
    "regionCode" : "28",
    "regionName" : "Normandie"
  },
  {
    "departmentCode" : "28",
    "departmentName" : "Eure-et-Loir",
    "regionCode" : "24",
    "regionName" : "Centre-Val de Loire"
  },
  {
    "departmentCode" : "29",
    "departmentName" : "Finistère",
    "regionCode" : "53",
    "regionName" : "Bretagne"
  },
  {
    "departmentCode" : "2a",
    "departmentName" : "Corse-du-Sud",
    "regionCode" : "94",
    "regionName" : "Corse"
  },
  {
    "departmentCode" : "2b",
    "departmentName" : "Haute-Corse",
    "regionCode" : "94",
    "regionName" : "Corse"
  },
  {
    "departmentCode" : "30",
    "departmentName" : "Gard",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "31",
    "departmentName" : "Haute-Garonne",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "32",
    "departmentName" : "Gers",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "33",
    "departmentName" : "Gironde",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "34",
    "departmentName" : "Hérault",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "35",
    "departmentName" : "Ille-et-Vilaine",
    "regionCode" : "53",
    "regionName" : "Bretagne"
  },
  {
    "departmentCode" : "36",
    "departmentName" : "Indre",
    "regionCode" : "24",
    "regionName" : "Centre-Val de Loire"
  },
  {
    "departmentCode" : "37",
    "departmentName" : "Indre-et-Loire",
    "regionCode" : "24",
    "regionName" : "Centre-Val de Loire"
  },
  {
    "departmentCode" : "38",
    "departmentName" : "Isère",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "39",
    "departmentName" : "Jura",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "40",
    "departmentName" : "Landes",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "41",
    "departmentName" : "Loir-et-Cher",
    "regionCode" : "24",
    "regionName" : "Centre-Val de Loire"
  },
  {
    "departmentCode" : "42",
    "departmentName" : "Loire",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "43",
    "departmentName" : "Haute-Loire",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "44",
    "departmentName" : "Loire-Atlantique",
    "regionCode" : "52",
    "regionName" : "Pays de la Loire"
  },
  {
    "departmentCode" : "45",
    "departmentName" : "Loiret",
    "regionCode" : "24",
    "regionName" : "Centre-Val de Loire"
  },
  {
    "departmentCode" : "46",
    "departmentName" : "Lot",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "47",
    "departmentName" : "Lot-et-Garonne",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "48",
    "departmentName" : "Lozère",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "49",
    "departmentName" : "Maine-et-Loire",
    "regionCode" : "52",
    "regionName" : "Pays de la Loire"
  },
  {
    "departmentCode" : "50",
    "departmentName" : "Manche",
    "regionCode" : "28",
    "regionName" : "Normandie"
  },
  {
    "departmentCode" : "51",
    "departmentName" : "Marne",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "52",
    "departmentName" : "Haute-Marne",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "53",
    "departmentName" : "Mayenne",
    "regionCode" : "52",
    "regionName" : "Pays de la Loire"
  },
  {
    "departmentCode" : "54",
    "departmentName" : "Meurthe-et-Moselle",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "55",
    "departmentName" : "Meuse",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "56",
    "departmentName" : "Morbihan",
    "regionCode" : "53",
    "regionName" : "Bretagne"
  },
  {
    "departmentCode" : "57",
    "departmentName" : "Moselle",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "58",
    "departmentName" : "Nièvre",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "59",
    "departmentName" : "Nord",
    "regionCode" : "32",
    "regionName" : "Nord-Pas-de-Calais-Picardie"
  },
  {
    "departmentCode" : "60",
    "departmentName" : "Oise",
    "regionCode" : "32",
    "regionName" : "Nord-Pas-de-Calais-Picardie"
  },
  {
    "departmentCode" : "61",
    "departmentName" : "Orne",
    "regionCode" : "28",
    "regionName" : "Normandie"
  },
  {
    "departmentCode" : "62",
    "departmentName" : "Pas-de-Calais",
    "regionCode" : "32",
    "regionName" : "Nord-Pas-de-Calais-Picardie"
  },
  {
    "departmentCode" : "63",
    "departmentName" : "Puy-de-Dôme",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "64",
    "departmentName" : "Pyrénées-Atlantiques",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "65",
    "departmentName" : "Hautes-Pyrénées",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "66",
    "departmentName" : "Pyrénées-Orientales",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "67",
    "departmentName" : "Bas-Rhin",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "68",
    "departmentName" : "Haut-Rhin",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "69",
    "departmentName" : "Rhône",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "70",
    "departmentName" : "Haute-Saône",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "71",
    "departmentName" : "Saône-et-Loire",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "72",
    "departmentName" : "Sarthe",
    "regionCode" : "52",
    "regionName" : "Pays de la Loire"
  },
  {
    "departmentCode" : "73",
    "departmentName" : "Savoie",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "74",
    "departmentName" : "Haute-Savoie",
    "regionCode" : "84",
    "regionName" : "Auvergne-Rhône-Alpes"
  },
  {
    "departmentCode" : "75",
    "departmentName" : "Paris",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "76",
    "departmentName" : "Seine-Maritime",
    "regionCode" : "28",
    "regionName" : "Normandie"
  },
  {
    "departmentCode" : "77",
    "departmentName" : "Seine-et-Marne",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "78",
    "departmentName" : "Yvelines",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "79",
    "departmentName" : "Deux-Sèvres",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "80",
    "departmentName" : "Somme",
    "regionCode" : "32",
    "regionName" : "Nord-Pas-de-Calais-Picardie"
  },
  {
    "departmentCode" : "81",
    "departmentName" : "Tarn",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "82",
    "departmentName" : "Tarn-et-Garonne",
    "regionCode" : "76",
    "regionName" : "Languedoc-Roussillon-Midi-Pyrénées"
  },
  {
    "departmentCode" : "83",
    "departmentName" : "Var",
    "regionCode" : "93",
    "regionName" : "Provence-Alpes-Côte d\'Azur"
  },
  {
    "departmentCode" : "84",
    "departmentName" : "Vaucluse",
    "regionCode" : "93",
    "regionName" : "Provence-Alpes-Côte d\'Azur"
  },
  {
    "departmentCode" : "85",
    "departmentName" : "Vendée",
    "regionCode" : "52",
    "regionName" : "Pays de la Loire"
  },
  {
    "departmentCode" : "86",
    "departmentName" : "Vienne",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "87",
    "departmentName" : "Haute-Vienne",
    "regionCode" : "75",
    "regionName" : "Aquitaine-Limousin-Poitou-Charentes"
  },
  {
    "departmentCode" : "88",
    "departmentName" : "Vosges",
    "regionCode" : "44",
    "regionName" : "Alsace-Champagne-Ardenne-Lorraine"
  },
  {
    "departmentCode" : "89",
    "departmentName" : "Yonne",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "90",
    "departmentName" : "Territoire de Belfort",
    "regionCode" : "27",
    "regionName" : "Bourgogne-Franche-Comté"
  },
  {
    "departmentCode" : "91",
    "departmentName" : "Essonne",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "92",
    "departmentName" : "Hauts-de-Seine",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "93",
    "departmentName" : "Seine-Saint-Denis",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "94",
    "departmentName" : "Val-de-Marne",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "95",
    "departmentName" : "Val-d\'oise",
    "regionCode" : "11",
    "regionName" : "Ile-de-France"
  },
  {
    "departmentCode" : "971",
    "departmentName" : "Guadeloupe",
    "regionCode" : "01",
    "regionName" : "Guadeloupe"
  },
  {
    "departmentCode" : "972",
    "departmentName" : "Martinique",
    "regionCode" : "02",
    "regionName" : "Martinique"
  },
  {
    "departmentCode" : "973",
    "departmentName" : "Guyane",
    "regionCode" : "03",
    "regionName" : "Guyane"
  },
  {
    "departmentCode" : "974",
    "departmentName" : "La Réunion",
    "regionCode" : "04",
    "regionName" : "La Réunion"
  },
  {
    "departmentCode" : "976",
    "departmentName" : "Mayotte",
    "regionCode" : "06",
    "regionName" : "Mayotte"
  },
  {
    "departmentCode" : "987",
    "departmentName" : "Polynésie Française",
    "regionCode" : null,
    "regionName" : null
  },
  {
    "departmentCode" : "988",
    "departmentName" : "Nouvelle Calédonie",
    "regionCode" : null,
    "regionName" : null
  }
];
  periodicites = [
    'Annuelle',
    'Bi-Annuelle',
    'Biennale',
    'Biennale années impaires',
    'Biennale années paires'
  ]

  setDepartement(deps) {
    let tab: Departement[] = [];
    for (let dep of deps) {
      tab.push({
        nom: dep.departmentName,
        num: dep.departmentCode
      })
    }
    return tab;
  }

  getMois() {
    return this.mois;
  }

  getRegion() {
    return this.regions;
  }

  getDepartement() {
    this.departements = this.setDepartement(this.departementsBazard);
    return this.departements;
  }
  getDomaine(){
    return this.domaines;
  }
  getPeriodicite() {
    return this.periodicites;
  }
}
