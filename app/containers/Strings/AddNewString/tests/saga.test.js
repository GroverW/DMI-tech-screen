/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import { ADD_STRING } from '../../constants';
import { addStringSuccess, addStringError } from '../actions';
import addNewStringSaga, { postNewString } from '../saga';

describe('addNewStringSaga Saga', () => {
  let addNewStringGenerator;
  let postNewStringGenerator;
  const testString = 'test';

  beforeAll(() => {
    addNewStringGenerator = addNewStringSaga();
    postNewStringGenerator = postNewString({
      type: ADD_STRING,
      data: testString,
    });
    postNewStringGenerator.next();
  });

  it('should dispatch ADD_STRING action', () => {
    expect(addNewStringGenerator.next().value).toEqual(
      takeLatest(ADD_STRING, postNewString),
    );
  });

  it('should be done on next iteration', () => {
    expect(addNewStringGenerator.next().done).toBe(true);
  });

  it('should call api and return string if called successfully action', () => {
    const response = {
      data: { string: testString },
    };

    expect(postNewStringGenerator.next(response).value).toEqual(
      put(addStringSuccess(testString)),
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

    expect(postNewStringGenerator.throw(error).value).toEqual(
      put(addStringError([expect.any(String)])),
    );
  });
});
