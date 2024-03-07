import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Formulario1Component } from './formulario1/formulario1/formulario1.component';
import { Formulario2Component } from './formulario2/formulario2/formulario2.component';
import { Input1Component } from './input1/input1/input1.component';
import { Input2Component } from './input2/input2/input2.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuuComponent } from './menuu/menuu.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './input1/body/body.component';
import { FooterComponent } from './input1/footer/footer.component';
import { HeaderComponent } from './input1/header/header.component';
import { PadreComponent } from './input2/padre/padre.component';
import { HijoComponent } from './input2/hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    Formulario2Component,
    Input1Component,
    Input2Component,
    MenuComponent,
    MenuuComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HijoComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
