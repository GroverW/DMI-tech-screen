import { addString, addStringSuccess, addStringError } from '../actions';
import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from '../../constants';

describe('AddNewString actions', () => {
  describe('Add New String Action', () => {
    it('has a type of ADD_STRING', () => {
      const expected = {
        type: ADD_STRING,
        data: '',
      };
      expect(addString('')).toEqual(expected);
    });
  });

  describe('Add New String Success Action', () => {
    it('has a type of ADD_STRING_SUCCESS', () => {
      const expected = {
        type: ADD_STRING_SUCCESS,
        data: '',
      };
      expect(addStringSuccess('')).toEqual(expected);
    });
  });

  describe('Add New String Error Action', () => {
    it('has a type of ADD_STRING_ERROR', () => {
      const expected = {
        type: ADD_STRING_ERROR,
        error: '',
      };
      expect(addStringError('')).toEqual(expected);
    });
  });
});
