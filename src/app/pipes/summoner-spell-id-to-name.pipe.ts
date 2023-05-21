import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summonerSpellIdToName'
})
export class SummonerSpellIdToNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 1) {
      return 'SummonerBoost';
    }
    if (value === 3) {
      return 'SummonerExhaust';
    }
    if (value === 4) {
      return 'SummonerFlash';
    }
    if (value === 6) {
      return 'SummonerHaste';
    }
    if (value === 7) {
      return 'SummonerHeal';
    }
    if (value === 11) {
      return 'SummonerSmite';
    }
    if (value === 12) {
      return 'SummonerTeleport';
    }
    if (value === 13) {
      return 'SummonerMana';
    }
    if (value === 14) {
      return 'SummonerDot';
    }
    if (value === 21) {
      return 'SummonerBarrier';
    }
    if (value === 30) {
      return 'SummonerPoroRecall';
    }
    if (value === 31) {
      return 'SummonerPoroThrow';
    }
    if (value === 32) {
      return 'SummonerSnowball';
    }
    return value;
  }

}
