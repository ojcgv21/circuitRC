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

  generateQ(temp, v_0, R1, C1, C2, C3, C4) {
    const res = [];
    const CR = 1.0 / (1.0 / (C1 + C2) + 1.0 / C3 + 1.0 / C4);
    for (let i = 0; i < temp.length; i++) {
      res.push(v_0 * CR * (1 - Math.exp( (-1) * temp[i]/ (R1 * CR) )) );
    }
    return res;
  }



}
