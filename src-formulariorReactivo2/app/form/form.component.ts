import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
submitForm() {
throw new Error('Method not implemented.');
}

  miform !: FormGroup;

  constructor(private fb:FormBuilder){}


  ngOnInit(): void {
    this.miform = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      fecha:['',[Validators.required]],
      cargo:['',[Validators.required]],
      ps:['',[Validators.required, Validators.pattern('^[A-Z].{8}[0-9]$'), Validators.minLength(10), Validators.maxLength(10)]],
      r_ps:['',[Validators.required]],

    },{
        validator: this.passwordMatchValidator
    })
  }

  passwordMatchValidator(f : FormGroup){
    const ps = f.get('ps');
    const r_ps = f.get('r_ps');

    if(ps?.value != ''){
      if(ps?.value!==r_ps?.value){
        r_ps?.setErrors({ contraseñaNoCoincide: true });
      }else{
        r_ps?.setErrors(null);
      }
    }
  }

}
