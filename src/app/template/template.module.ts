import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TemplateRoutingModule } from './template-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    FormularioComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class TemplateModule { }
