import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

formulario!: FormGroup;

dataSource= new MatTableDataSource<Alumnos>();

columnas: string[] = ['cif', 'nombre', 'n1', 'n2', 'n3'];

constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.formulario=this.fb.group({
      cif:['', [Validators.required, Validators.pattern(/^\d{8}[A-Z]$/)]],
      nombre:['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      n1:['', [Validators.required, Validators.pattern('^(10|[0-9])$')]],
      n2:['', [Validators.required, Validators.pattern('^(10|[0-9])$')]],
      n3:['', [Validators.required, Validators.pattern('^(10|[0-9])$')]]
    });
  }

enviarNotas(){
  if(this.formulario.valid){
    alert("Todo valido");
    this.dataSource.data.push(this.formulario.value);
    this.dataSource._updateChangeSubscription();
    this.formulario.reset();
  }
}

}
