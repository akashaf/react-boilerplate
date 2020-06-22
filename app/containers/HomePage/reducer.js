/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_ZONE_LIST } from './constants';

export const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ZONE_LIST:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
