import { Component } from '@angular/core';
import { MenuItem } from './interfaces/index.itf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';

  templateMenu: MenuItem[] = [
    {texto: 'Ir a los formularios por template - Cuentas', ruta: '/template'},
    {texto: 'Ir a los formularios reactivos - Animalitos', ruta: '/reactive'}
  ]
}
