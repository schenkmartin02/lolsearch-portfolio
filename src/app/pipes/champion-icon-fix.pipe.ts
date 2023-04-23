import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'championIconFix'
})
export class ChampionIconFixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == "FiddleSticks") {
      return "Fiddlesticks";
    }
    return value;
  }

}
