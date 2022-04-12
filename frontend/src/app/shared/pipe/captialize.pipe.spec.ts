import { CapitalizePipe } from './capitalize.pipe';

describe('Pipe Capitalize', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('Check to convert string one word to Capitalize', () => {
    expect(pipe.transform('apsis')).toBe('Apsis');
  });

  it('Check to convert string one multi to Capitalize', () => {
    expect(pipe.transform('free apsis')).toBe('Free Apsis');
  });

});
