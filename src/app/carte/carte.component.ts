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
    var mapFestival = L.map('mapId').setView([47.391, 1.000],5);

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:'Carte des festivals',
      maxZoom: 20,
    }).addTo(mapFestival);

    /* Appel de la fonction getDonnees dans un tableau de festival */
    let festivalList = this.data.getDonnees();

    /* Création d'un marqueur */
    const myMark = L.icon({
      iconUrl :'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    console.log("ajout des festivals sur la carte");
    console.log("avant le for");
    /* Pour chaque festival on ajoute un marqueur */
    for (let i of festivalList){
      console.log("coucou je suis dans le for");
      console.log(festivalList[i].coordonnees_insee);
      /* Création de variable pour le marqueur */
      //var latitude = festivalList[i].coordonnees_insee[0];
      //var longitude = festivalList[i].coordonnees_insee[1];
      //var name = festivalList[i].nom_de_la_manifestation;

      /* Affichage des marqueur */
      L.marker([festivalList[i].coordonnees_insee[0], festivalList[i].coordonnees_insee[1]], {icon: myMark})
      .addTo(mapFestival)
      .bindPopup(festivalList[i].nom_de_la_manifestation);
      //L.marker([latitude, longitude], {icon: myMark}).bindPopup(name).addTo(myMap);
    }

    console.log("on a finis la generation de la carte");

  }

}
