import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  var myDoughnutChart = new Chart("myChart2", {
    type: 'doughnut',
    data : {
      datasets: [{
          data: [6, 8, 8],
          backgroundColor:[
            'rgba(0,51,204,0.2)',
            'rgba(54, 162, 235, 1)',
            'rgba(0,153,204,0.2)',
        ]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Administrateur',
          'Etudiants',
          'Enseignants'
      ]
  }});
  }

}
