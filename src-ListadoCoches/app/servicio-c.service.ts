import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ServicioCService {

  constructor(private http: HttpClient) { }

  listarVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>("https://random-data-api.com/api/vehicle/random_vehicle?size=100");
  }
}
