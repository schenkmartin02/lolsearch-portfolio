import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemNotFound'
})
export class ItemNotFoundPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 0) {
      return false;
    }
    return true;
  }

}
