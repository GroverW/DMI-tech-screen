import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_STRING_URL } from '../urls';
import { addStringSuccess, addStringError } from './actions';
import { ADD_STRING } from '../constants';

export function* postNewString(action) {
  try {
    const { data } = action;
    const response = yield call(() => axios.post(ADD_STRING_URL, { data }));

    yield put(addStringSuccess(response.data.string));
  } catch (error) {
    yield put(addStringError(error.response.data.error));
  }
}
// Individual exports for testing
export default function* addNewStringSaga() {
  yield takeLatest(ADD_STRING, postNewString);
}
