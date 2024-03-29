import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textMaxLenght'
})
export class TextMaxLenghtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if ((value as string).length > 6) {
      return (value as string).substring(0, 6) + '...';
    }
    return value;
  }

}
