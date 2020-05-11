import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { themes } from './themes';

/**
 * Direct selector to the setTheme state domain
 */

const getTheme = state => state.theme || initialState;

/**
 * Select the ui theme
 */

const makeGetTheme = () =>
  createSelector(
    getTheme,
    themeState => themes[themeState.theme],
  );

export { getTheme, makeGetTheme };
