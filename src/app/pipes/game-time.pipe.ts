import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameTime'
})
export class GameTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let minutes = Math.floor((value as number) / 60);
    let seconds = Math.floor((value as number) % 60);
    if (seconds < 10) {
      return minutes + ":0" + seconds;
    }
    return minutes + ":" + seconds;
  }

}
