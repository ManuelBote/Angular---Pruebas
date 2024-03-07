import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form5RoutingModule } from './form5-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Form5RoutingModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Form5Module { }
