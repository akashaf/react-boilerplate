// import { take, call, put, select } from 'redux-saga/effects';

import { takeLatest, call } from 'redux-saga/effects';
import { LOAD_ZONE_LIST } from './constants';
import { apiRequest } from '../../global-utils';

export function* queyZoneList() {
  const response = yield call(
    apiRequest,
    'https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json',
  );
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(LOAD_ZONE_LIST, queyZoneList);
  // See example in containers/HomePage/saga.js
}
