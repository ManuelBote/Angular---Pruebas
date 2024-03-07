import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomateComponent } from './tomate/tomate.component';
import { PatataComponent } from './patata/patata.component';
import { PimientoComponent } from './pimiento/pimiento.component';



@NgModule({
  declarations: [
    TomateComponent,
    PatataComponent,
    PimientoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HortalizaModule { }
