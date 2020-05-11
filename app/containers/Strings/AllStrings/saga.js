import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_STRINGS_URL } from '../urls';
import { loadStringsSuccess, loadStringsError } from './actions';
import { LOAD_STRINGS } from '../constants';

export function* fetchStrings(action) {
  try {
    const { data } = action;
    const url = `${LOAD_STRINGS_URL}?start=${data}`;

    const response = yield call(() => axios.get(url));

    yield put(loadStringsSuccess(response.data.strings));
  } catch (error) {
    yield put(loadStringsError(error));
  }
}

// Individual exports for testing
export default function* allStringsSaga() {
  yield takeLatest(LOAD_STRINGS, fetchStrings);
}
