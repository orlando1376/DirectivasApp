import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    button {
      margin-right: 10px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });
  color: string = 'red';
  textoMsg: string = 'Este campo es obligatorio';

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid;
  }

  cambiarMensaje() {
    this.textoMsg = Math.random().toString();
  }

  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
