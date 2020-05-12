/*
 *
 * AddNewString reducer
 *
 */
import produce from 'immer';
import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
  RESET_STATUSES,
} from './constants';

export const initialState = {
  list: [],
  loading: false,
  loaded: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const stringsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRING:
        draft.loading = true;
        draft.loaded = false;
        draft.error = false;
        break;
      case ADD_STRING_SUCCESS:
        draft.loading = false;
        draft.loaded = true;
        draft.error = false;
        if (draft.list.length) draft.list.unshift(action.data);
        break;
      case ADD_STRING_ERROR:
        draft.loading = false;
        draft.loaded = false;
        draft.error = action.error;
        break;
      case LOAD_STRINGS:
        draft.loading = true;
        draft.loaded = false;
        draft.error = false;
        break;
      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        if (!action.data.length) draft.loaded = true;
        draft.error = false;
        draft.list.push(...action.data);
        break;
      case LOAD_STRINGS_ERROR:
        draft.loading = false;
        draft.loaded = false;
        draft.error = action.error;
        break;
      case RESET_STATUSES:
        draft.loading = initialState.loading;
        draft.loaded = initialState.loaded;
        draft.error = initialState.error;
        break;
    }
  });

export const REDUCER_KEY = 'strings';

export default stringsReducer;
