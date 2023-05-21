import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundingInt'
})
export class RoundingIntPipe implements PipeTransform {

  transform(value: any): any {
    return Math.round(value);
  }

}
