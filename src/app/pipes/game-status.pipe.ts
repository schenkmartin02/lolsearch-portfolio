import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gameStatus'
})
export class GameStatusPipe implements PipeTransform {

  transform(value: any[], id: string): unknown {
    for (let player of value) {
      if (player.summonerId == id) {
        if (player.win) {
          return "text-success";
        } else {
          return "text-error";
        }
      }
    }
    return value;
  }

}
