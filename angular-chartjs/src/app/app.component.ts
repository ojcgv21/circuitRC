import { Component } from '@angular/core';
import { CircuitService } from './circuit.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];
  data = { R1: 1000, C1: 5, C2: 5, C3: 5, C4: 5, voltaje: 10 };

  constructor(private circuitService: CircuitService) {}

  ngOnInit() {}

  calculate() {
    const R = this.data.R1;
    const v_0 = this.data.voltaje;
    const C1 = this.data.C1 * 0.000001;
    const C2 = this.data.C2 * 0.000001;
    const C3 = this.data.C3 * 0.000001;
    const C4 = this.data.C4 * 0.000001;
    

    const temp = this.circuitService.generateMiliSeconds();
    const chargeCurve =  this.circuitService.generateQ(temp, v_0, R, C1, C2, C3, C4);


    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: temp,
        datasets: [
          {
            data: chargeCurve,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
}
