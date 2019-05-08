import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import { LoginService } from '../login.service';

import * as L from "leaflet";


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  marqueurs = L.layerGroup();
  connect;
  constructor(private bd: ManipDonneesService,
              private login: LoginService) {
  }

  ngOnInit() {
    this.bd.emitTab();
    /* Création de la carte */
    /* Coordonnée sur un zoom de la france */
    var mapFestival = L.map('mapId').setView([47.391, 1.000],5);

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:'Carte des festivals',
      maxZoom: 20,
    }).addTo(mapFestival);

    let festivalList;
    festivalList = this.bd.tabD;
    if (festivalList != undefined && festivalList.length != 0) {
      console.log("if");
      this.connect = this.login.isAdmin;
      /* Création d'un marqueur */
      const myMark = L.icon({
        iconUrl :'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });

      this.marqueurs.clearLayers();

      /* Pour chaque festival on ajoute un marqueur */
      for (let festival of festivalList){
        let texteFest = "Nom: " + festival.nom_de_la_manifestation + "<br>"
                    + "Début: " + festival.date_de_debut + "<br>"
                    + "Fin: " + festival.date_de_fin + "<br>";
                    texteFest = (festival.site_web != null && festival.site_web != "") ?
                      texteFest + "Site web: " + "<a href='"+ (festival.site_web.charAt(0) == 'h'  ? festival.site_web : "http://"+festival.site_web ) + "' target='_blank'>" + festival.site_web + "</a><br>" :  texteFest;
                    texteFest = this.connect ?
                  texteFest + "<a href='/modif/"+ festival.code_insee + "'>Modifier/Supprimer</a>"
                    : texteFest;
        /* Création de variable pour le marqueur */
        /* Affichage des marqueur */
        if (festival.coordonnees_insee != undefined) {
          L.marker([festival.coordonnees_insee[0], festival.coordonnees_insee[1]], {icon: myMark})
          .bindPopup(texteFest)
          .addTo(this.marqueurs);
        }
      }
      mapFestival.addLayer(this.marqueurs);
    }

    this.login.adminSub.subscribe((value) => {
      this.connect = value;

      /* Création d'un marqueur */
      const myMark = L.icon({
        iconUrl :'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });

      this.marqueurs.clearLayers();

      /* Pour chaque festival on ajoute un marqueur */
      for (let festival of festivalList){
        let texteFest = "Nom: " + festival.nom_de_la_manifestation + "<br>"
                    + "Début: " + festival.date_de_debut + "<br>"
                    + "Fin: " + festival.date_de_fin + "<br>";
                    texteFest = (festival.site_web != null && festival.site_web != "") ?
                      texteFest + "Site web: " + "<a href='"+ festival.site_web + "' target='_blank'>" + festival.site_web + "</a><br>" :  texteFest;
                    texteFest = this.connect ?
                  texteFest + "<a href='/modif/"+ festival.code_insee + "'>Modifier/Supprimer</a>"
                    : texteFest;

        /* Création de variable pour le marqueur */
        /* Affichage des marqueur */
        if (festival.coordonnees_insee != undefined) {
          L.marker([festival.coordonnees_insee[0], festival.coordonnees_insee[1]], {icon: myMark})
          .bindPopup(texteFest)
          .addTo(this.marqueurs);
        }
        // L.marker([festival.coordonnees_insee[0], festival.coordonnees_insee[1]], {icon: myMark})
        // .addTo(mapFestival)
        // .bindPopup(festival.nom_de_la_manifestation);
      }
      mapFestival.addLayer(this.marqueurs);
    });


    this.bd.tabDSub.subscribe((value) => {
       festivalList = value;
       console.log('sub');

      /* Création d'un marqueur */
      const myMark = L.icon({
        iconUrl :'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });

      this.marqueurs.clearLayers();


      /* Pour chaque festival on ajoute un marqueur */
      for (let festival of festivalList){
        let texteFest = "Nom: " + festival.nom_de_la_manifestation + "<br>"
                    + "Début: " + festival.date_de_debut + "<br>"
                    + "Fin: " + festival.date_de_fin + "<br>";
                    texteFest = (festival.site_web != null && festival.site_web != "") ?
                      texteFest + "Site web: " + "<a href='"+ (festival.site_web.charAt(0) == 'h'  ? festival.site_web : "http://"+festival.site_web ) + "' target='_blank'>" + festival.site_web + "</a><br>" :  texteFest;
                    texteFest = this.connect ?
                  texteFest + "<a href='/modif/"+ festival.code_insee + "'>Modifier/Supprimer</a>"
                    : texteFest;
        /* Création de variable pour le marqueur */
        /* Affichage des marqueur */
        if (festival.coordonnees_insee != undefined) {
          L.marker([festival.coordonnees_insee[0], festival.coordonnees_insee[1]], {icon: myMark})
          .bindPopup(texteFest)
          .addTo(this.marqueurs);
        }
      }
      mapFestival.addLayer(this.marqueurs);

    });


  }
}
