import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    extingued: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.myForm.invalid) return;

    if (this.myForm.controls['extingued'].value == "") {
      this.myForm.get('extingued')?.setValue(false);
    }
    console.log(this.myForm.value)
    this.myForm.reset();
   }

}
