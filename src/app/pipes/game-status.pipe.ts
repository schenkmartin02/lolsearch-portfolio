import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gameStatus'
})
export class GameStatusPipe implements PipeTransform {

  transform(value: any[]): unknown {
    if (value) {
      return "Victory";
    } else {
      return "Defeat";
    }
  }

}
