import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

import * as L from "leaflet";


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  marqueurs = L.layerGroup();
  constructor(private bd: ManipDonneesService) {
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

    let festivalList;
    this.bd.tabDSub.subscribe((value) => {
       festivalList = value;
      console.log(festivalList);


      /* Création d'un marqueur */
      const myMark = L.icon({
        iconUrl :'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });

      this.marqueurs.clearLayers();

      /* Pour chaque festival on ajoute un marqueur */
      for (let festival of festivalList){
        /* Création de variable pour le marqueur */
        /* Affichage des marqueur */
          L.marker([festival.coordonnees_insee[0], festival.coordonnees_insee[1]], {icon: myMark})
          .bindPopup(festival.nom_de_la_manifestation)
          .addTo(this.marqueurs);


        // L.marker([festival.coordonnees_insee[0], festival.coordonnees_insee[1]], {icon: myMark})
        // .addTo(mapFestival)
        // .bindPopup(festival.nom_de_la_manifestation);
      }
      mapFestival.addLayer(this.marqueurs);

    });



  }

}
