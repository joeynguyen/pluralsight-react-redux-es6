import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function coursesReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
