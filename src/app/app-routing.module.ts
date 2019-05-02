import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AffichageComponent} from './affichage/affichage.component';
import {EditFestivalComponent} from './edit-festival/edit-festival.component';

const routes: Routes = [
  {
    path: '', component: AffichageComponent },
    { path: 'modif/:id', component: EditFestivalComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
