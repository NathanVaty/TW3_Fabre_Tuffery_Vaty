import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { InfoUtileService } from '../info-utile.service';

export interface Departement {
  num: string;
  nom: string;
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {
  mois;
  departements;
  domaines;

  clickAnnul = false;
  donnees: any = {};
  angForm: FormGroup;
  formCt = new FormControl('',[]);
  constructor(private bd: ManipDonneesService,private fb: FormBuilder, private info: InfoUtileService) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      domaine: [''],
       departement: [''],
       mois_habituel_de_debut: ['']
    });
  }

  ngOnInit() {
    this.mois = this.info.getMois();
    this.departements = this.info.getDepartement();
    this.domaines = this.info.getDomaine();
  }
  reset() {
    this.clickAnnul = true;
  }
  onSubmit() {
    if (this.clickAnnul == false) {
      this.bd.rechercheRapide(this.angForm.value);
    }
    this.clickAnnul = false;
    this.angForm.reset('');
  }

}
