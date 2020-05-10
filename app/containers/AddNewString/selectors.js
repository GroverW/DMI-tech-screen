import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the strings state domain
 */

const selectStrings = state => state.strings || initialState;

/**
 * Select the ui theme
 */

const makeSelectStrings = () =>
  createSelector(
    selectStrings,
    stringsState => stringsState,
  );

export { selectStrings, makeSelectStrings };
