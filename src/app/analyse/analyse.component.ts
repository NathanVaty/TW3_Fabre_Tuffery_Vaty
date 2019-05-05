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

    label = 'musique';
   // modifier le param pour qu'il vienne du formulaire
    public barChartLabels = [];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData;
    public doughnut = 'doughnut';
    //= [
    //   {data:this.countDataBarParam('musique'),label:this.getTypeData('musique')}
    // ];

    donnees;
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

  constructor(private bd: ManipDonneesService, private fb: FormBuilder, private analyse: AnalyseService) {
    this.createForm();
  }

  createForm() {
   this.formStat = this.fb.group({
     selectStat: ['', Validators.required]
   });
  }

  ngOnInit() {
    this.donnees = this.bd.tabD;
    if (this.donnees != undefined && this.donnees.length != 0) {
      console.log(this.donnees);
      this.barChartLabels = this.addDataIntoLabelsBarParam(this.label,this.donnees);
      console.log(this.barChartLabels);
      this.barChartData = [
        {data:this.countDataBarParam(this.label, this.donnees), label:this.getTypeData(this.label)}
      ];
    }

    this.bd.tabDSub.subscribe((tab) => {
      this.donnees = tab;
      this.barChartLabels = this.addDataIntoLabelsBarParam(this.label,this.donnees);
      console.log(this.barChartLabels);
      this.barChartData = [
        {data:this.countDataBarParam(this.label, this.donnees), label:this.getTypeData(this.label)}
      ];
      //console.log("Data labels Bar Chart : ", dataLabelsBar);
    });
  }

  onSubmit() {
    var valueStat = this.formStat.value;
    var paramStat = valueStat['selectStat'];
    console.log("Valeur envoyer par le submit Object",valueStat);
    console.log("valuer string :", paramStat);

    this.label = paramStat;
    this.barChartLabels = this.addDataIntoLabelsBarParam(paramStat,this.donnees);
    this.barChartData = [
      {data:this.countDataBarParam(paramStat, this.donnees), label:this.getTypeData(paramStat)}
    ];
  }

/* =================================================================== */
    addDataIntoLabelsBarParam(label,stat){
      let dataLabelsBar = [];
      switch(label){
        case 'musique':
          //console.log("tentative bar chart");
          for (const i of Object.keys(stat)) {
            if (dataLabelsBar.indexOf(stat[i].domaine) == -1) {
              dataLabelsBar.push(stat[i].domaine);
            }
          }
          return dataLabelsBar;
        break;
        case 'dept':
          //console.log("tentative bar chart");
          for (const i of Object.keys(stat)) {
            if (dataLabelsBar.indexOf(stat[i].nom_departement) == -1) {
              dataLabelsBar.push(stat[i].nom_departement);
            }
          }

          return dataLabelsBar;
        break;
        case 'moisDeb':
        for (const i of Object.keys(stat)) {
          if (dataLabelsBar.indexOf(stat[i].mois_habituel_de_debut) == -1) {
            dataLabelsBar.push(stat[i].mois_habituel_de_debut);
          }
        }
          return dataLabelsBar;
        break;
      }
  }

  countDataBarParam(label,data){
    let nbLabelsBar = [];
    switch(label){
      case 'musique':
        //console.log("tentative count bar chart");
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
        return nbLabelsBar;
      break;
      case 'dept':
        //console.log("tentative count bar chart");
                for (let values of Array.from(this.barChartLabels.values()) ) {
                  //console.log("valeur de values :", values);
                  var nbOccu = 0
                  //console.log("nbOccu barChart :", nbOccu);
                  for (const i of Object.keys(data)){
                    if (values == data[i].nom_departement) {
                      nbOccu = nbOccu + 1;
                    }
                  }
                  nbLabelsBar.push(nbOccu);
                  //console.log("Tab Nb occu bar chart", nbLabelsBar);
                }
        return nbLabelsBar;
      break;
      case 'moisDeb':
        //console.log("tentative bar chart");
                for (let values of Array.from(this.barChartLabels.values()) ) {
                  //console.log("valeur de values :", values);
                  var nbOccu = 0;
                  //console.log("nbOccu barChart :", nbOccu);
                  for (const i of Object.keys(data)){
                    if (values == data[i].mois_habituel_de_debut) {
                      nbOccu = nbOccu + 1;
                    }
                  }
                  nbLabelsBar.push(nbOccu);
                  //console.log("Tab Nb occu bar chart", nbLabelsBar);
                }
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
        return "Département";
      break;
      case('moisDeb'):
      return "Mois de début"
      break;
    }
  }

}
