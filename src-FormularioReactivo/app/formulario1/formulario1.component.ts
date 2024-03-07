import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit{

  formulario1!:FormGroup;

  enviarDatos(){
    alert('OK');
  }

  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {
    this.formulario1 = this.fb.group({
      name:['',[Validators.required, Validators.pattern('[a-zA-Z]'), Validators.minLength(3)]],
      firstName:['',[Validators.required, Validators.pattern('[a-zA-Z]'), Validators.maxLength(30)]],
      mail:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8), Validators.pattern('/^(=?.*[a-z])(?=.*\d')]]
    })
   }

}
