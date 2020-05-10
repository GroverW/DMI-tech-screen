/*
 *
 * AddNewString reducer
 *
 */
import produce from 'immer';
import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

export const initialState = {
  list: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const stringsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRING:
        draft.loading = true;
        draft.error = false;
        break;
      case ADD_STRING_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.list.unshift(action.data);
        break;
      case ADD_STRING_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default stringsReducer;
