import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminMsgService {

  constructor(private httpCLiente : HttpClient) { }

  obtenerMensajes():Observable<Mensaje[]>{
    return this.httpCLiente.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes.php');
  }

  activarMensaje(msg:Mensaje){
    return this.httpCLiente.put('http://moralo.atwebpages.com/chat/ActivarMensaje.php', msg);
  }

  bloquearMensaje(msg:Mensaje){
    return this.httpCLiente.put('http://moralo.atwebpages.com/chat/BloquearMensaje.php', msg);
  }

}
