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
  data = { resistencia: 500, capacitancia: 10, voltaje: 4 };

  constructor(private circuitService: CircuitService) {}

  ngOnInit() {}

  calculate() {
    const R = this.data.resistencia;
    const C = this.data.capacitancia * 0.000001;
    const v_0 = this.data.voltaje;

    const temp = this.circuitService.generateMiliSeconds();
    const voltageCurve =  this.circuitService.generateVoltage(temp, v_0, R, C);
    const currentCurve = this.circuitService.generateCurrent(temp, v_0, R, C);


    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: temp,
        datasets: [
          {
            data: voltageCurve,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: currentCurve,
            borderColor: '#ffcc00',
            fill: false
          },
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
