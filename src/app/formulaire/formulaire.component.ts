import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

  foods: Food[] = [
     {value: 'steak-0', viewValue: 'Steak'},
     {value: 'pizza-1', viewValue: 'Pizza'},
     {value: 'tacos-2', viewValue: 'Tacos'}
   ];

   mois  =[
     'janvier',
     'février',
     'mars',
     'avril',
     'mai',
     'juin',
     'juillet',
     'août',
     'septembre',
     'octobre',
     'novembre',
     'decembre'
   ];
  constructor() { }

  ngOnInit() {
  }

}
