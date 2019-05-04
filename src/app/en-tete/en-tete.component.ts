import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginService } from '../login.service';
import { InfoUtileService } from '../info-utile.service';
import {ManipDonneesService} from '../manip-donnees.service';

import { InfoFestival } from '../Infofest';

export interface AdminConnectData {
  ndc: string;
  mdp: string;
};


@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit  {

  mois;

  region;

  ndc: string;
  mdp: string;
  connect; // Variable False => invite True => Admin

  constructor(public dialog: MatDialog,
              private login: LoginService,
              private info: InfoUtileService) { }


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
      width: '500px',
      height:'600px'
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
    this.mois = this.info.getMois();
    this.region = this.info.getRegion();
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
export class DialogRecherche implements OnInit {
  mois;
  region;
  departements;
  domaines;
  angForm: FormGroup;
  formCt = new FormControl('',[]);
  clickAnnul = false;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogRecherche>,
    private info: InfoUtileService,
    private bd: ManipDonneesService
  ){
    this.createForm();
  }

  createForm() {
   this.angForm = this.fb.group({
     nom_de_la_manifestation: [''],
     commune_principale: [''],
     region:[''],
     nom_departement: [''],
     domaine: [''],
     mois_habituel_de_debut: ['']

   });
  }

  onNoClick(): void {
    this.clickAnnul = true;
    this.dialogRef.close();
  }

  ngOnInit(){
    this.mois = this.info.getMois();
    this.region = this.info.getRegion();
    this.departements = this.info.getDepartement();
    this.domaines = this.info.getDomaine();
  }
  onSubmit(){
    if (this.clickAnnul == false) {
      this.bd.rechercheAvancee(this.angForm.value);
    }
    this.clickAnnul = false;
    this.dialogRef.close();
  }

}

@Component({
  selector: 'ajout-festival',
  templateUrl: 'ajoutFestival.html',
})
export class AjoutFestival implements OnInit {

  formAjout: FormGroup;
  mois;
  region;
  departements;
  domaines;
  periodicites;
  annuler = false;

  festi: InfoFestival;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AjoutFestival>,
    private info: InfoUtileService,
    private bd: ManipDonneesService){
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
        date_de_creation:[{}, Validators.required],
        date_de_debut: [{},Validators.required],
        date_de_fin: [{},Validators.required],
        site_web:['', ],
        periodicite: ['',Validators.required],
        coordonnees_insee_x:['',Validators.required],
        coordonnees_insee_y:['', Validators.required],
        commentaires: ['', ]
      });
    }

    ngOnInit(){
      this.mois = this.info.getMois();
      this.region = this.info.getRegion();
      this.departements = this.info.getDepartement();
      this.domaines = this.info.getDomaine();
      this.periodicites = this.info.getPeriodicite();
    }

    onSubmit() {
      if(this.annuler == false) {
        this.bd.ajoutFestival(this.formAjout.value);
      }
      this.annuler = false;
      this.dialogRef.close();

    }
    onNoClick(): void {
      this.annuler = true;
      this.dialogRef.close();
    }

}
