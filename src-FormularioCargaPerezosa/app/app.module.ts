import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Form1Component } from './form1/form1/form1.component';
import { Form2Component } from './form2/form2/form2.component';
import { Form3Component } from './form3/form3/form3.component';
import { Form4Component } from './form/form4/form4.component';
import { Form5Component } from './form5/form5/form5.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { ParadorComponent } from './parador/parador.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { TemporizadorComponent } from './form5/temporizador/temporizador.component';
import { Inp1Component } from './inp1/inp1/inp1.component';
import { HuertoComponent } from './inp1/huerto/huerto.component';
import { FrutalComponent } from './inp1/frutal/frutal.component';
import { HortalizaComponent } from './inp1/hortaliza/hortaliza.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    TemporizadorComponent,
    ParadorComponent,
    Inp1Component,
    HortalizaComponent,
    FrutalComponent,
    HuertoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
