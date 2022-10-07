import { Component, OnInit, ViewChild } from '@angular/core';
import { IRegisterForm } from 'src/app/interfaces/index.itf';
import { NgForm } from "@angular/forms";
import { FormsService } from 'src/app/services/forms.service';

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
    password: ''
  };

  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.myForm.value)
    if(this.myForm.invalid) return;
    this.formsService.setDataUser(this.myForm.value)

    this.myForm.resetForm();
  }

}
