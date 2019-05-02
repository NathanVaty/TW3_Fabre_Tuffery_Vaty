import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { InfoUtileService } from '../info-utile.service';

@Component({
  selector: 'app-edit-festival',
  templateUrl: './edit-festival.component.html',
  styleUrls: ['./edit-festival.component.css']
})
export class EditFestivalComponent implements OnInit {

  lesMois : mois;

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

  constructor(public dialog: MatDialog) { }

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
    this.getMois();
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
