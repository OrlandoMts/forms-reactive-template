import { Component, OnInit, ViewChild } from '@angular/core';
import { IRegisterForm } from 'src/app/interfaces/index.itf';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm

  public register: IRegisterForm = {
    name: '',
    email: '',
    password: '',
    repeatPass: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

}
