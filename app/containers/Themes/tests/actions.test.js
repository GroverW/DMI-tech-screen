import { setTheme } from '../actions';
import { SET_THEME } from '../constants';

describe('Theme actions', () => {
  describe('Set Theme Action', () => {
    it('has a type of SET_THEME', () => {
      const expected = {
        type: SET_THEME,
        theme: '',
      };
      expect(setTheme('')).toEqual(expected);
    });
  });
});
