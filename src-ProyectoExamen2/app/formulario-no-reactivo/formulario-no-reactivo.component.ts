import { Component, OnInit } from '@angular/core';
import { FormularioServiciService } from '../formulario-servici.service';
import { Parador } from '../parador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-no-reactivo',
  templateUrl: './formulario-no-reactivo.component.html',
  styleUrls: ['./formulario-no-reactivo.component.css']
})
export class FormularioNoReactivoComponent implements OnInit{


  constructor(private servicio:FormularioServiciService, private fb:FormBuilder){
  }

  paradores: Parador[] = [];

  miform!: FormGroup;

  cargarParadores(){
    this.servicio.obtenerParador().subscribe((x)=> {this.paradores=x;
      console.log(this.paradores);
    });
  }

  ngOnInit(): void {
    this.cargarParadores()
    this.miform = this.fb.group({
      nombre: ['',[Validators.required]],
      parador: ['',[Validators.required]],
      fechaE: ['',[Validators.required]],
      fechaS: ['',[Validators.required]]
    },{
      validator : [this.fechaMayorS, this.fechaMayorE]

    })
  }


  // validar(){
  //   if(this.miform.valid){
  //     alert(
  //       this.miform.get('nombre')?.value + " - " +
  //       this.miform.get('parador')?.value  + " - Fecha de entrada:" +
  //       this.miform.get('fechaE')?.value  + " - Fecha de salida:" +
  //       this.miform.get('fechaS')?.value
  //     )
  //   } else{
  //     if(this.miform.get('nombre')?.hasError('required') || this.miform.get('parador')?.hasError('required')){
  //       alert("Falta nombre o parador");
  //     } else if(this.miform.get('fechaE')?.hasError('fechaNoValida') || this.miform.get('fechaE')?.hasError('fechaNoValida')){
  //       alert("Fecha no valida");
  //     } else {
  //       alert("Error de validacion");
  //     }
  //   }
  // }

  enviar(){
    alert("Formulario enviado");
  }


 fechaMayorE(f : FormGroup) {
  const fechaSeleccionada = f.get('fechaE')?.value;
  const fechaActual = new Date();

  if (fechaSeleccionada <= fechaActual) {
    f.get('fechaE')?.setErrors({"fechaNoValida" : true})
  }else {
    f.get('fechaE')?.setErrors(null)
  }
}

fechaMayorS(f : FormGroup) {
  const fechaSeleccionada = f.get('fechaS')?.value;
  const fechaActual = f.get('fechaE')?.value;

  if (fechaSeleccionada <= fechaActual) {
    f.get('fechaS')?.setErrors({"fechaNoValida" : true})
  }else {
    f.get('fechaS')?.setErrors(null)
  }
}

}
