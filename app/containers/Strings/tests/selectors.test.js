import { selectStrings, makeGetStrings } from '../selectors';

describe('selectStrings', () => {
  it('should select the string state', () => {
    const stringState = {
      list: [],
      loading: false,
      loaded: false,
      error: false,
    };
    const mockedState = {
      strings: stringState,
    };
    expect(selectStrings(mockedState)).toEqual(stringState);
  });
});

describe('makeGetStrings', () => {
  const stringsSelector = makeGetStrings();
  it('should select the strings', () => {
    const strings = {
      list: [],
      loading: false,
      loaded: false,
      error: false,
    };
    const mockedState = {
      state: {
        strings,
      },
    };
    expect(stringsSelector(mockedState)).toEqual(strings);
  });
});
