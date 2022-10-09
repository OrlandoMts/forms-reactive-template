import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  transform(extingued: boolean, ...args: unknown[]): string {
    return extingued ? 'Sí' : 'No';
  }

}
