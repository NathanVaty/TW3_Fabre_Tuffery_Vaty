import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';

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
  connect: boolean; // Variable False => invite True => Admin

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
      width: '400px',
      height: '400px',
      data: {ndc: this.ndc, mdp: this.mdp, connect:this.connect}
    });


    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(data => {
     console.log('Dialog connect admin closed');
     console.log("affichage saisieDialog : ", data);
     console.log("verifConnection :");
     //this.ndc = result;
     //this.mdp = result;
     //console.log("ndc :", this.ndc);
     //console.log("mdp :", this.mdp);
   });
  }
}
// ===================================================================

@Component({
  selector: 'admin-connect',
  templateUrl: 'adminConnect.html',
})
export class AdminConnect {

  ndc: string;
  mdp: string;

  constructor(
    public dialogRef: MatDialogRef<AdminConnect>,
    @Inject(MAT_DIALOG_DATA) public data: AdminConnectData) {
      console.log("donnee : ",data);
    }

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
