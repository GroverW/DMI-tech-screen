import produce from 'immer';
import themeReducer from '../reducer';
import { setTheme } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('themeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      theme: 'light',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(themeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle setTheme action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.theme = 'dark';
    });

    expect(themeReducer(state, setTheme('dark'))).toEqual(expectedResult);
  });
});
