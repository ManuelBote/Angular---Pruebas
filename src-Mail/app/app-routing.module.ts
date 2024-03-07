import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';
import { EnviarMensajeComponent } from './enviar-mensaje/enviar-mensaje.component';
import { NoLeidoComponent } from './no-leido/no-leido.component';
import { EnviadosComponent } from './enviados/enviados.component';

const routes: Routes = [
  {
    path:'bandejaEntrada', component:BandejaEntradaComponent
  },
  {
    path:'enviarMensaje', component:EnviarMensajeComponent
  },
  {
    path:'', component:BandejaEntradaComponent
  },
  {
    path:'noLeido', component:NoLeidoComponent
  },
  {
    path:'enviados', component:EnviadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
