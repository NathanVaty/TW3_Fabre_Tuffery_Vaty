import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
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

  ndc: string;
  mdp: string;
  connect; // Variable False => invite True => Admin

  constructor(public dialog: MatDialog,
              private login: LoginService) { }


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

@Component({
  selector: 'ajout-festival',
  templateUrl: 'ajoutFestival.html',
})
export class AjoutFestival {

  formAjout: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AjoutFestival>){
      this.formAjout = this.fb.group({
        nom_de_la_manifestation:['', Validators.required],
        commune_principale:['', Validators.required],
        code_postal:['', Validators.required],
        nom_departement:['', Validators.required],
        complement_domaine:['', Validators.required],
        date_de_creation:['', Validators.required],
        site_web:['', Validators.required],
        code_insee:['', Validators.required],
        coordonnees_insee_x:['',Validators.required],
        coordonnees_insee_y:['', Validators.required],
      });
    }

}
