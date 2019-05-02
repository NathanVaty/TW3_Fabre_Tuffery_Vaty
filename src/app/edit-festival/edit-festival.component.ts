import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { InfoUtileService } from '../info-utile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-festival',
  templateUrl: './edit-festival.component.html',
  styleUrls: ['./edit-festival.component.css']
})
export class EditFestivalComponent implements OnInit {

  mois;
  domaines;
  periodicites;
  region ;
  formAjout: FormGroup;

  constructor(private fb: FormBuilder,public dialog: MatDialog, private infoUtileService : InfoUtileService) {
    this.formAjout = this.fb.group({
      code_insee: ['', Validators.required],
      nom_de_la_manifestation:['', Validators.required],
      commune_principale:['', Validators.required],
      code_postal:['', Validators.required],
      nom_departement:['', Validators.required],
      region: ['', Validators.required],
      domaine: ['', Validators.required],
      mois_habituel_de_debut: ['', Validators.required],
      complement_domaine:['', ],
      date_de_creation:[new Date(), Validators.required],
      date_de_debut: [new Date(),Validators.required],
      date_de_fin: [new Date(),Validators.required],
      site_web:['', ],
      periodicite: ['',Validators.required],
      coordonnees_insee_x:['',Validators.required],
      coordonnees_insee_y:['', Validators.required],
    });
  }

  confirmationSupprimer(): void {
    console.log("confirmation supprimer open");
      const dialogRef = this.dialog.open(ConfirmationSupprimer, {
      width: '300px',
      height:'225px'
    });
    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(result => {
     console.log('canfirmation supprimer closed');
   });
  }


  ngOnInit() {
    this.mois = this.infoUtileService.getMois();
    this.region = this.infoUtileService.getRegion();
    this.domaines = this.infoUtileService.getDomaine();
    this.periodicites = this.infoUtileService.getPeriodicite();
  }

}

@Component({
  selector: 'confirmation-supprimer',
  templateUrl: 'confirmationSupprimer.html',
})
export class ConfirmationSupprimer {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationSupprimer>
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
