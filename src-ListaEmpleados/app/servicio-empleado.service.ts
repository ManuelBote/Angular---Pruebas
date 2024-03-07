import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadoService {
  constructor(private httpCliente: HttpClient) {}

  leerEmpleados(): Observable<Emp[]> {
    return this.httpCliente.get<Emp[]>(
      'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php'
    );
  }

  insertarEmpleado(empleado: Emp) {
    return this.httpCliente.post<Emp>(
      'http://moralo.atwebpages.com/ajaxListar/create_persona.php',
      empleado
    );
  }

  eliminarEmpleado(idEmpleado: number) {
    return this.httpCliente.delete<Emp>(
      'http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id=' +
        idEmpleado
    );
  }

  modificarEmpleado(empleado: Emp) {
    return this.httpCliente.put<Emp>(
      'http://moralo.atwebpages.com/ajaxListar/update_persona.php',
      empleado
    );
  }
}
