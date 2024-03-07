import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { MelocotonComponent } from './melocoton/melocoton.component';
import { KiwiComponent } from './kiwi/kiwi.component';
import { PapayaComponent } from './papaya/papaya.component';


@NgModule({
  declarations: [
    MelocotonComponent,
    KiwiComponent,
    PapayaComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
