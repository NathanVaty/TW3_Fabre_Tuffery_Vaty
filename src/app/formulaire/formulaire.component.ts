import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

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
  domaines = [''];
  numDep = [];
  departements: Departement[] = [
    {num: '', nom: ''}
  ];
  clickAnnul = false;
  donnees: any = {};
  angForm: FormGroup;
  formCt = new FormControl('',[]);
  constructor(private bd: ManipDonneesService,private fb: FormBuilder) {
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
    this.bd.tabDSub.subscribe((tab) => {
      let data = tab;
      for (const i of Object.keys(data)) {
        if (this.domaines.indexOf(data[i].domaine) == -1) {
            this.domaines.push(data[i].domaine);
        }
        if (this.numDep.indexOf(data[i].departement) == -1) {
          this.departements.push({
            num: data[i].departement,
            nom: data[i].nom_departement
          });
          this.numDep.push(data[i].departement);
        }
      }
    });
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
