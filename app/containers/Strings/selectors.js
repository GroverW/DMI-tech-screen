import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the strings state domain
 */

const selectStrings = state => state.strings || initialState;

/**
 * Select strings
 */

const makeGetStrings = () =>
  createSelector(
    selectStrings,
    stringsState => stringsState,
  );

export { selectStrings, makeGetStrings };
