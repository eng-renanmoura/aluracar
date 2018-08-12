import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Carro } from '../../modelos/carro';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarrosServiceProvider {

  constructor(public _http: HttpClient) {
  }

  lista(){
    return this._http.get<Carro[]>('http://192.168.0.4:8080/api/carro/listaTodos');
  }

}
