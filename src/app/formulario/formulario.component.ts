import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  userForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {
this.userForm = this.formBuilder.group({
  nombre: ['',[Validators.required]],
  apellido: ['',[Validators.required]],
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
})
    }

    get emailControl(){
      return this.userForm.controls['email'];
    }

    get emailControlIsInvalid(){
      return this.emailControl.invalid && this.emailControl.touched;
    }
    onSubmit(): void{
      if(this.userForm.invalid){
        alert('Formulario invalido');
      }
      else{
        console.log(this.userForm.value);
      }
    }
}
