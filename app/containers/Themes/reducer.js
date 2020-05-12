/*
 *
 * SetTheme reducer
 *
 */
import produce from 'immer';
import { SET_THEME } from './constants';
import { DEFAULT_THEME } from './index';

export const initialState = {
  theme: DEFAULT_THEME,
};

/* eslint-disable default-case, no-param-reassign */
const setThemeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_THEME:
        draft.theme = action.theme;
        break;
    }
  });

export default setThemeReducer;
