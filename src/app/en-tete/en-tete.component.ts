import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface AdminConnectData {
  ndc: string;
  mdp: string;
}

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent {

  ndc: string;
  mdp: string;

  constructor(public dialog: MatDialog) { }

  //======RECHERCHE================

  rechercheAvancee(): void {
    console.log("Dialog recherche open");
      const dialogRef = this.dialog.open(DialogRecherche, {
      width: '400px',
      height:'400px'
    });
    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(result => {
     console.log('Dialog recherche closed');
   });
  }



  //======CONNEXION================

  connectionAdmin(): void {
    console.log("Dialog connect admin open");
      const dialogRef = this.dialog.open(AdminConnect, {
      width: '250px',
      height:'100px',
      data: {ndc: this.ndc, mdp: this.mdp}
    });
    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(result => {
     console.log('Dialog connect admin closed');
     this.mdp = result;
   });
  }

}
// ===================================================================

@Component({
  selector: 'admin-connect',
  templateUrl: 'adminConnect.html',
})
export class AdminConnect {

  constructor(
    public dialogRef: MatDialogRef<AdminConnect>,
    @Inject(MAT_DIALOG_DATA) public data: AdminConnectData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-recherche',
  templateUrl: 'dialogRecherche.html',
})
export class DialogRecherche {

  constructor(
    public dialogRef: MatDialogRef<DialogRecherche>
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
