import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coche } from './coche';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCocheService {

  constructor(private servicio:HttpClient) { }

  insertarCoche(coche:Coche){
    return this.servicio.post("http://moralo.atwebpages.com/vehiculos/insertarCoche.php", coche);
  }

  obtenerCoche():Observable<Coche[]>{
    return this.servicio.get<Coche[]>(" http://moralo.atwebpages.com/vehiculos/obtenerCoches.php");
  }
}
