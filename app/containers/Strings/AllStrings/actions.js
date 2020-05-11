/*
 *
 * AllStrings actions
 *
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

export function loadStrings(data) {
  return {
    type: LOAD_STRINGS,
    data,
  };
}

export function loadStringsSuccess(data) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    data,
  };
}

export function loadStringsError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}
