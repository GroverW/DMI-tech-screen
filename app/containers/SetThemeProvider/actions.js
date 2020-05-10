/*
 *
 * AllStrings actions
 *
 */

import { SET_THEME } from './constants';

export function setTheme(theme) {
  return {
    type: SET_THEME,
    theme,
  };
}
