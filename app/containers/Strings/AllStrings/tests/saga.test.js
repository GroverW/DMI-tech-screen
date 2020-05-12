/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from '../../constants';
import { loadStringsSuccess, loadStringsError } from '../actions';
import allStringsSaga, { fetchStrings } from '../saga';

describe('allStringsSaga Saga', () => {
  let addNewStringGenerator;
  let fetchStringsGenerator;
  const testStart = 0;

  beforeAll(() => {
    addNewStringGenerator = allStringsSaga();
    fetchStringsGenerator = fetchStrings({
      type: LOAD_STRINGS,
      data: testStart,
    });
    fetchStringsGenerator.next();
  });

  it('should dispatch LOAD_STRINGS action', () => {
    expect(addNewStringGenerator.next().value).toEqual(
      takeLatest(LOAD_STRINGS, fetchStrings),
    );
  });

  it('should be done on next iteration', () => {
    expect(addNewStringGenerator.next().done).toBe(true);
  });

  it('should call api and return string if called successfully action', () => {
    const response = {
      data: { strings: ['test'] },
    };

    expect(fetchStringsGenerator.next(response).value).toEqual(
      put(loadStringsSuccess(['test'])),
    );
  });

  it('should throw error if returned error response', () => {
    const error = {
      response: {
        status: 500,
        data: {
          message: 'Error Response',
        },
      },
    };

    expect(fetchStringsGenerator.throw(error).value).toEqual(
      put(loadStringsError([expect.any(String)])),
    );
  });
});
