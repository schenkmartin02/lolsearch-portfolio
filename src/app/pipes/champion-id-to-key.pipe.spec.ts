import { ChampionIdToKeyPipe } from './champion-id-to-key.pipe';

describe('ChampionIdToKeyPipe', () => {
  it('create an instance', () => {
    const pipe = new ChampionIdToKeyPipe();
    expect(pipe).toBeTruthy();
  });
});
