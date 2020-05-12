import { resetStatuses } from '../actions';
import { RESET_STATUSES } from '../constants';

describe('Strings actions', () => {
  describe('Reset Statuses Action', () => {
    it('has a type of RESET_STATUSES', () => {
      const expected = {
        type: RESET_STATUSES,
      };
      expect(resetStatuses()).toEqual(expected);
    });
  });
});
