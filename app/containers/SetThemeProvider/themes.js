/**
 *
 * Styled Component Themes
 *
 */

const light = {
  name: 'light',
  colors: {
    font: 'black',
    background: '#FAFAFA',
    primary: 'blue',
    border: '#5294FF',
    body: 'white',
  },
};

const dark = {
  name: 'dark',
  colors: {
    font: 'white',
    background: '#2D2D2D',
    primary: 'white',
    border: 'gold',
    body: '#2D2D2D',
  },
};

export const themes = {
  light,
  dark,
};

export const DEFAULT_THEME = 'light';
