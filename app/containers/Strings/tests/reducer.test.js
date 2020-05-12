import produce from 'immer';
import stringsReducer from '../reducer';
import {
  addString,
  addStringSuccess,
  addStringError,
} from '../AddNewString/actions';

/* eslint-disable default-case, no-param-reassign */
describe('stringsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      loading: false,
      loaded: false,
      error: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(stringsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle addString action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.loaded = false;
      draft.error = false;
    });

    expect(stringsReducer(state, addString('test'))).toEqual(expectedResult);
  });

  it('should handle addStringSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.loaded = true;
      draft.error = false;
    });

    expect(stringsReducer(state, addStringSuccess('test'))).toEqual(
      expectedResult,
    );
  });

  it('should handle addStringError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.loaded = false;
      draft.error = ['error'];
    });

    expect(stringsReducer(state, addStringError(['error']))).toEqual(
      expectedResult,
    );
  });
});
