import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor(private http:HttpClient) { }

  obtenerEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>("http://moralo.atwebpages.com/Empleados/getEmpleados.php");
  }

  enviarEmpleado(emp:Empleado){
    return this.http.post("http://moralo.atwebpages.com/Empleados/insertarEmpleado.php", emp, {responseType:"text"})
  }
}
