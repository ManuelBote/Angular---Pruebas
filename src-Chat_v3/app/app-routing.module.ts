import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRegistroComponent } from './chat-registro/chat-registro.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AdminMensajeComponent } from './admin-mensaje/admin-mensaje.component';
import { BandejaMensajesComponent } from './bandeja-mensajes/bandeja-mensajes.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path: 'chatRegistro', component:ChatRegistroComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'registrar', component:RegistrarComponent
  },
  {
    path: 'adminMensaje', component:AdminMensajeComponent
  },
  {
    path: 'bandejaMensaje', component:BandejaMensajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
