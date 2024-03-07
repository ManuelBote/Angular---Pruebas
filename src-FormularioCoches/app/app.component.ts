import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Coche } from './coche';
import { ServicioCocheService } from './servicio-coche.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formularioCoches';

  dataSource = new MatTableDataSource<Coche>();

  columna: string[] = ['matricula', 'motor', 'climatizador', 'cargadorElectrico', 'gps', 'neumatico'];

  miform!: FormGroup;

  matricula!:string;

  constructor(private service:ServicioCocheService, private fb:FormBuilder){
    this.miform=this.fb.group({
      matricula:['',[Validators.required, Validators.pattern('^\d{4}[A-Z]{3}$')]],
      motor:['',[Validators.required]],
      climatizador:['false', []],
      cargadorElectrico:['false', []],
      gps:['false',[]],
      neumatico: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.service.obtenerCoche().subscribe((x)=>{
      this.dataSource.data = x;
    })
  }

  insertarCoche(){

  }
}
