import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-festival',
  templateUrl: './edit-festival.component.html',
  styleUrls: ['./edit-festival.component.css']
})
export class EditFestivalComponent implements OnInit {

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

  region =[
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

  constructor() { }

  ngOnInit() {
  }

}
