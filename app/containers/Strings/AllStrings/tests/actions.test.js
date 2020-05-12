import { loadStrings, loadStringsSuccess, loadStringsError } from '../actions';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../../constants';

describe('AllStrings actions', () => {
  describe('Load Strings Action', () => {
    it('has a type of LOAD_STRINGS', () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStringsSuccess()).toEqual(expected);
    });
  });
  describe('Load Strings Success Action', () => {
    it('has a type of LOAD_STRINGS_SUCCESS', () => {
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
      };
      expect(loadStringsError()).toEqual(expected);
    });
  });
  describe('Load Strings Error Action', () => {
    it('has a type of LOAD_STRINGS_ERROR', () => {
      const expected = {
        type: LOAD_STRINGS_ERROR,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });
});
