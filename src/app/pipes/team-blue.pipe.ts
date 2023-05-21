import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamBlue'
})
export class TeamBluePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
