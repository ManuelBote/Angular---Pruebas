import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HortalizaRoutingModule } from './hortaliza-routing.module';
import { TomateComponent } from './tomate/tomate.component';
import { PepinoComponent } from './pepino/pepino.component';
import { LechugaComponent } from './lechuga/lechuga.component';


@NgModule({
  declarations: [
    TomateComponent,
    PepinoComponent,
    LechugaComponent
  ],
  imports: [
    CommonModule,
    HortalizaRoutingModule
  ]
})
export class HortalizaModule { }
