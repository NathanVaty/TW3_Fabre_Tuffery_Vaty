import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageComponent } from './affichage/affichage.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CarteComponent } from './carte/carte.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { AjoutFestivalComponent } from './ajout-festival/ajout-festival.component';
import { SuppFestivalComponent } from './supp-festival/supp-festival.component';
import { EditFestivalComponent } from './edit-festival/edit-festival.component';
import { LoginComponent } from './login/login.component';
import { ManipDonneesService } from './manip-donnees.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {AdminConnect} from './en-tete/en-tete.component';
import {DialogRecherche} from './en-tete/en-tete.component';
import {AjoutFestival} from './en-tete/en-tete.component';
import {ConfirmationSupprimer} from './edit-festival/edit-festival.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
 import {MatNativeDateModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { LoginService } from './login.service';
import { InfoUtileService } from './info-utile.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    EnTeteComponent,
    FormulaireComponent,
    CarteComponent,
    AnalyseComponent,
    AjoutFestivalComponent,
    SuppFestivalComponent,
    EditFestivalComponent,
    LoginComponent,
    AdminConnect,
    DialogRecherche,
    AjoutFestival,
    ConfirmationSupprimer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    MatTabsModule
  ],
  entryComponents: [AdminConnect, DialogRecherche, AjoutFestival,ConfirmationSupprimer],
  providers: [ManipDonneesService,LoginService, InfoUtileService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr' }, //you can change useValue
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
