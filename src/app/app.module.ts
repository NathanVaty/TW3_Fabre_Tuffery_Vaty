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
    LoginComponent
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
    MatInputModule
  ],
  providers: [ManipDonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
