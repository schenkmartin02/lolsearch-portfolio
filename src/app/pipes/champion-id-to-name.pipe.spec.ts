import { ChampionIdToNamePipe } from './champion-id-to-name.pipe';

describe('ChampionIdToNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ChampionIdToNamePipe();
    expect(pipe).toBeTruthy();
  });
});
