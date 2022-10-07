import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TemplateRoutingModule } from './template-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    FormularioComponent,
    ResultadoComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
