/**
 *
 * Styled Component Themes
 *
 */

const light = {
  name: 'light',
  colors: {
    font: 'black',
    background: '#fafafa',
    backgroundSubtle: '#ececec',
    primary: '#5294ff',
    primaryHover: '#3f7fe8',
    primaryFocus: '#2c68c9',
    border: '#5294ff',
    body: 'white',
  },
};

const dark = {
  name: 'dark',
  colors: {
    font: 'white',
    background: '#2d2d2d',
    backgroundSubtle: '#3d3d3d',
    primary: 'gold',
    primaryHover: 'gold',
    primaryFocus: 'gold',
    border: 'gold',
    body: '#2d2d2d',
  },
};

export const themes = {
  light,
  dark,
};

export const DEFAULT_THEME = 'light';
