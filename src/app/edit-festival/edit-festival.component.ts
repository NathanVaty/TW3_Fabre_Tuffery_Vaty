import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { InfoUtileService } from '../info-utile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManipDonneesService } from '../manip-donnees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { InfoFestival } from '../Infofest';
import { LoginService } from '../login.service';

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
  departements;
  formModif: FormGroup;

  festival: InfoFestival;

  toSupp = false;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private infoUtileService : InfoUtileService,
          private bd: ManipDonneesService,
          private route: ActivatedRoute,
          private goback: Router,
          private login: LoginService) {
    this.formModif = this.fb.group({
      code_insee:['',Validators.required],
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

  confirmationSupprimer(): void {
    this.toSupp = true;
    console.log("confirmation supprimer open");
      const dialogRef = this.dialog.open(ConfirmationSupprimer, {
      width: '300px',
      height:'225px'
    });
    /* Lors de la fermeture de la page */
    dialogRef.afterClosed().subscribe(result => {
     if(result == 'supp') {
       this.bd.deteleFestival(this.festival.code_insee);
       this.goback.navigate(['','']);
       this.login.connexion({
         ndc:'admin',
         mdp: 'admin'
       });
     }
   });
  }
  formatDate(val) {
    if(val._i != null) {
      return val._i.year + "-"
      + ((val._i.month + 1) < 10? "0"+(val._i.month + 1) + "-"
      :(val._i.month + 1) + "-")
      + ((val._i.date + 1) < 10? "0"+(val._i.date + 1)
      :(val._i.date + 1))
    } else {
      return val;
    }
  }
  retour() {
    this.toSupp = true;
    this.goback.navigate(['','']);
    this.login.connexion({
      ndc:'admin',
      mdp: 'admin'
    });
  }
  onSubmit(){
    if(this.toSupp == false) {
      this.formModif.get('date_de_creation').setValue(this.formatDate(this.formModif.value['date_de_creation']));
      this.formModif.get('date_de_debut').setValue(this.formatDate(this.formModif.value['date_de_debut']));
      this.formModif.get('date_de_fin').setValue(this.formatDate(this.formModif.value['date_de_fin']));
      //this.bd.updateFestival(this.formModif.value);
      this.bd.updateFestival(this.formModif.value);
      this.goback.navigate(['','']);
      this.login.connexion({
        ndc:'admin',
        mdp: 'admin'
      });
    }
    this.toSupp = false;

  }

  ngOnInit() {
    this.departements = this.infoUtileService.getDepartement();
    this.mois = this.infoUtileService.getMois();
    this.region = this.infoUtileService.getRegion();
    this.domaines = this.infoUtileService.getDomaine();
    this.periodicites = this.infoUtileService.getPeriodicite();
    this.festival = {
      code_insee: '',
      code_postal: '',
      commentaires: '',
      commune_principale: '',
      complement_domaine: '',
      coordonnees_insee: '',
      date_de_creation: '',
      date_de_debut: '',
      date_de_fin: '',
      departement: '',
      domaine: '',
      libelle_commune_pour_calcul_cp_insee: '',
      mois_habituel_de_debut: '',
      mois_indicatif_en_chiffre_y_compris_double_mois: '',
      nom_de_la_manifestation: '',
      nom_departement: '',
      periodicite: '',
      region: '',
      site_web: ''
    };
    const code = +this.route.snapshot.paramMap.get('id');
    this.bd.getUnFestival(code).then((value: InfoFestival) => {
      console.log(value);
        this.festival = {
          code_insee: value.code_insee,
          code_postal: value.code_postal,
          commentaires: value.commentaires != undefined ? value.commentaires : '',
          commune_principale: value.commune_principale,
          complement_domaine: value.complement_domaine != undefined ? value.complement_domaine : '',
          coordonnees_insee: value.coordonnees_insee,
          date_de_creation: value.date_de_creation,
          date_de_debut: value.date_de_debut,
          date_de_fin: value.date_de_fin,
          departement: value.departement,
          domaine: value.domaine,
          libelle_commune_pour_calcul_cp_insee: value.libelle_commune_pour_calcul_cp_insee,
          mois_habituel_de_debut: value.mois_habituel_de_debut,
          mois_indicatif_en_chiffre_y_compris_double_mois: value.mois_indicatif_en_chiffre_y_compris_double_mois,
          nom_de_la_manifestation: value.nom_de_la_manifestation,
          nom_departement: value.nom_departement,
          periodicite: value.periodicite != undefined ? value.periodicite : '',
          region: value.region,
          site_web: value.site_web != undefined ? value.site_web : ''
        };
        this.formModif.get('code_insee').setValue(value.code_insee);
        let j;
        for (j = 0; this.departements[j].nom != value.nom_departement; j++) {}
          this.formModif.get('nom_departement').setValue(this.departements[j]);

          let i;
        for (i = 0; this.region[i] != value.region; i++) {}
        this.formModif.get('region').setValue(this.region[i]);

        for (i = 0; this.domaines[i] != value.domaine; i++) {}
        this.formModif.get('domaine').setValue(this.domaines[i]);

        for (i = 0; this.mois[i] != value.mois_habituel_de_debut;i++){}
        this.formModif.get('mois_habituel_de_debut').setValue(this.mois[i]);

        if(value.periodicite!= null) {
          for (i = 0; this.periodicites[i] != value.periodicite; i++){}
            this.formModif.get('periodicite').setValue(this.periodicites[i]);
        }
    });
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
  notSupp(){
    this.dialogRef.close('notSupp');
  }
  supp(): void {
    this.dialogRef.close('supp');
  }

}
