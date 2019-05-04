import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';
import { AnalyseService } from '../analyse.service';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import {Chart} from 'chart.js';

export interface stat {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  formStat: FormGroup;

  typeStat: stat[] = [
   {value: 'musique', viewValue: 'Type de musique'},
   {value: 'dept', viewValue: 'Departement'},
   {value: 'moisDeb', viewValue: 'Mois de debut'}
 ];

   // modifier le param pour qu'il vienne du formulaire
    public barChartLabels = this.addDataIntoLabelsBarParam('dept');
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
      {data:this.countDataBarParam('dept'),label:this.getTypeData('dept')}
    ];
    public barChartOptions = {
      scaleShowVerticalLines: false,
      scales: {
           yAxes: [{
               ticks: {
                   min: 0,
                   stepSize: 1
               }
           }],
         },
         responsive: true
    };

  constructor(private bd: ManipDonneesService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
   this.formStat = this.fb.group({
     selectStat: ['']
   });
  }

  ngOnInit() {

  }

  onSubmit() {
    var valueStat = this.formStat.value;
    var paramStat = valueStat['selectStat'];
    console.log("Valeur envoyer par le submit Object",valueStat);
    console.log("valuer string :", paramStat);

    this.barChartLabels = this.addDataIntoLabelsBarParam(paramStat);
    this.barChartData = [
      {data:this.countDataBarParam(paramStat), label:this.getTypeData(paramStat)}
    ];
    this.formStat.reset('');
  }

/* =================================================================== */
    addDataIntoLabelsBarParam(stat){
      let dataLabelsBar = [];
      switch(stat){
        case 'musique':
          //console.log("tentative bar chart");
          this.bd.tabDSub.subscribe((tab) => {
            let data = tab
            for (const i of Object.keys(data)) {
              if (this.barChartLabels.indexOf(data[i].domaine) == -1) {
                  dataLabelsBar.push(data[i].domaine);
                }
            }
            //console.log("Data labels Bar Chart : ", dataLabelsBar);
          });
          return dataLabelsBar;
        break;
        case 'dept':
          //console.log("tentative bar chart");
          this.bd.tabDSub.subscribe((tab) => {
            let data = tab
            for (const i of Object.keys(data)) {
              if (this.barChartLabels.indexOf(data[i].departement) == -1) {
                  dataLabelsBar.push(data[i].departement);
                }
            }
            //console.log("Data labels Bar Chart : ", dataLabelsBar);
          });
          return dataLabelsBar;
        break;
        case 'moisDeb':
          this.bd.tabDSub.subscribe((tab) => {
            let data = tab
            for (const i of Object.keys(data)) {
              if (this.barChartLabels.indexOf(data[i].mois_habituel_de_debut) == -1) {
                  dataLabelsBar.push(data[i].mois_habituel_de_debut);
                }
            }
            //console.log("Data labels Bar Chart : ", dataLabelsBar);
          });
          return dataLabelsBar;
        break;
      }
  }

  countDataBarParam(stat){
    let nbLabelsBar = [];
    switch(stat){
      case 'musique':
        //console.log("tentative count bar chart");
          this.bd.tabDSub.subscribe((tab) => {
              let data = tab
                for (let values of Array.from(this.barChartLabels.values()) ) {
                  //console.log("valeur de values :", values);
                  var nbOccu = 0
                  //console.log("nbOccu barChart :", nbOccu);
                  for (const i of Object.keys(data)){
                    if (values == data[i].domaine) {
                      nbOccu = nbOccu + 1;
                    }
                  }
                  nbLabelsBar.push(nbOccu);
                  //console.log("Tab Nb occu bar chart", nbLabelsBar);
                }
          });
        return nbLabelsBar;
      break;
      case 'dept':
        //console.log("tentative count bar chart");
          this.bd.tabDSub.subscribe((tab) => {
              let data = tab
                for (let values of Array.from(this.barChartLabels.values()) ) {
                  //console.log("valeur de values :", values);
                  var nbOccu = 0
                  //console.log("nbOccu barChart :", nbOccu);
                  for (const i of Object.keys(data)){
                    if (values == data[i].departement) {
                      nbOccu = nbOccu + 1;
                    }
                  }
                  nbLabelsBar.push(nbOccu);
                  //console.log("Tab Nb occu bar chart", nbLabelsBar);
                }
          });
        return nbLabelsBar;
      break;
      case 'moisDeb':
        //console.log("tentative bar chart");
          this.bd.tabDSub.subscribe((tab) => {
              let data = tab
                for (let values of Array.from(this.barChartLabels.values()) ) {
                  //console.log("valeur de values :", values);
                  var nbOccu = 0
                  //console.log("nbOccu barChart :", nbOccu);
                  for (const i of Object.keys(data)){
                    if (values == data[i].mois_habituel_de_debut) {
                      nbOccu = nbOccu + 1;
                    }
                  }
                  nbLabelsBar.push(nbOccu);
                  //console.log("Tab Nb occu bar chart", nbLabelsBar);
                }
          });
        return nbLabelsBar;
      break;
    }
  }

  getTypeData(stat){
    switch(stat){
      case('musique'):
        return "Type de musique";
      break;
      case('dept'):
        return "departement";
      break;
      case('moisDeb'):
      return "Mois de début"
      break;
    }
  }

}
