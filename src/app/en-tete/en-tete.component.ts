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

  connectionAdmin(): void {
    console.log("Dialog connect admin open");
      const dialogRef = this.dialog.open(adminConnect, {
      width: '250px',
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
export class adminConnect {

  constructor(
    public dialogRef: MatDialogRef<adminConnect>,
    @Inject(MAT_DIALOG_DATA) public data: AdminConnectData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
