/*
 *
 * AddNewString actions
 *
 */

import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR } from './constants';

export function addString(data) {
  return {
    type: ADD_STRING,
    data,
  };
}

export function addStringSuccess(data) {
  return {
    type: ADD_STRING_SUCCESS,
    data,
  };
}

export function addStringError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}
