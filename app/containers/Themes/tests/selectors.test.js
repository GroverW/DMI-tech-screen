import { getTheme, makeGetTheme } from '../selectors';
import { themes } from '../index';

describe('getTheme', () => {
  it('should select the string state', () => {
    const themeState = 'light';
    const mockedState = {
      theme: themeState,
    };
    expect(getTheme(mockedState)).toEqual(themeState);
  });
});

describe('makeGetTheme', () => {
  const themeSelector = makeGetTheme();
  it('should select the strings', () => {
    const theme = themes.light;
    const mockedState = {
      state: {
        theme,
      },
    };
    expect(themeSelector(mockedState)).toEqual(theme);
  });
});
