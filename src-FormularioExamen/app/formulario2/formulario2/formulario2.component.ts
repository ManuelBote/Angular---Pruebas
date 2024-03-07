import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component {




constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.miform=this.fb.group({
      cif: ['',[Validators.required,Validators.pattern(/^\d{8}[A-Z]$/)]],
      nombre: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
      n1: ['',[Validators.required,Validators.pattern(/^(10|[0-9])$/)]],
      n2: ['',[Validators.required,Validators.pattern(/^(10|[0-9])$/)]],
      n3: ['',[Validators.required,Validators.pattern(/^(10|[0-9])$/)]],
    });
  }

EnviarNotas() {
  if(this.miform.valid){
    alert("Notas enviadas")
  }else{
    alert('Los datos no son validos');
  }

}

miform!: FormGroup;

}
