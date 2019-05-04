import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  constructor(private bd: ManipDonneesService) { }

  ngOnInit() {
    //var p = this.bd.getDonnees();
    //console.log(p);
    this.bd.emitTab();
  }

}
