import { SummonerSpellIdToNamePipe } from './summoner-spell-id-to-name.pipe';

describe('SummonerSpellIdToNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SummonerSpellIdToNamePipe();
    expect(pipe).toBeTruthy();
  });
});
