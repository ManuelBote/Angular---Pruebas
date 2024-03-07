import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.miformulario=this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      fechaN:['', Validators.required],
      tCredito: ['', [Validators.required, Validators.pattern("^[0-9]{25}$")]],
      psw: ['', [Validators.required, Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$")]]
    })
  }

  miformulario!: FormGroup;

  get nombre(){
    return this.miformulario.get('nombre')
  }

  enviarDatos(){
    if(this.miformulario.valid){
      alert("Enviando datos");
    }
  }

}
