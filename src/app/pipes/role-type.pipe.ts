import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleType'
})
export class RoleTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'TOP') {
      return 'Top';
    }
    if (value === 'JUNGLE') {
      return 'Jungle';
    }
    if (value === 'MIDDLE') {
      return 'Mid';
    }
    if (value === 'BOTTOM') {
      return 'Adc/Support';
    }
    return value;
  }

}
