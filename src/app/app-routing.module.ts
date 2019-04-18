import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AffichageComponent} from './affichage/affichage.component';

const routes: Routes = [
  {
    path: '/', component: AffichageComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
