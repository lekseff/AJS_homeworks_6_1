import Validator from '../app';

describe('check class Validator', () => {
  test.each(
    ['Fred', 'fred', 'fred-zombie', 'fred_big', 'fr1ed66zombie'],
  )('valid names', (name) => {
    expect(new Validator(name)).toBeTruthy();
  });

  test.each(
    ['1Fred', 'Fred1', 'f123456red', '-f123red', '-fred', 'fred-', '_fred', 'fred_', 'fred@i', 'fre#d', 'fre№d', 'fre$d', 'fre:d', 'fre()d', '-fre*d', '-fre=d', 'f?re?d', 'fre.d', 'fred big', 'Алексей'],
  )('not valid names', (name) => {
    function received() {
      return new Validator(name);
    }
    expect(received).toThrow('Не верное имя');
  });
});
