import { Component, OnInit } from '@angular/core';
import { ManipDonneesService } from '../manip-donnees.service';


@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  constructor(private bd: ManipDonneesService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //public pieChartData = [120, 150, 180, 90];
  public pieChartLabels = this.addDataIntoLabels();
  // TODO Compter le nombre d'occurence 
  public pieChartData = [3];

  public pieChartType = 'pie';

  ngOnInit() {
  }

  addDataIntoLabels() {
    let dataLabels = [];
    this.bd.tabDSub.subscribe((tab) => {
      let data = tab
      for (const i of Object.keys(data)) {
        if (this.pieChartLabels.indexOf(data[i].domaine) == -1) {
            dataLabels.push(data[i].domaine);
          }
      }
      console.log("Data labels : ", dataLabels);
    });
    return dataLabels;
  }

  countData(){
    let nbLabels = [];

    return nbLabels;
  }
}
