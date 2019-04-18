import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
