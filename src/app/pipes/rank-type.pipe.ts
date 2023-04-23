import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankType'
})
export class RankTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'RANKED_SOLO_5x5') {
      return 'Solo/Duo';
    }
    if (value === 'RANKED_FLEX_SR') {
      return 'Flex';
    }
    return value;
  }

}
