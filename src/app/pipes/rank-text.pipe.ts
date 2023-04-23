import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankText'
})
export class RankTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'IRON') {
      return 'iron-text';
    }
    if (value === 'BRONZE') {
      return 'bronze-text';
    }
    if (value === 'SILVER') {
      return 'silver-text';
    }
    if (value === 'GOLD') {
      return 'gold-text';
    }
    if (value === 'PLATINUM') {
      return 'platinum-text';
    }
    if (value === 'DIAMOND') {
      return 'diamond-text';
    }
    if (value === 'MASTER') {
      return 'master-text';
    }
    if (value === 'GRANDMASTER') {
      return 'grandmaster-text';
    }
    if (value === 'CHALLENGER') {
      return 'challenger-text';
    }
    return null;
  }

}
