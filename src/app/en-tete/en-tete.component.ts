import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';


export interface AdminConnectData {
  ndc: string;
  mdp: string;
}

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit  {

  ndc: string;
  mdp: string;
  connect; // Variable False => invite True => Admin

  constructor(public dialog: MatDialog,
              private login: LoginService) { }

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

  ngOnInit(){
    this.login.adminSub.subscribe((value) => {
      this.connect = value;
    });
  }


  //======CONNEXION================

  connectionAdmin(): void {
    //console.log("Dialog connect admin open");
      const dialogRef = this.dialog.open(AdminConnect, {
      width: '400px',
      height: '400px'
    });

    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(data => {
   });
  }

  deconnexion() {
    this.login.deconnexion();
  }
}
// ===================================================================

// Component admin dialog
@Component({
  selector: 'admin-connect',
  templateUrl: 'adminConnect.html',
})
export class AdminConnect {

  formLogin: FormGroup;

  quitter = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminConnect>,
    private login: LoginService){
      this.formLogin = this.formBuilder.group({
        ndc:['', Validators.required],
        mdp:['', Validators.required]
      });
    }
    //@Inject(MAT_DIALOG_DATA) public data: AdminConnectData) {}

  onNoClick(): void {
    this.quitter = true;
  }

  submit() {
    if(this.quitter == false) {
      this.login.connexion(this.formLogin.value);
    }
    this.quitter = false;
    // Fermeture de la popup connectionAdmin ==> renvoie des valeurs au Component pere (en-tete.component)
    this.dialogRef.close(JSON.stringify(this.formLogin.value));
    //alert(JSON.stringify(this.formLogin.value));
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
