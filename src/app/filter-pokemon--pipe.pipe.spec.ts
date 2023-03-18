import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';

describe('FilterPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPokemonPipe();
    expect(pipe).toBeTruthy();
  });
});
