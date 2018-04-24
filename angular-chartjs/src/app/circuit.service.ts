import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CircuitService {

  constructor(private _http: HttpClient) { }

  generateMiliSeconds() {
    const res = [];
    for (let i = 0; i < 100; i++) {
      res.push(i * 0.001);
    }
    return res;
  }

  generateVoltage(temp, v_0, R, C) {
    const res = [];
    for (let i = 0; i < temp.length; i++) {
      res.push(v_0 * Math.exp( (-1) * temp[i]/ (R * C) ));
    }
    return res;
  }

  generateCurrent(temp, v_0, R, C) {
    const res = [];
    for (let i = 0; i < temp.length; i++) {
      res.push(v_0 - v_0 * Math.exp( (-1) * temp[i]/ (R * C) ));
    }
    return res;
  }


}
