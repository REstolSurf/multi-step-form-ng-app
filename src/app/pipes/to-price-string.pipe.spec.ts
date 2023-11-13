import { ToPriceStringPipe } from './to-price-string.pipe';

describe('ToPriceStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ToPriceStringPipe();
    expect(pipe).toBeTruthy();
  });
});
