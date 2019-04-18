import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';

import * as L from "leaflet";


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor(private data: ManipDonneesService) {
    console.log("carte component");
  }

  ngOnInit() {
    /* Création de la carte */
    /* Coordonnée sur un zoom de la france */
    var myMap = L.map('mapId').setView([43.9211, 2.1377], 1);

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:'Carte des festivals',
      maxZoom: 20,
    }).addTo(myMap);

    /* Appel de la fonction getDonnees dans un tableau de festival */
    var festivalList = this.data.getDonnees();

    /* Création d'un marqueur */
    const myMark = L.icon({
      iconUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    console.log("ajout des festivals sur la carte");
    /* Pour chaque festival on ajoute un marqueur */
    for (var i in festivalList){
      /* Création de variable pour le marqueur */
      var latitude = festivalList[i].coordonnees_insee[0];
      var longitude = festivalList[i].coordonnees_insee[1];
      var name = festivalList[i].nom_de_la_manifestation;

      /* Affichage des marqueur */
      L.marker([latitude, longitude], {icon: myMark}).bindPopup(name).addTo(myMap);
    }
  }

}
