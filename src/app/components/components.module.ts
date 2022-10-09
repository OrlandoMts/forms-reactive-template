import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { YesNoPipe } from '../pipe/yes-no.pipe';


@NgModule({
  declarations: [
    ResultsComponent,
    YesNoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResultsComponent
  ]
})
export class ComponentsModule { }
