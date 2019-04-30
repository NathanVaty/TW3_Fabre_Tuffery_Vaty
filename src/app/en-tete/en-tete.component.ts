import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

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


  //======AJOUTER UN FESTIVAL================

  ajoutFestival(): void {
    console.log("Dialog ajout open");
      const dialogRef = this.dialog.open(AjoutFestival, {
      width: '500px',
      height:'600px'
    });
    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(result => {
     console.log('Dialog ajout closed');
   });
  }

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
      height: '400px'
      //data: {ndc: this.ndc, mdp: this.mdp, connect:this.connect}
    });


    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(data => {
     console.log("envoie data :", data);
     console.log('Dialog connect admin closed');
     //this.ndc = result;
     //this.mdp = result;
     //console.log("ndc :", this.ndc);
     //console.log("mdp :", this.mdp);
   });
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

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminConnect>){
      this.formLogin = this.formBuilder.group({
        ndc:['', Validators.required],
        mdp:['', Validators.required]
      });
    }
    //@Inject(MAT_DIALOG_DATA) public data: AdminConnectData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    // Fermeture de la popup connectionAdmin ==> renvoie des valeurs au Component pere (en-tete.component)
    this.dialogRef.close(JSON.stringify(this.formLogin.value));
    console.log(JSON.stringify(this.formLogin.value));
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

@Component({
  selector: 'ajout-festival',
  templateUrl: 'ajoutFestival.html',
})
export class AjoutFestival {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AjoutFestival>){
      this.formLogin = this.formBuilder.group({
        ndc:['', Validators.required],
        mdp:['', Validators.required]
      });
    }

}
