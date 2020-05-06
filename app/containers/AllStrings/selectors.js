import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the allStrings state domain
 */

const selectAllStringsDomain = state => state.allStrings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AllStrings
 */

const makeSelectAllStrings = () =>
  createSelector(
    selectAllStringsDomain,
    substate => substate,
  );

export default makeSelectAllStrings;
export { selectAllStringsDomain };
