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
} from './constants';

export const initialState = {
  list: [],
  loading: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const stringsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRING:
        draft.loading = true;
        draft.error = '';
        break;
      case ADD_STRING_SUCCESS:
        draft.loading = false;
        draft.error = '';
        draft.list.unshift(action.data);
        break;
      case ADD_STRING_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = '';
        break;
      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        draft.error = '';
        draft.list.push(...action.data);
        break;
      case LOAD_STRINGS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export const REDUCER_KEY = 'strings';

export default stringsReducer;
