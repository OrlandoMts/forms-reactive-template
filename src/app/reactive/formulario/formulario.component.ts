import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  public species = ['Marino', 'Terrestre', 'Volador'];

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    specie: ['', Validators.required],
    extingued: [false]
  })

  constructor(private fb: FormBuilder, private formsService: FormsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.myForm.invalid) return;

    // console.log(this.myForm.value)
    this.formsService.setDataAnimal(this.myForm.value);
    this.myForm.reset();
   }

}
