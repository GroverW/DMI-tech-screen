import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { themes } from './themes';

/**
 * Direct selector to the setTheme state domain
 */

const selectTheme = state => state.theme || initialState;

/**
 * Select the ui theme
 */

const makeSelectSetTheme = () =>
  createSelector(
    selectTheme,
    themeState => themes[themeState.theme],
  );

export { selectTheme, makeSelectSetTheme };
