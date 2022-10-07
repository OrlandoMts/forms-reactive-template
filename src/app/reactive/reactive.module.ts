import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent,
    ResultadoComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
