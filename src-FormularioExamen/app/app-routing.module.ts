import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formulario1Component } from './formulario1/formulario1/formulario1.component';
import { Formulario1Module } from './formulario1/formulario1.module';
import { Input2Component } from './input2/input2/input2.component';
import { Input1Component } from './input1/input1/input1.component';
import { Formulario2Component } from './formulario2/formulario2/formulario2.component';
import { Input2Module } from './input2/input2.module';
import { Input1Module } from './input1/input1.module';
import { Formulario2Module } from './formulario2/formulario2.module';

const routes: Routes = [
  {
    path:"formulario1", component:Formulario1Component, loadChildren: () =>import('./formulario1/formulario1.module').then(m=>Formulario1Module)
  },
  {
    path:"formulario2", component:Formulario2Component, loadChildren: () =>import('./formulario2/formulario2.module').then(m=>Formulario2Module)
  },
  {
    path:"input1", component:Input1Component, loadChildren: () =>import('./input1/input1.module').then(m=>Input1Module)
  },
  {
    path:"input2", component:Input2Component, loadChildren: () =>import('./input2/input2.module').then(m=>Input2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
