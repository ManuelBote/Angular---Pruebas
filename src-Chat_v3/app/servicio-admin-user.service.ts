import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminUserService {

  constructor(private httpCLiente : HttpClient) { }

  obtenerUsuarios():Observable<Usuario[]>{
    return this.httpCLiente.get<Usuario[]>("http://moralo.atwebpages.com/chat/ObtenerUsuarios.php");
  }

  activarUsuario(user:Usuario){
    return this.httpCLiente.put('http://moralo.atwebpages.com/chat/ActivarUsuario.php', user);
  }

  bloquearUsuario(user:Usuario){
    return this.httpCLiente.put('http://moralo.atwebpages.com/chat/BloquearUsuario.php', user);
  }

}
