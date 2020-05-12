/*
 *
 * Strings actions
 *
 */

import { RESET_STATUSES } from './constants';

export function resetStatuses() {
  return {
    type: RESET_STATUSES,
  };
}
